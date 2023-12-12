import { Outlet } from "react-router-dom";

import { Footer } from "../footer";
import { Header } from "../header";

export const AppLayout = () => {
  return (
    <div className="bg-white">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
