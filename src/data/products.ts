export interface Product {
  id: string;
  name: string;
  category: "cookies" | "brownies" | "rolls" | "cheesecake";
  description: string;
  longDescription: string;
  price: string;
  images: string[];
  features: string[];
  available: boolean;
}

export const products: Product[] = [
  // Cookies
  {
    id: "cookie-chocolate-chip",
    name: "Cookie Chocolate Chip Clásica",
    category: "cookies",
    description: "La cookie original estilo Nueva York. Crujiente por fuera, suave por dentro.",
    longDescription: "Nuestra cookie más icónica, inspirada en las legendarias cookies de Nueva York. Preparada con mantequilla de primera calidad, chispas de chocolate belga y un toque de sal marina que realza todos los sabores. El resultado es una cookie de tamaño generoso, con bordes crujientes y un centro suave e irresistible.",
    price: "3,50€",
    images: ["/src/assets/Dubai 1-2.png", "/src/assets/cookies.png", "/src/assets/cheesecake.png"],
    features: [
      "Tamaño XXL (120g)",
      "Chocolate belga 70%",
      "Masa fermentada 24h",
      "Horneada al momento",
    ],
    available: true,
  },
  {
    id: "cookie-doble-chocolate",
    name: "Cookie Doble Chocolate",
    category: "cookies",
    description: "Para los verdaderos amantes del chocolate. Intenso y adictivo.",
    longDescription: "Una explosión de chocolate en cada bocado. Masa de cacao premium con doble cantidad de chispas de chocolate negro y blanco. El equilibrio perfecto entre intensidad y dulzura.",
    price: "3,75€",
    images: ["/src/assets/rolls-hero.png"],
    features: [
      "Cacao premium",
      "Chispas negras y blancas",
      "Textura fundente",
      "Sabor intenso",
    ],
    available: true,
  },
  {
    id: "cookie-nutella",
    name: "Cookie de Nutella",
    category: "cookies",
    description: "Rellena con Nutella original. Una delicia cremosa y chocolateada.",
    longDescription: "Nuestra cookie estrella con un corazón de Nutella que se derrite al morderla. La combinación perfecta de textura crujiente y cremosidad irresistible.",
    price: "4,00€",
    images: ["/src/assets/cookies.png"],
    features: [
      "Relleno generoso de Nutella",
      "Masa artesanal",
      "Centro fundente",
      "Irresistible",
    ],
    available: true,
  },
  {
    id: "cookie-red-velvet",
    name: "Cookie Red Velvet",
    category: "cookies",
    description: "Suave, aterciopelada, con chips de chocolate blanco.",
    longDescription: "Inspirada en el clásico pastel Red Velvet. Masa tierna de cacao rojo con chips de chocolate blanco y un toque de vainilla. Elegante y deliciosa.",
    price: "3,75€",
    images: ["/src/assets/cheesecake.png"],
    features: [
      "Color único",
      "Chocolate blanco",
      "Textura suave",
      "Sabor delicado",
    ],
    available: true,
  },

  // Brownies
  {
    id: "brownie-clasico",
    name: "Brownie Clásico",
    category: "brownies",
    description: "Intenso, fudgy y chocolateado. El brownie perfecto.",
    longDescription: "Nuestro brownie tradicional, con una textura densa y húmeda, preparado con chocolate negro de alta calidad. Cada bocado es una experiencia de chocolate puro.",
    price: "3,20€",
    images: ["/placeholder.svg"],
    features: [
      "Chocolate 70%",
      "Textura fudgy",
      "Sin frutos secos",
      "Receta tradicional",
    ],
    available: true,
  },
  {
    id: "brownie-nueces",
    name: "Brownie con Nueces",
    category: "brownies",
    description: "La combinación perfecta: chocolate intenso y nueces crujientes.",
    longDescription: "Nuestro brownie clásico elevado con nueces tostadas de primera calidad. El contraste perfecto entre lo fudgy del chocolate y el crujiente de las nueces.",
    price: "3,50€",
    images: ["/placeholder.svg"],
    features: [
      "Nueces selectas",
      "Tostado perfecto",
      "Extra chocolate",
      "Textura premium",
    ],
    available: true,
  },
  {
    id: "brownie-cheesecake",
    name: "Brownie Cheesecake",
    category: "brownies",
    description: "Dos postres en uno. Brownie de chocolate con remolino de cheesecake.",
    longDescription: "Una creación única que combina nuestro brownie más intenso con una capa de cheesecake cremoso. Marmolado a mano para crear un efecto visual y gustativo espectacular.",
    price: "4,00€",
    images: ["/placeholder.svg"],
    features: [
      "Doble postre",
      "Efecto marmolado",
      "Queso crema premium",
      "Innovador",
    ],
    available: true,
  },

  // Rolls
  {
    id: "roll-canela-clasico",
    name: "Roll de Canela Clásico",
    category: "rolls",
    description: "Esponjoso, aromático, con glaseado de queso crema.",
    longDescription: "Un clásico americano perfeccionado. Masa tierna enrollada con canela de Ceilán y azúcar moreno, coronado con nuestro característico glaseado de queso crema.",
    price: "3,80€",
    images: ["/placeholder.svg"],
    features: [
      "Canela de Ceilán",
      "Glaseado casero",
      "Masa fermentada",
      "Recién horneado",
    ],
    available: true,
  },
  {
    id: "roll-canela-pecanas",
    name: "Roll de Canela con Pecanas",
    category: "rolls",
    description: "Nuestro roll clásico con pecanas caramelizadas.",
    longDescription: "La versión premium de nuestro roll. Añadimos pecanas caramelizadas que aportan un toque crujiente y un sabor a nuez increíble.",
    price: "4,20€",
    images: ["/placeholder.svg"],
    features: [
      "Pecanas caramelizadas",
      "Toque crujiente",
      "Extra grande",
      "Sabor intenso",
    ],
    available: true,
  },

  // Cheesecake
  {
    id: "tarta-queso-clasica",
    name: "Tarta de Queso Clásica",
    category: "cheesecake",
    description: "Cremosa, suave y perfectamente equilibrada.",
    longDescription: "La tarta de queso por excelencia. Preparada con queso crema de máxima calidad sobre una base crujiente de galleta. El equilibrio perfecto entre dulzor y acidez.",
    price: "24,00€ (entera) / 3,50€ (porción)",
    images: ["/placeholder.svg"],
    features: [
      "Queso crema premium",
      "Base de galleta artesanal",
      "Textura sedosa",
      "Receta tradicional",
    ],
    available: true,
  },
  {
    id: "tarta-queso-frutos-rojos",
    name: "Tarta de Queso con Frutos Rojos",
    category: "cheesecake",
    description: "Nuestra tarta clásica coronada con mermelada de frutos del bosque.",
    longDescription: "La combinación perfecta de cremosidad y frescura. Nuestra tarta de queso clásica con una capa generosa de coulis de frutos rojos hechos en casa.",
    price: "26,00€ (entera) / 3,80€ (porción)",
    images: ["/placeholder.svg"],
    features: [
      "Frutos rojos naturales",
      "Coulis casero",
      "Equilibrio perfecto",
      "Presentación elegante",
    ],
    available: true,
  },
  {
    id: "tarta-queso-oreo",
    name: "Tarta de Queso Oreo",
    category: "cheesecake",
    description: "Base de Oreo, relleno cremoso con trozos de galleta.",
    longDescription: "Una versión moderna y divertida. Base completa de Oreo, relleno cremoso con trozos generosos de galleta Oreo, y decoración espectacular. ¡Perfecta para los amantes de esta icónica galleta!",
    price: "26,00€ (entera) / 3,80€ (porción)",
    images: ["/placeholder.svg"],
    features: [
      "Base 100% Oreo",
      "Trozos generosos",
      "Cremosidad extra",
      "Decoración premium",
    ],
    available: true,
  },
];

export const getProductsByCategory = (category: string) => {
  return products.filter((product) => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find((product) => product.id === id);
};
