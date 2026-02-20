import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import { type MenuItemType } from "@/types";
import { LinkButton } from "../../link-button";
import { contactItem } from "@/constants";
import { Logo } from "../../logo";
import { useState } from "react";
import { NavLink } from "react-router";

interface NavigationMenuMobileProps {
  menuItems: MenuItemType[];
}

export const NavigationMenuMobile = ({
  menuItems,
}: NavigationMenuMobileProps) => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <Button size="icon" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right">
        <SheetHeader>
          <Logo className="mx-auto" />
          <SheetTitle className="sr-only">Mobilne menu</SheetTitle>
          <SheetDescription className="sr-only">
            Główne menu nawigacyjne
          </SheetDescription>
        </SheetHeader>
        <nav className="px-6">
          <Accordion type="multiple" className="space-y-2">
            {menuItems.map((item) => {
              if (item.variant === "link") {
                return (
                  <NavLink
                    key={item.id}
                    to={item.href}
                    className="block text-base font-medium py-2"
                    onClick={closeMenu}
                  >
                    {item.title}
                  </NavLink>
                );
              }

              return (
                <AccordionItem
                  key={item.id}
                  value={String(item.id)}
                  className="border-none"
                >
                  <AccordionTrigger className="py-2 text-base font-medium">
                    {item.title}
                  </AccordionTrigger>

                  <AccordionContent className="pl-4">
                    {item.variant === "primary" && item.href && (
                      <NavLink
                        to={item.href}
                        className="block py-2 text-sm font-semibold"
                        onClick={closeMenu}
                      >
                        {item.title}
                      </NavLink>
                    )}

                    <ul className="space-y-2">
                      {item.subitems.map((subitem) => (
                        <li key={subitem.id}>
                          <NavLink
                            to={subitem.href}
                            className="block text-sm text-muted-foreground py-1"
                            onClick={closeMenu}
                          >
                            {subitem.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </nav>
        <SheetFooter>
          <LinkButton
            className="text-primary-foreground!"
            href={contactItem.href}
            onClick={closeMenu}
          >
            {contactItem.title}
          </LinkButton>
          <SheetClose asChild>
            <Button variant="outline">Zamknij</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
