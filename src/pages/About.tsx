import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, Leaf, ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about-bakery.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import store from "@/assets/custom.png";
import city from "@/assets/Wedding.png";
const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Pasión Artesanal",
      description:
        "Cada producto está hecho con dedicación y amor, siguiendo recetas tradicionales perfeccionadas con el tiempo.",
    },
    {
      icon: Award,
      title: "Productos de calidad",
      description:
        "Seleccionamos cuidadosamente cada ingrediente, priorizando calidad sobre cantidad en todo lo que horneamos.",
    },
    {
      icon: Users,
      title: "Comunidad Local",
      description:
        "Somos parte de La Laguna. Nos enorgullece servir a nuestra comunidad y ser parte de sus momentos especiales.",
    },
    {
      icon: Leaf,
      title: "Opciones Inclusivas",
      description:
        "Creemos que todos merecen disfrutar de buenos dulces, por eso ofrecemos opciones veganas y sin azúcar.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutImage}
            alt="Interior de Pastelería Gaumet"
            className="w-full h-full object-cover brightness-100"
            style={{ objectPosition: "92% center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 md:from-background/100 via-background/70 md:via-background/50 to-background/60 md:to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl space-y-4 animate-fade-in">
            <h1 className="md:text-left text-center font-heading text-5xl md:text-6xl font-bold">
              Nuestra Historia
            </h1>
            <p className="md:text-left text-center text-xl text-primary/100">
              Donde la tradición se encuentra con la innovación artesanal
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-6 text-lg text-center text-muted-foreground leading-relaxed">
            <p>
              <span className="font-heading text-xl text-foreground font-semibold">
                Pastelería Gaumet
              </span>{" "}
              nació en el corazón de La Laguna, concretamente en la calle{" "}
              <strong>Alfredo Torres Edwards, 6</strong>, nació{" "}
              <strong>Pastelería Gaumet</strong>, un sueño hecho realidad por{" "}
              <strong>Rosa Liberón</strong>, una apasionada de la repostería con
              formación en cocina y especialización en pastelería.
            </p>
            <img
              src={store}
              alt="Mural en Pastelería Gaumet"
              className="mx-auto"
            />
            <p>
              Desde el primer día, Rosa quiso crear algo más que pasteles: un
              refugio dulce donde cada aroma evocara cercanía, hogar y alegría
              compartida. Su visión era hornear cada mañana productos que no
              solo fueran deliciosos, sino también elaborados con cariño,
              calidad y un toque personal.
            </p>

            <p>
              Nuestros escaparates son fiel reflejo de esa pasión. Allí
              encontrarás nuestras famosas <strong>galletas</strong>, con
              sabores que van desde pistacho, Nutella y Oreo, hasta Lotus o
              Kinder. También nuestros <em>cinnamon rolls</em>, tartas de queso
              cremosas, o dulces de temporada; todo horneado justo cuando tú lo
              ves para que salgan del obrador aún tibios.
            </p>

            <p>
              Para nosotros, la repostería debe estar al alcance de todos, por
              eso ofrecemos opciones <strong>veganas</strong> y{" "}
              <strong>sin azúcar</strong>, elaboradas con dátiles u otras
              alternativas, para que nadie se quede sin saborear un bocado
              especial. Además, aceptamos encargos personalizados para quienes
              tienen alergias o necesidades específicas.
            </p>

            <p>
              Abrir Gaumet supuso un paso valiente para Rosa: era su primer
              proyecto empresarial. Pero desde el inicio, la respuesta de la
              comunidad fue abrumadora. Tan solo unos meses después de abrir sus
              puertas, sus dulces desaparecen a lo largo del día; no suele
              quedar merienda para el cierre.
            </p>

            <p>
              También hemos crecido gracias al cariño de nuestra clientela:
              personas que vienen desde otros municipios dispuestas a hacer cola
              por una de nuestras galletas, o que nos cuentan cómo uno de
              nuestros rolls de canela ha alegrado su mañana. Rosa, en
              agradecimiento, no duda en preparar dulces sobre la marcha para
              visitantes que llegaron con ilusión y hemos recibido de brazos
              abiertos.
            </p>
            <img
              src={city}
              alt="Mural en Pastelería Gaumet"
              className="mx-auto"
            />
            <p>
              Nuestra misión continúa siendo la misma: hornear con dedicación,
              innovar sin perder lo artesano y compartir momentos dulces que
              conecten a nuestra gente. Cada creación que sale de Gaumet lleva
              un pedazo de nuestra historia, un poco de la ilusión de Rosa y el
              calor de un rincón de La Laguna donde la repostería se vive con el
              corazón.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Nuestros Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Los pilares que guían cada decisión y cada producto que creamos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="text-center p-6 hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="space-y-4 p-0">
                  <div className="w-16 h-16 rounded-full bg-accent/100 flex items-center justify-center mx-auto">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Nuestro Proceso
            </h2>
            <p className="text-lg text-muted-foreground">
              Cómo transformamos ingredientes simples en experiencias
              inolvidables
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-heading text-2xl font-semibold mb-2">
                  Selección de Ingredientes
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Trabajamos solo con proveedores de confianza. No hay atajos
                  cuando se trata de lo esencial.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-heading text-2xl font-semibold mb-2">
                  Preparación Artesanal
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cada masa se prepara a mano, con tiempos de reposo y
                  fermentación cuidadosamente calculados. No hay producción en
                  masa, cada lote recibe atención individual.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-heading text-2xl font-semibold mb-2">
                  Horneado Perfecto
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Monitoreamos cada horneado hasta alcanzar el punto exacto:
                  bordes dorados, centros suaves, texturas irresistibles. El
                  tiempo y la temperatura son ciencia, pero también son arte.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-heading text-2xl font-semibold mb-2">
                  Entrega con Amor
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cada producto se empaca con cuidado, listo para disfrutar en
                  su punto óptimo de sabor y textura. Tu experiencia es nuestra
                  prioridad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Ven a Conocernos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nos encantaría que formes parte de nuestra historia. Ven a La Laguna
            y descubre el sabor de la pasión artesanal.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 w-full max-w-md group"
          >
            <Link to="/contacto" className="flex items-center justify-center">
              ¿Cómo llegar?
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
