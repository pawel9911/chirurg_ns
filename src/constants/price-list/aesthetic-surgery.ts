import { type PriceCardType } from "@/types";

export const aestheticSurgery: PriceCardType = {
  title: "Chirurgia estetyczna",
  items: [
    {
      name: "Korekta opadających powiek",
      price: 4000,
    },
    {
      name: "Korekta odstających uszu",
      price: 4500,
    },
    {
      name: "Abdominoplastyka",
      description: "(liposukcja z plastyką brzucha)",
      minPrice: 6000,
    },
    {
      name: "Lift ust",
      minPrice: 4000,
    },
    {
      name: "Botox",
      highlight: "1 amp.",
      minPrice: 1200,
    },
  ],
};
