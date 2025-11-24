import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  ShoppingCart,
  Minus,
  Plus,
} from "lucide-react";
import { getProductById } from "@/data/products";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { category, id } = useParams<{ category: string; id: string }>();
  const product = getProductById(id || "");
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="font-heading text-4xl font-bold">
            Producto no encontrado
          </h1>
          <Button asChild>
            <Link to={`/productos/${category}`}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver a {category}
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hola! Me interesa ${product.name}. ¿Está disponible?`
  );

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "¡Agregado al carrito!",
      description: `${quantity} x ${product.name}`,
    });
    setQuantity(1);
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              to="/productos"
              className="hover:text-primary transition-colors"
            >
              Productos
            </Link>
            <span>/</span>
            <Link
              to={`/productos/${category}`}
              className="hover:text-primary transition-colors"
            >
              {category}
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Thumbnails (vertical on left) */}
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                {[...Array(3)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? "border-primary scale-105"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img
                      src={product.images[index]}
                      alt={`${product.name} vista ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 aspect-square rounded-2xl overflow-hidden bg-muted">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="font-heading text-4xl md:text-5xl font-bold">
                  {product.name}
                </h1>
                {product.available && (
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800"
                  >
                    Disponible
                  </Badge>
                )}
              </div>
              <p className="text-2xl font-bold text-primary mt-4">
                {product.price}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-heading text-xl font-semibold">
                Descripción
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {product.longDescription}
              </p>
            </div>

            {/* Features */}
            <Card className="p-6">
              <h3 className="font-heading text-lg font-semibold mb-4">
                Características
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Quantity Selector */}
            <Card className="p-6">
              <h3 className="font-heading text-lg font-semibold mb-4">
                Cantidad
              </h3>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-5 w-5" />
                </Button>
                <span className="text-2xl font-semibold w-16 text-center">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-5 w-5" />
                </Button>
              </div>
            </Card>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-4">
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-lg h-14"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Agregar al Carrito
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full text-lg h-14"
              >
                <a
                  href={`https://wa.me/34646951415?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Consultar por WhatsApp
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full text-lg h-14"
              >
                <Link to={`/productos/${category}`}>
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Ver más {category}
                </Link>
              </Button>
            </div>

            {/* Additional Info */}
            <div className="pt-6 border-t border-border space-y-2 text-sm text-muted-foreground">
              <p>
                <span className="font-medium">Consulta</span> por opciones
                veganas y sin azúcar
              </p>
              <p>
                <span className="font-medium">Horario:</span> Lun-Vie
                10:30–14:00 y 17:00–20:00
              </p>
              <p>
                <span className="font-medium">Recogida en tienda:</span> C.
                Alfredo Torres Edwars, 6, La Laguna
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products or CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            ¿Necesitas un pastel personalizado?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Creamos pasteles únicos para bodas, cumpleaños y eventos especiales.
            Solicita el tuyo con una semana de anticipación.
          </p>
          <Button asChild size="lg" variant="outline">
            <Link to="/servicios">Ver servicios personalizados</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
