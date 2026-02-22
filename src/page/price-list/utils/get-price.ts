import { type PriceCardItemType } from "@/types";

export const getPrice = (item: PriceCardItemType) => {
  if ("price" in item) {
    return `${item.price} zł`;
  }

  if ("minPrice" in item || "maxPrice" in item) {
    const minPrice = item.minPrice ? `od ${item.minPrice} zł` : "";
    const maxPrice = item.maxPrice ? `do ${item.maxPrice} zł` : "";

    return `${minPrice} ${maxPrice}`;
  }

  return "-";
};
