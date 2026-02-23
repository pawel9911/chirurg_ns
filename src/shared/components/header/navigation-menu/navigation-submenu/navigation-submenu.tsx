import { type PropsWithChildren } from "react";

export const NavigationSubmenu = ({ children }: PropsWithChildren) => {
  return (
    <ul className="grid gap-2 md:w-125 lg:w-162.5 lg:grid-cols-[1fr_1fr]">
      {children}
    </ul>
  );
};
