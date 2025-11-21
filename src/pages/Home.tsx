import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Award, Clock } from "lucide-react";
import heroImage from "@/assets/hero-main.jpg";
import cookiesImage from "@/assets/cookies-hero.jpg";
import browniesImage from "@/assets/brownies-hero.jpg";
import rollsImage from "@/assets/rolls-hero.jpg";
import cheesecakeImage from "@/assets/cheesecake-hero.jpg";

const Home = () => {
  const categories = [
    {
      name: "Cookies estilo NY",
      description: "Nuestro producto estrella. Gruesas, crujientes por fuera y suaves por dentro.",
      image: cookiesImage,
      link: "/productos/cookies",
    },
    {
      name: "Brownies",
      description: "Intensos, chocolateados y con el toque perfecto de dulzura.",
      image: browniesImage,
      link: "/productos/brownies",
    },
    {
      name: "Rolls de Canela",
      description: "Esponjosos, con el aroma de la canela recién horneada y cobertura cremosa.",
      image: rollsImage,
      link: "/productos/rolls",
    },
    {
      name: "Tartas de Queso",
      description: "Suaves, ligeras y con una base de galleta irresistible.",
      image: cheesecakeImage,
      link: "/productos/tartas",
    },
  ];

  const services = [
    {
      icon: Heart,
      title: "Bodas",
      description: "Endulza tu día especial con nuestras creaciones personalizadas.",
    },
    {
      icon: Award,
      title: "Encargos Personalizados",
      description: "Danos una semana y creamos el pastel de tus sueños.",
    },
    {
      icon: Clock,
      title: "Eventos",
      description: "Pasteles únicos para cumpleaños, celebraciones y eventos corporativos.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Pastelería Gaumet - Productos artesanales"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl space-y-6 animate-fade-in">
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-balance">
              <span className="text-foreground">MOMENTOS DULCES,</span>
              <br />
              <span className="text-primary">Sabores Únicos</span>
            </h1>
            <p className="text-xl text-foreground/80 max-w-xl">
              Pastelería artesanal en La Laguna. Cada día horneamos con amor y dedicación
              para crear experiencias inolvidables.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/productos">
                  Ver Productos <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contacto">Contáctanos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Nuestras Creaciones
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra selección de productos artesanales, hechos con ingredientes
            de primera calidad y mucho cariño.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={category.link}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 space-y-2">
                  <h3 className="font-heading text-xl font-semibold group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                  <div className="flex items-center text-primary font-medium text-sm pt-2">
                    Ver más <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Servicios Especiales
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Más que una pastelería, somos parte de tus momentos más importantes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="text-center p-8 hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="space-y-4 p-0">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" variant="outline">
              <Link to="/servicios">
                Conoce todos nuestros servicios
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Pasión Artesanal
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            En Pastelería Gaumet creemos que cada bocado debe contar una historia.
            Desde 2020, horneamos con ingredientes naturales, recetas tradicionales
            y ese toque especial que solo viene del corazón.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cada galleta, cada brownie, cada tarta es una pequeña obra de arte
            hecha con dedicación y amor. Porque lo dulce no solo alimenta el cuerpo,
            también alimenta el alma.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/sobre-nosotros">
              Nuestra Historia
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Visítanos en La Laguna
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ven a conocernos y disfruta del aroma de nuestros productos recién horneados.
          </p>
          <div className="text-foreground/80 space-y-1">
            <p className="font-medium">Lunes a viernes</p>
            <p>10:30–14:00 y 17:00–20:00</p>
          </div>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/contacto">
              Cómo llegar
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
