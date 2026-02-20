export type MenuSubItemType = {
  id: number;
  href: string;
  title: string;
  shortDescription: string;
  description: string;
  imgSrc: string;
  steps?: {
    title: string;
    description: string;
  }[];
};

export type MenuItemType =
  | {
      id: number;
      href: string;
      title: string;
      variant: "link";
    }
  | {
      id: number;
      href: string;
      title: string;
      subitems: MenuSubItemType[];
      variant: "base";
    }
  | {
      id: number;
      href: string;
      title: string;
      description: string;
      subitems: MenuSubItemType[];
      variant: "primary";
    };
