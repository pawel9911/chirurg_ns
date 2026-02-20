import { menuItems } from "@/constants";
import { Logo } from "../logo";
import { NavigationMenu } from "./navigation-menu";

export const Header = () => {
  return (
    <header className="container flex justify-between py-4">
      <Logo />
      <NavigationMenu menuItems={menuItems} />
    </header>
  );
};
