import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { NavLink } from "react-router";

export const NavigationSubmenuItem = ({
  children,
  description,
  href,
  title,
  variant = "primary",
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
  variant?: "primary" | "secondary";
  description?: string;
}) => {
  if (variant === "secondary") {
    return (
      <li {...props} className="row-span-2">
        <NavigationMenuLink
          className="data-[active=true]:focus:bg-primary data-[active=true]:hover:bg-primary data-[active=true]:bg-primary/50 hover:bg-primary focus:bg-accent"
          asChild
        >
          <NavLink
            className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-primary p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
            to={href}
          >
            <div className="text-primary-foreground mb-2 text-lg font-medium sm:mt-4">
              {title}
            </div>
            <p className="text-primary-foreground text-sm leading-tight">
              {description}
            </p>
          </NavLink>
        </NavigationMenuLink>
      </li>
    );
  }

  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <NavLink to={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </NavLink>
      </NavigationMenuLink>
    </li>
  );
};
