import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const RootLayout = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />

      {location.pathname === ("/" || "/search") && <Header />}
      <Outlet />
      <Footer />
    </>
  );
};
export default RootLayout;
