import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/bag_12271743.png";
import menu from "../assets/menu_9283255.png";
import login from "../assets/pngegg (6).png";
import cart from "../assets/add-to-cart-4-64.png";
import mode from "../assets/moon_12225673.png";
import axios from "axios";

const Navbar = ({ setShowMenu, lightMode, setLightMode }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [searchedProduct, setSearchedProduct] = useState([]);
  useEffect(() => {
    if (input != "") {
      axios
        .get(`https://dummyjson.com/products/search?q=${input}`)
        .then((Response) => {
          const result = Response.data.products;
          setSearchedProduct(result);
        });
    }
  }, [input]);
  return (
    <div className="w-full ">
      <div className="bg-red-600 w-full text-white text-center">
        <h1>Free delivery on orders over $50</h1>
      </div>
      <div
        className={`w-full ${
          lightMode ? "bg-black text-white" : "bg-white"
        }  py-1 md:py-4 flex justify-between items-center `}
      >
        <div className="w-[20%] md:w-[10%] mx-6 md:mx-24 flex  items-center">
          <img src={logo} alt="Logo" className="w-12 h-12" />
          <h1 className="text-2xl font-bold font-serif text-purple-800 ml-2">
            DealHunt
          </h1>
        </div>
        <div className="w-[40%]">
          <input
            type="text"
            className={` rounded-lg ${
              lightMode ? "bg-gray-700 text-white" : "bg-slate-200"
            } p-2 ml-3 w-full outline-none hidden md:block`}
            placeholder="Search for products"
            onChange={(e) => setInput(e.target.value)}
          />
          <div
            className={`w-[40%] h-44 overflow-scroll absolute py-3 px-5 my-2 ml-2 bg-gray-300 rounded-lg ${
              input != "" && searchedProduct.length > 0 ? "block" : "hidden"
            }`}
          >
            {searchedProduct.map((result) => (
              <h1
                key={result.id}
                className="my-2"
                onClick={() => {
                  setInput("");
                  navigate("/productDetail", { state: result.id });
                }}
              >
                {" "}
                {result.title}{" "}
              </h1>
            ))}
          </div>
        </div>
        <div className="hidden md:flex items-center justify-around w-[30%] ml-10">
          <div className="flex ml-3">
            <img src={login} alt="Login" className="w-6 h-6" />
            <h1 className="ml-2">Login</h1>
          </div>

          <div className="flex ml-3" onClick={() => navigate("/cart")}>
            <img src={cart} alt="cart" className="w-7 h-7" />
            <h1 className="ml-2">Cart</h1>
          </div>

          <h1 className="hidden xl:block">Become a Seller</h1>
        </div>
        <div className="flex">
          <img
            src={mode}
            alt="mode"
            className="w-9 h-9 mr-2 "
            onClick={() => setLightMode((prev) => !prev)}
          />
          <img
            src={menu}
            alt="menu"
            className="w-9 h-9 mr-4 md:hidden"
            onClick={() => setShowMenu((prev) => !prev)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
