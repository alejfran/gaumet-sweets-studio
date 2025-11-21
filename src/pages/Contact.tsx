import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 gradient-warm">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="font-heading text-5xl md:text-6xl font-bold">
            Contáctanos
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Visítanos, llámanos o escríbenos.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 space-y-4 text-center">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Dirección
                </h3>
                <p className="text-sm text-muted-foreground">
                  C. Alfredo Torres Edwars, 6<br />
                  38204 La Laguna<br />
                  Santa Cruz de Tenerife
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 space-y-4 text-center">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Teléfono
                </h3>
                <a
                  href="tel:+34646951415"
                  className="text-sm text-primary hover:underline block"
                >
                  +34 646 95 14 15
                </a>
                <a
                  href="https://wa.me/34646951415"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block mt-1"
                >
                  WhatsApp disponible
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 space-y-4 text-center">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Email
                </h3>
                <a
                  href="mailto:pasteleriagaumet@gmail.com"
                  className="text-sm text-primary hover:underline break-all"
                >
                  pasteleriagaumet@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 space-y-4 text-center">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                <Instagram className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Instagram
                </h3>
                <a
                  href="https://instagram.com/pasteleria_gaumet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  @pasteleria_gaumet
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Hours */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  Horario de Atención
                </h2>
                <div className="space-y-2 text-muted-foreground">
                  <p className="text-lg font-medium text-foreground">
                    Lunes a Viernes
                  </p>
                  <p>10:30 - 14:00</p>
                  <p>17:00 - 20:00</p>
                  <p className="text-sm pt-4 text-muted-foreground">
                    Sábados y domingos cerrado
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
              Cómo Llegar
            </h2>
            <p className="text-muted-foreground">
              Estamos ubicados en el corazón de La Laguna
            </p>
          </div>

          <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.065748932577!2d-16.317920!3d28.487362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc41ccf4f8b8a0e3%3A0x7e1e1e1e1e1e1e1e!2sC.%20Alfredo%20Torres%20Edwars%2C%206%2C%2038204%20San%20Crist%C3%B3bal%20de%20La%20Laguna%2C%20Santa%20Cruz%20de%20Tenerife!5e0!3m2!1ses!2ses!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Pastelería Gaumet"
            />
          </div>

          <div className="mt-8 p-6 bg-muted/30 rounded-lg">
            <h3 className="font-heading text-xl font-semibold mb-4">
              Cómo Encontrarnos
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Estamos en la calle Alfredo Torres Edwars, número 6</li>
              <li>• Cerca del centro histórico de La Laguna</li>
              <li>• Fácil acceso en transporte público (líneas 014, 015, 050)</li>
              <li>• Zona de aparcamiento público cercana</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Te Esperamos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ven a conocernos y disfruta del aroma de nuestros productos recién horneados.
            Será un placer atenderte y ser parte de tus momentos dulces.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
