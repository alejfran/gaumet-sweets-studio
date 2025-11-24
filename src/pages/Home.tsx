import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Award, Clock, PlaneIcon } from "lucide-react";
import heroVideo from "@/assets/hero.mp4";
import mural from "@/assets/mural.png";
import { categories } from "@/data/categories";
import { services } from "@/data/services";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl space-y-6 animate-fade-in md:text-left text-center">
            <h1 className="font-heading text-6xl md:text-8xl font-black text-white grid gap-2">
              <span className="text-white">MOMENTOS DULCES</span>
              <span className="text-accent">Sabores Únicos</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-xl md:text-left text-center">
              Pastelería artesanal en{" "}
              <span className="underline">San Cristóbal de La Laguna</span>.
              Cada día horneamos con amor y dedicación para crear experiencias
              inolvidables.
            </p>
            <div className="flex flex-wrap gap-4 md:justify-start justify-center">
              <Button
                asChild
                size="xl"
                variant="hero"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link to="/productos">
                  Ver Productos <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="heroWhite">
                <Link to="/contacto">Contáctanos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="md:py-32 py-16 container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Productos destacados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra selección de productos artesanales, hechos con
            ingredientes de primera calidad y mucho cariño.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-6 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={category.link}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group h-full flex flex-col">
                <div className="flex flex-col sm:flex-row flex-1">
                  {/* Image Container with Pattern Overlay */}
                  <div className="w-full sm:w-7/12 h-48 sm:h-full overflow-hidden relative">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Pattern SVG overlay on the right margin */}
                    <svg
                      className="sm:visible invisible absolute top-0 right-0 h-full w-24 pointer-events-none"
                      viewBox="0 0 96 384"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <pattern
                          id="dots"
                          x="0"
                          y="0"
                          width="16"
                          height="16"
                          patternUnits="userSpaceOnUse"
                        >
                          <circle
                            cx="2"
                            cy="2"
                            r="2"
                            fill="#fbbf24"
                            opacity="0.5"
                          />
                        </pattern>
                        <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="white" stopOpacity="0" />
                          <stop
                            offset="100%"
                            stopColor="white"
                            stopOpacity="1"
                          />
                        </linearGradient>
                      </defs>
                      {/* Wavy edge */}
                      <path
                        d="M0,0 Q24,48 0,96 Q24,144 0,192 Q24,240 0,288 Q24,336 0,384 L96,384 L96,0 Z"
                        fill="url(#dots)"
                        style={{ mixBlendMode: "multiply" }}
                      />
                      {/* Gradient fade to blend pattern */}
                      <rect
                        x="0"
                        y="0"
                        width="96"
                        height="384"
                        fill="url(#fade)"
                      />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  {/* Content Container */}
                  <div className="w-full sm:w-5/12 p-8 flex flex-col justify-between relative overflow-hidden">
                    {/* Background decorative element */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />

                    <div className="space-y-6 relative z-10">
                      <div className="space-y-3">
                        <div className="inline-block px-3 py-1 bg-accent/90 rounded-full text-xs font-semibold text-primary uppercase tracking-wide">
                          Especialidad
                        </div>
                        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {category.name}
                        </h3>
                        <p className="hidden md:block text-base text-muted-foreground leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom CTA section */}
                    <div className="space-y-4 relative z-10">
                      <div className="w-full h-px bg-gradient-to-r md:my-0 mt-3 from-transparent via-primary/20 to-transparent group-hover:via-primary/40 transition-colors duration-300" />

                      <div className="flex items-end w-full justify-end">
                        <div className="flex items-center text-primary font-bold text-sm group-hover:translate-x-2 transition-transform duration-300 bg-primary/5 px-4 py-2 rounded-full group-hover:bg-primary/90 group-hover:text-white/90">
                          Descubrir
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="md:py-32 py-16 bg-gradient-to-tr from-accent via-yellow-400 to-accent relative">
        {/* Top circular wave border */}
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg
            className="w-full h-8 fill-background"
            viewBox="0 0 1200 40"
            preserveAspectRatio="none"
          >
            <path d="M0,20 Q30,0 60,20 T120,20 T180,20 T240,20 T300,20 T360,20 T420,20 T480,20 T540,20 T600,20 T660,20 T720,20 T780,20 T840,20 T900,20 T960,20 T1020,20 T1080,20 T1140,20 T1200,20 L1200,0 L0,0 Z" />
          </svg>
        </div>

        {/* Bottom circular wave border */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="w-full h-8 fill-background"
            viewBox="0 0 1200 40"
            preserveAspectRatio="none"
          >
            <path d="M0,20 Q30,40 60,20 T120,20 T180,20 T240,20 T300,20 T360,20 T420,20 T480,20 T540,20 T600,20 T660,20 T720,20 T780,20 T840,20 T900,20 T960,20 T1020,20 T1080,20 T1140,20 T1200,20 L1200,40 L0,40 Z" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Servicios Especiales
            </h2>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto">
              Más que una pastelería, somos parte de tus momentos más
              importantes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="text-center p-8 hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center justify-center mx-auto">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" className="group">
              <Link
                to="/servicios"
                className="bg-primary hover:bg-primary/90 w-full max-w-md group flex items-center justify-center"
              >
                Conoce todos nuestros servicios
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="md:py-32 py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Pasión Artesanal
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            En Pastelería Gaumet creemos que cada bocado debe contar una
            historia. Desde 2020, horneamos con ingredientes naturales, recetas
            tradicionales y ese toque especial que solo viene del corazón.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cada galleta, cada brownie, cada tarta es una pequeña obra de arte
            hecha con dedicación y amor. Porque lo dulce no solo alimenta el
            cuerpo, también alimenta el alma.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/sobre-nosotros">Nuestra Historia</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="md:py-32 py-16 bg-accent relative">
        {/* Top circular wave border */}
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg
            className="w-full h-8 fill-background"
            viewBox="0 0 1200 40"
            preserveAspectRatio="none"
          >
            <path d="M0,20 Q30,0 60,20 T120,20 T180,20 T240,20 T300,20 T360,20 T420,20 T480,20 T540,20 T600,20 T660,20 T720,20 T780,20 T840,20 T900,20 T960,20 T1020,20 T1080,20 T1140,20 T1200,20 L1200,0 L0,0 Z" />
          </svg>
        </div>

        {/* Bottom circular wave border */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="w-full h-8 fill-white"
            viewBox="0 0 1200 40"
            preserveAspectRatio="none"
          >
            <path d="M0,20 Q30,40 60,20 T120,20 T180,20 T240,20 T300,20 T360,20 T420,20 T480,20 T540,20 T600,20 T660,20 T720,20 T780,20 T840,20 T900,20 T960,20 T1020,20 T1080,20 T1140,20 T1200,20 L1200,40 L0,40 Z" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          {/* Title and Description */}
          <div className="text-center space-y-6 mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Visítanos en La Laguna
            </h2>
            <p className="text-lg text-primary max-w-2xl mx-auto">
              Ven a conocernos y disfruta del aroma de nuestros productos recién
              horneados.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-white/95 rounded-lg p-6 space-y-4 font-mono">
                <div className="flex items-center gap-3 mb-6 border-b border-primary/20 pb-3">
                  <div className="relative">
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <h3 className="font-bold text-lg text-primary tracking-wider">
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

                <div className="space-y-1">
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
                      className="flex items-center justify-between py-3 px-4 bg-accent/15 border-l-2 border-primary/50 hover:border-primary hover:cursor-pointer hover:bg-accent/40 transition-all duration-200"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-primary font-bold text-sm w-8">
                          {day}
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="relative md:block hidden">
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                          </div>
                          <span className="sm:block hidden text-xs text-primary/80 font-semibold tracking-wide">
                            {status}
                          </span>
                        </div>
                      </div>
                      <span className="text-primary/80 text-xs md:text-sm tracking-wider font-light">
                        {hours}
                      </span>
                    </div>
                  ))}

                  <div className="flex items-center justify-between py-3 px-4 bg-red-50 hover:cursor-pointer hover:bg-red-100 border-l-2 border-red-400 mt-2">
                    <div className="flex items-center gap-4">
                      <span className="text-red-600 font-bold text-sm w-8">
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

                <div className="flex justify-between items-center pt-4 border-t border-primary/20 text-xs text-primary/70">
                  <span className="tracking-wide">
                    ÚLTIMA ACTUALIZACIÓN:{" "}
                    {new Date().toLocaleDateString("es-ES")}
                  </span>
                  <span className="tracking-wide text-xs flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    ESTADO: EN LÍNEA
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-8">
              <img
                src={mural}
                alt="Mural Pastelería Gaumet"
                className="rounded-lg w-full max-w-xl"
              />
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 w-full max-w-md group"
              >
                <Link
                  to="/contacto"
                  className="flex items-center justify-center"
                >
                  ¿Cómo llegar?
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
