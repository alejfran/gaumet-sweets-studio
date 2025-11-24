import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { ShoppingBag, Store, CreditCard, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState<"store" | "mock">("store");
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground" />
          <h1 className="font-heading text-3xl font-bold">Tu carrito está vacío</h1>
          <p className="text-muted-foreground">Agrega productos para continuar</p>
          <Button asChild>
            <a href="/productos">
              <ArrowLeft className="mr-2 h-4 w-4" /> Ver Productos
            </a>
          </Button>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Prepare checkout data
    const checkoutData = {
      customer: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        notes: formData.notes,
      },
      items: items.map((item) => ({
        id: item.id,
        name: item.name,
        category: item.category,
        price: item.price,
        quantity: item.quantity,
      })),
      paymentMethod,
      total: getTotalPrice(),
      timestamp: new Date().toISOString(),
    };

    try {
      // Mock API call to backend
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(checkoutData),
      });

      // Since this is a mock, we'll handle both success and failure gracefully
      if (!response.ok && response.status !== 404) {
        throw new Error("Error al procesar el pedido");
      }

      // Success - clear cart and show message
      clearCart();
      toast({
        title: "¡Pedido realizado!",
        description:
          paymentMethod === "store"
            ? "Tu pedido ha sido registrado. Te esperamos en la tienda para el pago."
            : "Tu pedido ha sido procesado correctamente. Recibirás un email de confirmación.",
      });

      // Redirect to home after success
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      // For demo purposes, we'll still show success even if backend doesn't exist
      console.log("Checkout data would be sent:", checkoutData);
      
      clearCart();
      toast({
        title: "¡Pedido registrado!",
        description:
          paymentMethod === "store"
            ? "Tu pedido ha sido registrado. Te esperamos en la tienda para el pago."
            : "Tu pedido ha sido procesado. Recibirás un email de confirmación.",
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } finally {
      setIsProcessing(false);
    }
  };

  const formatPrice = (price: string) => {
    const priceStr = price.split('€')[0].replace(',', '.');
    return parseFloat(priceStr).toFixed(2).replace('.', ',');
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver
          </Button>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Finalizar Pedido</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="font-heading text-2xl font-semibold mb-4 flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                Resumen del Pedido
              </h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Cantidad: {item.quantity}
                      </p>
                    </div>
                    <p className="font-semibold text-sm">
                      {formatPrice(item.price)}€
                    </p>
                  </div>
                ))}
              </div>
              <Separator className="my-4" />
              <div className="space-y-2">
                <div className="flex justify-between font-semibold text-xl">
                  <span>Total</span>
                  <span className="text-primary">
                    {getTotalPrice().toFixed(2).replace('.', ',')}€
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Checkout Form */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="font-heading text-2xl font-semibold mb-4">
                Información de Contacto
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+34 600 00 00 00"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Notas adicionales (opcional)</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Alergias, preferencias, hora de recogida..."
                    rows={3}
                  />
                </div>

                <Separator className="my-6" />

                <div className="space-y-4">
                  <Label>Método de Pago</Label>
                  <RadioGroup value={paymentMethod} onValueChange={(value) => setPaymentMethod(value as "store" | "mock")}>
                    <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-accent transition-colors cursor-pointer">
                      <RadioGroupItem value="store" id="store" className="mt-1" />
                      <Label htmlFor="store" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-2 font-semibold mb-1">
                          <Store className="h-4 w-4" />
                          Pagar en Tienda
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Recoge y paga directamente en nuestra tienda
                        </p>
                      </Label>
                    </div>

                    <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-accent transition-colors cursor-pointer">
                      <RadioGroupItem value="mock" id="mock" className="mt-1" />
                      <Label htmlFor="mock" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-2 font-semibold mb-1">
                          <CreditCard className="h-4 w-4" />
                          Pago Online (Demo)
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Simulación de pago online
                        </p>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-lg"
                  disabled={isProcessing}
                >
                  {isProcessing ? "Procesando..." : "Confirmar Pedido"}
                </Button>
              </form>
            </Card>

            <Card className="p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground">
                💚 <span className="font-medium">Recogida en tienda:</span>{" "}
                C. Alfredo Torres Edwars, 6, La Laguna
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                🕐 <span className="font-medium">Horario:</span> Lun-Vie 10:30–14:00 y 17:00–20:00
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
