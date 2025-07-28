import React from "react";
import login from "../assets/pngegg (6).png";
import cart from "../assets/add-to-cart-4-64.png";
import mode from "../assets/moon_12225673.png";
import Morecategory from "../assets/app_7324446.png";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center my-3">
        <input
          type="text"
          placeholder="Search"
          className="bg-white p-2 rounded-md outline-none w-[80%]"
        />
      </div>

      <div className="flex my-3">
        <img src={login} alt="Login" className="w-6 h-6" />
        <h1 className="ml-2">Login</h1>
      </div>

      <div className="flex my-3" onClick={() => navigate("/cart")}>
        <img src={cart} alt="cart" className="w-7 h-7" />
        <h1 className="ml-2">Cart</h1>
      </div>

      <div className="flex my-3">
        <img src={Morecategory} alt="cart" className="w-7 h-7" />
        <h1 className="ml-2" onClick={() => navigate("/category")}>
          Categories
        </h1>
      </div>

      <div className="flex my-3">
        {" "}
        <h1>Become A Seller</h1>
      </div>
    </>
  );
};

export default Menu;
