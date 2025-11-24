import cookiesImage from "@/assets/cookies.png";
import browniesImage from "@/assets/Dubai 1-2.png";
import rollsImage from "@/assets/rolls-hero.png";
import cheesecakeImage from "@/assets/cheesecake.png";
import { products } from "./products";

export interface Category {
  name: string;
  description: string;
  image: string;
  link: string;
  id: string;
  itemCount?: number;
}

export const categories: Category[] = [
    {
        id: "cookies",
        name: "Galletas",
        description:
            "Nuestro producto estrella. Gruesas, crujientes por fuera y suaves por dentro.",
        image: cookiesImage,
        link: "/productos/cookies",
        itemCount: products.filter(p => p.category === "cookies").length,
    },
    {
        id: "brownies",
        name: "Brownies",
        description:
            "Intensos, chocolateados y con el toque perfecto de dulzura.",
        image: browniesImage,
        link: "/productos/brownies",
        itemCount: products.filter(p => p.category === "brownies").length,
    },
    {
        id: "rolls",
        name: "Rolls de Canela",
        description:
            "Esponjosos, con el aroma de la canela recién horneada y cobertura cremosa.",
        image: rollsImage,
        link: "/productos/rolls",
        itemCount: products.filter(p => p.category === "rolls").length,
    },
    {
        id: "cheesecake",
        name: "Tartas de Queso",
        description: "Suaves, ligeras y con una base de galleta irresistible.",
        image: cheesecakeImage,
        link: "/productos/tartas",
        itemCount: products.filter(p => p.category === "cheesecake").length,
    },
];