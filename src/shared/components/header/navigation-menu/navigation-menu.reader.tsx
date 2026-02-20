import { type MenuItemType } from "@/types";
import { NavigationMenuDesktop } from "./navigation-menu.desktop";
import { NavigationMenuMobile } from "./navigation-menu.mobile";

interface NavigationMenuProps {
  menuItems: MenuItemType[];
}

const NavigationMenu = ({ menuItems }: NavigationMenuProps) => {
  return (
    <>
      <NavigationMenuDesktop menuItems={menuItems} />
      <NavigationMenuMobile menuItems={menuItems} />
    </>
  );
};

export default NavigationMenu;
