import { PriceCardType } from "@/types";

export const dermatologySurgery: PriceCardType = {
  title: "Dermatochirurgia",
  items: [
    {
      name: "Usunięcie chirurgiczne zmiany skórnej / podskórnej z badaniem histopatologicznym",
      description: "(kolejne wizyty i kontrole w cenie zabiegu)",
      minPrice: 700,
    },
    {
      name: "Videodermatoskopia",
      price: 400,
    },
    {
      name: "Wypalanie znamion skóry",
      description: "(elektrokoagulacja lub fala radiowa)",
      minPrice: 500,
    },
    {
      name: "Wymrażanie znamion skóry",
      description: "(krioterapia)",
      minPrice: 400,
    },
    {
      name: "Wycięcie wrastającego paznokcia",
      minPrice: 600,
    },
  ],
};
