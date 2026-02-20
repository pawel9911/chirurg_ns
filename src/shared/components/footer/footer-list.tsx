import { type MenuItemType } from "@/types";
import { type HTMLAttributes } from "react";
import { NavLink } from "react-router";

interface FooterListProps {
  item: MenuItemType;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

export const FooterList = ({ item, className }: FooterListProps) => {
  return (
    <div className={`my-4 ${className ?? ""}`}>
      <h3 className="text-base text-primary-foreground font-bold">
        <NavLink to={item.href}>{item.title}</NavLink>
      </h3>
      {item.variant === "link" ? null : (
        <ul className="[&>li]:mt-3 text-sm text-primary-foreground">
          {item.subitems.map((e) => (
            <li key={e.id}>
              <NavLink to={e.href}>{e.title}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
