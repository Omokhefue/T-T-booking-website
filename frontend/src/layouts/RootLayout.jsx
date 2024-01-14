import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const RootLayout = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      {/* {location.pathname === "/" && <Header />} */}
      <Outlet />
      <Footer />
    </>
  );
};
export default RootLayout;
