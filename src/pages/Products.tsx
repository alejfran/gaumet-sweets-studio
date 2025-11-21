import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import cookiesImage from "@/assets/cookies-hero.jpg";
import browniesImage from "@/assets/brownies-hero.jpg";
import rollsImage from "@/assets/rolls-hero.jpg";
import cheesecakeImage from "@/assets/cheesecake-hero.jpg";

const Products = () => {
  const categories = [
    {
      id: "cookies",
      name: "Cookies estilo NY",
      description: "Nuestro producto estrella. Gruesas, crujientes por fuera y suaves por dentro. Disponibles en múltiples sabores.",
      image: cookiesImage,
      itemCount: 4,
    },
    {
      id: "brownies",
      name: "Brownies",
      description: "Intensos, chocolateados y con el toque perfecto de dulzura. Elige entre clásico, con nueces o cheesecake.",
      image: browniesImage,
      itemCount: 3,
    },
    {
      id: "rolls",
      name: "Rolls de Canela",
      description: "Esponjosos, con el aroma de la canela recién horneada y cobertura cremosa de queso.",
      image: rollsImage,
      itemCount: 2,
    },
    {
      id: "tartas",
      name: "Tartas de Queso",
      description: "Suaves, ligeras y con una base de galleta irresistible. Perfectas para compartir o llevar entera.",
      image: cheesecakeImage,
      itemCount: 3,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 gradient-warm">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="font-heading text-5xl md:text-6xl font-bold">
            Nuestros Productos
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra selección de productos artesanales, hechos cada día
            con ingredientes de primera calidad y mucho cariño.
          </p>
          <div className="pt-4">
            <p className="text-sm text-muted-foreground">
              También disponible: <span className="font-semibold text-foreground">opciones veganas y sin azúcar</span>
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/productos/${category.id}`}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start justify-between">
                    <h2 className="font-heading text-3xl font-bold group-hover:text-primary transition-colors">
                      {category.name}
                    </h2>
                    <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {category.itemCount} productos
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex items-center text-primary font-semibold pt-2">
                    Ver productos <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            ¿Opciones Especiales?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sabemos que cada persona es única, por eso ofrecemos versiones veganas
            y sin azúcar de nuestros productos más populares. Pregúntanos por
            disponibilidad y encargos especiales.
          </p>
          <div className="pt-4">
            <a
              href="https://wa.me/34646951415"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Consúltanos por WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
