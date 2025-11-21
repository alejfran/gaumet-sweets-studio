import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin, Cookie } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-soft-yellow flex items-center justify-center">
                <Cookie className="w-6 h-6 text-warm-brown" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold">
                  Pastelería Gaumet
                </h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Momentos Dulces
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Sabores únicos, hechos con amor y dedicación artesanal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/productos" className="text-muted-foreground hover:text-primary transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-muted-foreground hover:text-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Nuestros Productos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/productos/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookies estilo NY
                </Link>
              </li>
              <li>
                <Link to="/productos/brownies" className="text-muted-foreground hover:text-primary transition-colors">
                  Brownies
                </Link>
              </li>
              <li>
                <Link to="/productos/rolls" className="text-muted-foreground hover:text-primary transition-colors">
                  Rolls de Canela
                </Link>
              </li>
              <li>
                <Link to="/productos/tartas" className="text-muted-foreground hover:text-primary transition-colors">
                  Tartas de Queso
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  C. Alfredo Torres Edwars, 6<br />
                  38204 La Laguna, Tenerife
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href="tel:+34646951415" className="text-muted-foreground hover:text-primary transition-colors">
                  +34 646 95 14 15
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href="mailto:pasteleriagaumet@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  pasteleriagaumet@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href="https://instagram.com/pasteleria_gaumet" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  @pasteleria_gaumet
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pastelería Gaumet. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Lunes a viernes: 10:30–14:00 y 17:00–20:00
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
