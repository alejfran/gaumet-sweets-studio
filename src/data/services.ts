import wedding from "@/assets/Wedding.png";
import custom from "@/assets/custom.png";
import event from "@/assets/Events.png";

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: wedding,
    title: "Bodas",
    description:
      "Endulza tu día especial con nuestras creaciones personalizadas.",
  },
  {
    icon: custom,
    title: "Encargos Personalizados",
    description: "Danos una semana y creamos el pastel de tus sueños.",
  },
  {
    icon: event,
    title: "Eventos",
    description:
      "Pasteles únicos para cumpleaños, celebraciones y eventos corporativos.",
  },
];