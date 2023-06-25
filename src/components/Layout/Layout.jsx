import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export function Layout() {

  const willRedirect = ('/' === useLocation().pathname);

  return (
    <div>
      {willRedirect && <Navigate to={`/products`} />}
      <header><Header /></header>
      <main>
        <Outlet />
      </main>
      <footer><Footer /></footer>
    </div>
  );
}
