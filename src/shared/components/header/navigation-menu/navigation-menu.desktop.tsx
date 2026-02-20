import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { type MenuItemType } from "@/types";
import { NavigationSubmenu, NavigationSubmenuItem } from "./navigation-submenu";
import { LinkButton } from "../../link-button";
import { contactItem } from "@/constants";
import { NavLink } from "react-router";

interface NavigationMenuDesktopProps {
  menuItems: MenuItemType[];
}

export const NavigationMenuDesktop = ({
  menuItems,
}: NavigationMenuDesktopProps) => {
  const getMenuItemVariant = (menuItem: MenuItemType) => {
    const variant = menuItem.variant;
    switch (variant) {
      case "link": {
        return (
          <NavigationMenuItem key={`${menuItem.title}-${menuItem.id}`}>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <NavLink to={menuItem.href}>{menuItem.title}</NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        );
      }
      case "base": {
        return (
          <NavigationMenuItem key={`${menuItem.title}-${menuItem.id}`}>
            <NavigationMenuTrigger>
              {menuItem.href ? (
                <NavLink to={menuItem.href}>{menuItem.title}</NavLink>
              ) : (
                menuItem.title
              )}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationSubmenu>
                {menuItem.subitems.map((subitem) => (
                  <NavigationSubmenuItem
                    key={subitem.id}
                    href={subitem.href}
                    title={subitem.title}
                  >
                    {subitem.shortDescription}
                  </NavigationSubmenuItem>
                ))}
              </NavigationSubmenu>
            </NavigationMenuContent>
          </NavigationMenuItem>
        );
      }
      case "primary": {
        return (
          <NavigationMenuItem key={`${menuItem.title}-${menuItem.id}`}>
            <NavigationMenuTrigger>{menuItem.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationSubmenu>
                <NavigationSubmenuItem
                  description={menuItem.description}
                  href={menuItem.href}
                  title={menuItem.title}
                  variant="secondary"
                />
                {menuItem.subitems.map((subitem) => (
                  <NavigationSubmenuItem
                    key={subitem.id}
                    href={subitem.href}
                    title={subitem.title}
                  >
                    {subitem.shortDescription}
                  </NavigationSubmenuItem>
                ))}
              </NavigationSubmenu>
            </NavigationMenuContent>
          </NavigationMenuItem>
        );
      }
      default: {
        throw new Error(`Unexpected variant ${variant}`);
      }
    }
  };

  return (
    <>
      <NavigationMenu viewport={false} className="hidden lg:block">
        <NavigationMenuList className="flex-wrap">
          {menuItems.map((menuItem) => getMenuItemVariant(menuItem))}
        </NavigationMenuList>
      </NavigationMenu>
      <LinkButton
        className="text-primary-foreground! hidden lg:block"
        href={contactItem.href}
      >
        {contactItem.title}
      </LinkButton>
    </>
  );
};
