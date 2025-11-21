import { Link } from "react-router-dom";
import { NavLink } from "./NavLink";
import { Menu, X, Cookie } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/productos", label: "Productos" },
    { to: "/servicios", label: "Servicios" },
    { to: "/sobre-nosotros", label: "Sobre Nosotros" },
    { to: "/contacto", label: "Contacto" },
  ];

  return (
    <nav className="fixed py-4 top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-20 h-20 p-3 mr-2 rounded-full bg-accent flex items-center justify-center transition-transform group-hover:scale-110">
              <img src={logo} alt="logo" className="w-auto h-auto" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-4xl font-medium text-foreground">
                Pastelería Gaumet
              </span>
              <span className="text-xs ml-0.5 text-muted-foreground uppercase tracking-wider">
                Momentos Dulces
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="relative text-foreground/70 hover:text-foreground transition-colors font-medium group"
                activeClassName="text-primary font-semibold"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 ease-out group-hover:w-full"></span>
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="text-foreground/70 hover:text-foreground transition-colors font-medium py-2"
                  activeClassName="text-primary font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
