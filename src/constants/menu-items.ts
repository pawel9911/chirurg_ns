import { type MenuItemType } from "../types/menu-item.types";
import {
  aestheticSurgerySubItems,
  generalSurgerySubItems,
} from "./menu-subitems";

export const specialists: MenuItemType = {
  id: 1,
  href: "/specjalista",
  title: "Nasi specjaliści",
  variant: "link",
};

export const generalSurgeryItem: Extract<MenuItemType, { variant: "primary" }> =
  {
    id: 2,
    href: "/zabiegi/ogolne",
    title: "Zabiegi ogólne",
    description: "Chirurgia ogólna | lek. med. Robert Gajewski",
    subitems: generalSurgerySubItems,
    variant: "primary",
  };

export const aestheticSurgeryItem: Extract<
  MenuItemType,
  { variant: "primary" }
> = {
  id: 3,
  href: "/zabiegi/estetyczne",
  title: "Zabiegi estetyczne",
  description: "Chirurgia estetyczna | lek. med. Robert Gajewski",
  subitems: aestheticSurgerySubItems,
  variant: "primary",
};

export const priceListItem: MenuItemType = {
  id: 4,
  href: "/cennik",
  title: "Cennik",
  variant: "link",
};

export const contactItem: MenuItemType = {
  id: 5,
  href: "/kontakt",
  title: "Kontakt",
  variant: "link",
};

export const menuItems: MenuItemType[] = [
  specialists,
  generalSurgeryItem,
  aestheticSurgeryItem,
  priceListItem,
];
