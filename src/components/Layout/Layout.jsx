import React from "react";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routes from "../../routes/Routers";

import AdminNav from "../../admin/AdminNav";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  //   const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <div>
      {location.pathname.startsWith("/dashboard") ? <AdminNav /> : <Header />}

      {/* {showCart && <Carts />} */}

      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
