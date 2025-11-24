import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";

const Products = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-16 pb-12 sm:pt-16 sm:pb-16 md:py-20 gradient-warm">
        <div className="container mx-auto px-4 text-center space-y-3 sm:space-y-4">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Nuestros Productos
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Descubre nuestra selección de productos artesanales, hechos cada día
            con ingredientes de primera calidad y mucho cariño.
          </p>
          <div className="pt-2 sm:pt-4">
            <p className="text-xs sm:text-sm text-muted-foreground">
              También disponible:{" "}
              <span className="font-semibold text-foreground">
                opciones veganas y sin azúcar
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-8 sm:py-12 md:py-16 container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/productos/${category.id}`}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4 sm:p-6 md:p-8 space-y-2 sm:space-y-3 md:space-y-4 flex-1 flex flex-col">
                  <div className="flex-1 space-y-2 sm:space-y-3 md:space-y-4">
                    <p className="text-xs sm:text-sm text-muted-foreground rounded-lg bg-accent/90 w-auto px-2 py-1 inline-block mt-2 text-black">
                      {category.itemCount}{" "}
                      {category.itemCount === 1 ? "producto" : "productos"}
                    </p>
                    <h2 className="font-heading text-lg sm:text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                      {category.name}
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  <div className="flex items-center text-primary font-semibold pt-1 sm:pt-2 text-sm sm:text-base">
                    Ver productos{" "}
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-4 sm:space-y-6">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold">
            ¿Opciones Especiales?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-4">
            Sabemos que cada persona es única, por eso ofrecemos versiones
            veganas y sin azúcar de nuestros productos más populares.
            Pregúntanos por disponibilidad y encargos especiales.
          </p>
          <div className="pt-2 sm:pt-4">
            <a
              href="https://wa.me/34646951415"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm sm:text-base text-primary font-semibold hover:underline"
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
