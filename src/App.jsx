import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import CategoryList from "./pages/CategoryList";
import ProductDetail from "./pages/ProductDetail";
import CheckOut from "./pages/CheckOut";
import Cart from "./pages/Cart";
import Congratulation from "./pages/Congratulation";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar
            setShowMenu={setShowMenu}
            lightMode={lightMode}
            setLightMode={setLightMode}
          />
          <Home
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            lightMode={lightMode}
          />
          <Footer lightMode={lightMode} />
        </>
      ),
    },
    {
      path: "/products",
      element: (
        <>
          <Navbar
            setShowMenu={setShowMenu}
            lightMode={lightMode}
            setLightMode={setLightMode}
          />
          <Products
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            lightMode={lightMode}
          />
          <Footer lightMode={lightMode} />
        </>
      ),
    },
    {
      path: "/category",
      element: (
        <>
          <Navbar
            setShowMenu={setShowMenu}
            lightMode={lightMode}
            setLightMode={setLightMode}
          />
          <CategoryList
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            lightMode={lightMode}
          />
          <Footer lightMode={lightMode} />
        </>
      ),
    },
    {
      path: "/productDetail",
      element: (
        <>
          <Navbar
            setShowMenu={setShowMenu}
            lightMode={lightMode}
            setLightMode={setLightMode}
          />
          <ProductDetail
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            lightMode={lightMode}
          />
          <Footer lightMode={lightMode} />
        </>
      ),
    },
    {
      path: "/checkout",
      element: (
        <>
          <CheckOut lightMode={lightMode} />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <Cart lightMode={lightMode} />
        </>
      ),
    },
    {
      path: "/congratulation",
      element: (
        <>
          <Congratulation />
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
