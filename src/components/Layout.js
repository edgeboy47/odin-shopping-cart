import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Cart from "./Cart";

const Layout = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
      <Header setIsCartOpen={setIsCartOpen} />
      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      <Outlet />
    </>
  );
};

export default Layout;
