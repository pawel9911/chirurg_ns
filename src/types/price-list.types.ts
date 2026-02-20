export type PriceCardItemType =
  | {
      description?: string;
      highlight?: string;
      name: string;
      price?: number;
    }
  | {
      description?: string;
      highlight?: string;
      maxPrice?: number;
      minPrice?: number;
      name: string;
    };

export type PriceCardType = {
  title: string;
  items: PriceCardItemType[];
};
