import { type PriceCardType } from "@/types";

export const liposuction: PriceCardType = {
  title: "Liposukcja",
  items: [
    {
      name: "Liposukcja brzucha",
      description: "(abdominoplastyka z plastyką skóry)",
      minPrice: 6000,
    },
    {
      name: "Liposukcja ramion z plastyką skóry",
      minPrice: 5000,
    },
    {
      name: "Liposukcja ud",
      minPrice: 5000,
    },
    {
      name: "Liposukcja wzgórka łonowego",
      minPrice: 3000,
    },
    {
      name: "Ginekomastia jednostronna",
      price: 4000,
    },
    {
      name: "Ginekomastia obustronna",
      price: 6000,
    },
  ],
};
