import { Header, Footer } from "@/shared";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
