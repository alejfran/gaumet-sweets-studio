import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Instagram, PlaneIcon } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-16 pb-12 sm:pt-16 sm:pb-16 gradient-warm">
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
      <section className="py-8 md:py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 space-y-4 text-center">
              <div className="w-14 h-14 rounded-full bg-accent/100 flex items-center justify-center mx-auto">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Dirección
                </h3>
                <p className="text-sm text-muted-foreground">
                  C. Alfredo Torres Edwars, 6<br />
                  38204 La Laguna
                  <br />
                  Santa Cruz de Tenerife
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 space-y-4 text-center">
              <div className="w-14 h-14 rounded-full bg-accent/100 flex items-center justify-center mx-auto">
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
              <div className="w-14 h-14 rounded-full bg-accent/100 flex items-center justify-center mx-auto">
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
              <div className="w-14 h-14 rounded-full bg-accent/100 flex items-center justify-center mx-auto">
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

      {/* Hours & Location */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
              Horarios y Ubicación
            </h2>
            <p className="text-muted-foreground">
              Visítanos en nuestro horario de atención
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Hours Card */}
            <Card className="h-full">
              <CardContent className="p-6 md:p-8">
                <div className="bg-white/95 rounded-lg p-2 md:p-6 space-y-0 md:space-y-4 font-mono h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4 md:mb-6 border-b border-primary/20 pb-3">
                    <div className="relative">
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div>
                        <h3 className="font-bold text-base md:text-lg text-primary tracking-wider">
                          HORARIOS DE APERTURA
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <PlaneIcon className="w-4 h-4 text-primary" />
                          <div className="text-xs text-primary/70 uppercase tracking-widest">
                            Terminal Tenerife Norte
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1 flex-grow md:pb-0 pb-4">
                    {[
                      {
                        day: "LUN",
                        hours: "10:30–14:00 • 17:00–20:00",
                        status: "ABIERTO",
                      },
                      {
                        day: "MAR",
                        hours: "10:30–14:00 • 17:00–20:00",
                        status: "ABIERTO",
                      },
                      {
                        day: "MIE",
                        hours: "10:30–14:00 • 17:00–20:00",
                        status: "ABIERTO",
                      },
                      {
                        day: "JUE",
                        hours: "10:30–14:00 • 17:00–20:00",
                        status: "ABIERTO",
                      },
                      {
                        day: "VIE",
                        hours: "10:30–14:00 • 17:00–20:00",
                        status: "ABIERTO",
                      },
                      {
                        day: "SAB",
                        hours: "10:00–14:00 • 17:30–20:30",
                        status: "ABIERTO",
                      },
                    ].map(({ day, hours, status }) => (
                      <div
                        key={day}
                        className="flex items-center justify-between py-2 md:py-3 px-3 md:px-4 bg-accent/15 border-l-2 border-primary/50 hover:border-primary hover:cursor-pointer hover:bg-accent/40 transition-all duration-200"
                      >
                        <div className="flex items-center gap-2 md:gap-4">
                          <span className="text-primary font-bold text-xs md:text-sm w-6 md:w-8">
                            {day}
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="md:block hidden w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                            <span className="text-xs text-primary/80 font-semibold tracking-wide mr-2">
                              {status}
                            </span>
                          </div>
                        </div>
                        <span className="text-primary/80 text-xs md:text-sm tracking-wider font-light">
                          {hours}
                        </span>
                      </div>
                    ))}

                    <div className="flex items-center justify-between py-2 md:py-3 px-3 md:px-4 bg-red-50 hover:cursor-pointer hover:bg-red-100 border-l-2 border-red-400 mt-2">
                      <div className="flex items-center gap-2 md:gap-4">
                        <span className="text-red-600 font-bold text-xs md:text-sm w-6 md:w-8">
                          DOM
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-xs text-red-500 font-semibold tracking-wide">
                            CERRADO
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 pt-4 border-t border-primary/20 text-xs text-primary/70">
                    <span className="tracking-wide">
                      ÚLTIMA ACTUALIZACIÓN:{" "}
                      {new Date().toLocaleDateString("es-ES")}
                    </span>
                    <span className="tracking-wide">ESTADO: EN LÍNEA</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Card */}
            <Card className="h-full">
              <CardContent className="p-6 md:p-8 h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="font-heading text-xl md:text-2xl font-bold mb-2">
                    Cómo Llegar
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Estamos ubicados en el corazón de La Laguna
                  </p>
                </div>

                <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-6 flex-grow min-h-[300px]">
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

                <div className="p-4 md:p-6 bg-muted/30 rounded-lg">
                  <h4 className="font-heading text-base md:text-lg font-semibold mb-3">
                    Cómo Encontrarnos
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Estamos en la calle Alfredo Torres Edwars, 6</li>
                    <li>• Cerca del centro histórico de La Laguna</li>
                    <li>
                      • Fácil acceso en transporte público (líneas 014, 015,
                      050). Muy cerca de la parada Trinidad del tranvía.
                    </li>
                    <li>• Zona de aparcamiento privado cercanas.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
