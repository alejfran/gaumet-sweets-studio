import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, Leaf } from "lucide-react";
import aboutImage from "@/assets/about-bakery.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Pasión Artesanal",
      description: "Cada producto está hecho con dedicación y amor, siguiendo recetas tradicionales perfeccionadas con el tiempo.",
    },
    {
      icon: Award,
      title: "Ingredientes Premium",
      description: "Seleccionamos cuidadosamente cada ingrediente, priorizando calidad sobre cantidad en todo lo que horneamos.",
    },
    {
      icon: Users,
      title: "Comunidad Local",
      description: "Somos parte de La Laguna. Nos enorgullece servir a nuestra comunidad y ser parte de sus momentos especiales.",
    },
    {
      icon: Leaf,
      title: "Opciones Inclusivas",
      description: "Creemos que todos merecen disfrutar de buenos dulces, por eso ofrecemos opciones veganas y sin azúcar.",
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
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl space-y-4 animate-fade-in">
            <h1 className="font-heading text-5xl md:text-6xl font-bold">
              Nuestra Historia
            </h1>
            <p className="text-xl text-muted-foreground">
              Donde la tradición se encuentra con la innovación artesanal
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              <span className="font-heading text-2xl text-foreground font-semibold">
                Pastelería Gaumet
              </span>{" "}
              nació en 2020 con un sueño simple pero poderoso: llevar a La Laguna
              la experiencia de las mejores pastelerías artesanales del mundo, sin
              renunciar a la calidez y cercanía que nos caracteriza.
            </p>
            
            <p>
              Inspirados en las legendarias cookies de Nueva York y los brownies más
              decadentes, emprendimos un viaje de experimentación y perfeccionamiento.
              Probamos docenas de recetas, ajustamos tiempos de horneado, equilibramos
              ingredientes hasta encontrar ese punto exacto donde la técnica se convierte
              en arte.
            </p>

            <p>
              Pero no nos quedamos solo en lo técnico. Queríamos que cada bocado contara
              una historia, que transmitiera esa sensación reconfortante de estar en casa,
              de compartir momentos dulces con las personas que amamos. Por eso, cada
              producto que sale de nuestro horno lleva no solo ingredientes de primera
              calidad, sino también el cariño y la dedicación de quien ama lo que hace.
            </p>

            <p>
              Hoy, somos más que una pastelería. Somos parte de los cumpleaños, las
              celebraciones, los momentos de reencuentro y las pequeñas alegrías del día
              a día de nuestra comunidad. Y eso, para nosotros, es el mayor de los éxitos.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
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
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
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
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Nuestro Proceso
            </h2>
            <p className="text-lg text-muted-foreground">
              Cómo transformamos ingredientes simples en experiencias inolvidables
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
                  Trabajamos solo con proveedores de confianza. Chocolate belga,
                  mantequilla premium, harina de alta calidad. No hay atajos cuando
                  se trata de lo esencial.
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
                  Cada masa se prepara a mano, con tiempos de reposo y fermentación
                  cuidadosamente calculados. No hay producción en masa, cada lote
                  recibe atención individual.
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
                  Monitoreamos cada horneado hasta alcanzar el punto exacto: bordes
                  dorados, centros suaves, texturas irresistibles. El tiempo y la
                  temperatura son ciencia, pero también son arte.
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
                  Cada producto se empaca con cuidado, listo para disfrutar en su
                  punto óptimo de sabor y textura. Tu experiencia es nuestra prioridad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Ven a Conocernos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nos encantaría que formes parte de nuestra historia. Ven a La Laguna
            y descubre el sabor de la pasión artesanal.
          </p>
          <div className="text-foreground/80 space-y-1">
            <p className="font-medium">C. Alfredo Torres Edwars, 6</p>
            <p>38204 La Laguna, Santa Cruz de Tenerife</p>
            <p className="pt-2">Lunes a viernes: 10:30–14:00 y 17:00–20:00</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
