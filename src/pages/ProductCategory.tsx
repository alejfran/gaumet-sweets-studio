import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProductsByCategory } from "@/data/products";

const categoryInfo = {
  cookies: {
    title: "Cookies estilo NY",
    description: "Nuestras cookies son grandes, gruesas y absolutamente deliciosas. Inspiradas en las legendarias cookies de Nueva York, cada una está horneada con dedicación para lograr esa textura perfecta: crujiente por fuera y suave por dentro.",
  },
  brownies: {
    title: "Brownies",
    description: "Brownies intensos y chocolateados con una textura fudgy irresistible. Cada pieza está cargada de sabor a chocolate premium y horneada al punto perfecto.",
  },
  rolls: {
    title: "Rolls de Canela",
    description: "Rolls esponjosos con el aroma inconfundible de la canela recién horneada. Coronados con nuestro glaseado casero de queso crema, son perfectos para disfrutar a cualquier hora.",
  },
  tartas: {
    title: "Tartas de Queso",
    description: "Tartas cremosas y suaves preparadas con queso crema de primera calidad. Perfectas para compartir o disfrutar durante varios días. Disponibles por porciones o enteras.",
  },
};

const ProductCategory = () => {
  const { category } = useParams<{ category: string }>();
  const products = getProductsByCategory(category || "");
  const info = categoryInfo[category as keyof typeof categoryInfo];

  if (!info || products.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="font-heading text-4xl font-bold">Categoría no encontrada</h1>
          <Button asChild>
            <Link to="/productos">
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver a productos
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 gradient-warm">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/productos">
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver a productos
            </Link>
          </Button>
          <div className="max-w-3xl space-y-4">
            <h1 className="font-heading text-5xl md:text-6xl font-bold">
              {info.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {info.description}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link
              key={product.id}
              to={`/productos/${category}/${product.id}`}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 space-y-3 flex-1 flex flex-col">
                  <div className="flex-1 space-y-3">
                    <h3 className="font-heading text-xl font-semibold group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <span className="text-lg font-bold text-primary">
                      {product.price}
                    </span>
                    <div className="flex items-center text-primary font-medium text-sm">
                      Ver más <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            ¿Tienes dudas o quieres hacer un encargo?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contáctanos por WhatsApp y te ayudaremos con todo lo que necesites.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a
              href="https://wa.me/34646951415"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar por WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProductCategory;
