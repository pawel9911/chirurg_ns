import { PropsWithChildren } from "react";

export const NavigationSubmenu = ({ children }: PropsWithChildren) => {
  return (
    <ul className="grid gap-2 md:w-[500px] lg:w-[650px] lg:grid-cols-[1fr_1fr]">
      {children}
    </ul>
  );
};
