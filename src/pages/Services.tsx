import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Gift, Briefcase, Clock, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Bodas",
      description: "Tu día especial merece un pastel único y memorable",
      details: [
        "Diseños personalizados",
        "Degustación de sabores previa",
        "Opciones para diferentes número de invitados",
        "Decoración elegante y profesional",
      ],
      anticipation: "Solicitar con 2-3 semanas de anticipación",
    },
    {
      icon: Gift,
      title: "Cumpleaños",
      description: "Celebra con pasteles que sorprenden y enamoran",
      details: [
        "Diseños personalizados",
        "Adaptación a gustos y preferencias",
        "Opciones infantiles y para adultos",
        "Decoraciones creativas",
        "Diferentes tamaños disponibles",
      ],
      anticipation: "Solicitar con 1 semana de anticipación",
    },
    {
      icon: Briefcase,
      title: "Eventos Corporativos",
      description: "Dale un toque dulce y profesional a tus reuniones",
      details: [
        "Bandejas de cookies y brownies",
        "Pasteles con branding corporativo",
        "Catering dulce para conferencias",
        "Presentación elegante y profesional",
        "Facturación para empresas",
      ],
      anticipation: "Solicitar con 1 semana de anticipación",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-16 pb-12 sm:pt-16 sm:pb-16 md:py-20 gradient-warm">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="font-heading text-5xl md:text-6xl font-bold">
            Servicios Especiales
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Más que una pastelería, somos parte de tus momentos más importantes.
            Creamos experiencias dulces personalizadas para cada ocasión.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20 container mx-auto px-4">
        <div className="space-y-12 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                      <service.icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h2 className="font-heading text-3xl font-bold mb-2">
                        {service.title}
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        {service.description}
                      </p>
                    </div>

                    {/* Details List */}
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Anticipation */}
                    <div className="flex items-start gap-3 pt-4 bg-secondary/30 p-4 rounded-lg">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground">
                          Tiempo de anticipación
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {service.anticipation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="font-heading text-4xl md:text-5xl font-bold">
                ¿Cómo Funciona?
              </h2>
              <p className="text-lg text-muted-foreground">
                Un proceso simple para crear tu pastel perfecto
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    Contacta con Nosotros
                  </h3>
                  <p className="text-muted-foreground">
                    Escríbenos por WhatsApp o ven a visitarnos. Cuéntanos sobre
                    tu evento, la fecha, número de personas y tus preferencias
                    de sabor y diseño.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    Diseño Personalizado
                  </h3>
                  <p className="text-muted-foreground">
                    Te mostraremos opciones, colores, decoraciones y sabores.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    Confirmación y Pago
                  </h3>
                  <p className="text-muted-foreground">
                    Una vez acordado el diseño final, confirmamos fechas y
                    realizas el pago.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    Recogida o Entrega
                  </h3>
                  <p className="text-muted-foreground">
                    Recoge tu pastel en tienda. ¡Listo para sorprender!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 md:py-20 container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Otros Servicios
            </h2>
          </div>

          <Card className="p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl font-semibold mb-2">
                  Recogida en Tienda
                </h3>
                <p className="text-muted-foreground">
                  Todos nuestros productos regulares están disponibles para
                  recogida en nuestra tienda de La Laguna.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold mb-2">
                  Opciones Veganas y Sin Azúcar
                </h3>
                <p className="text-muted-foreground">
                  Ofrecemos versiones veganas y sin azúcar de muchos de nuestros
                  productos. Consulta disponibilidad por WhatsApp o en tienda.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold mb-2">
                  Bandejas Surtidas
                </h3>
                <p className="text-muted-foreground">
                  ¿No sabes qué elegir? Arma tu bandeja personalizada con una
                  selección de cookies, brownies y otros productos. Perfectas
                  para compartir o regalar.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            ¿Listo para tu Pastel Perfecto?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contáctanos hoy y empecemos a planear tu evento especial. Estamos
            aquí para hacerlo inolvidable.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <a
                href="https://wa.me/34646951415"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar por WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contacto">Ver información de contacto</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
