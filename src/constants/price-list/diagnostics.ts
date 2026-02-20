import { type PriceCardType } from "@/types";

export const diagnostics: PriceCardType = {
  title: "Diagnostyka",
  items: [
    {
      name: "Biopsja tkankowa cienkoigłowa",
      minPrice: 500,
    },
    {
      name: "Biopsja gruboigłowa*",
      minPrice: 600,
    },
    {
      name: "USG jamy brzusznej, piersi, tarczycy",
      price: 300,
    },
    {
      name: "Rektoskopia, anoskopia",
      price: 400,
    },
  ],
};
