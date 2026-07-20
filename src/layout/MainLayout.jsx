import { Outlet } from "react-router";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";

export default function MainLayout() {
  return (
    <>
      <header>
        <Hero />
      </header>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </>
  );
}
