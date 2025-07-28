import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import tick from "../assets/Green-Tick.png";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/cartSlice";

const Products = ({ showMenu, setShowMenu, lightMode }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const state = location.state;
  const [products, setProducts] = useState([]);
  const [Added, setAdded] = useState(false);
  useEffect(() => {
    setShowMenu(false);
    axios
      .get(`https://dummyjson.com/products/category/${state}`)
      .then((response) => {
        setProducts(response.data.products);
        console.log(products);
      });
  }, [state]);

  return (
    <div
      className={`w-full ${
        lightMode ? "bg-gray-700 text-white" : "bg-slate-200"
      } pb-64 pt-24`}
    >
      <div
        className={`w-[70%] ${
          lightMode ? "bg-gray-700" : "bg-slate-200"
        } my-2 absolute bottom-[34%] left-[27%] rounded-md ${
          showMenu ? "block" : "hidden"
        } flex flex-col items-center py-8 ${
          lightMode ? "bg-gray-700 text-white" : "bg-slate-200"
        }`}
      >
        <Menu />
      </div>
      {Added && (
        <div
          className={`lg:w-[25%] ${
            lightMode ? "bg-black" : "bg-white"
          } rounded-lg flex items-center my-5 p-4 border-b-4 border-green-600 fixed top-5 left-[25%]  lg:left-[60%]`}
        >
          <img src={tick} alt="" className="w-8 h-8" />
          <h1 className="text-lg font-serif ml-3 text-green-600 font-semibold ">
            Added Successfully
          </h1>
        </div>
      )}
      <h1 className="text-5xl lg:text-6xl font-bold text-center mb-24">
        {" "}
        {state.toUpperCase()}
      </h1>
      <div className="w-full flex justify-between lg:justify-center flex-wrap">
        {products.map((products) => (
          <div
            key={products.id}
            className={`w-[49%] lg:w-[15%] ${
              lightMode ? "bg-black" : "bg-white"
            } rounded-xl shadow-md lg:mx-1 my-1`}
          >
            <div className="rounded-t-xl overflow-hidden">
              <img
                src={products.images[0]}
                alt=""
                className="w-full h-[200px] object-contain"
              />
            </div>
            <div
              className="p-3 "
              onClick={() => navigate("/productDetail", { state: products.id })}
            >
              <h1 className="font-bold text-base font-serif">
                {products.title.substring(0, 21)}
              </h1>
              <p className="text-sm text-gray-600 font-serif">
                {products.description.substring(0, 25)}...
              </p>
              <p className="text-lg font-semibold mt-1 font-serif">
                ${products.price}
              </p>
              <p className="text-sm mb-2 font-serif">
                {Math.floor(products.rating * 10) / 10}⭐ (
                {products.reviews.length})
              </p>
              <button
                className=" text-red-600 px-4 py-2 rounded-3xl border-2 border-red-600 w-36 hover:bg-red-600 hover:text-white transition-colors duration-300 mb-3 font-serif"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(
                    addItemToCart({
                      id: products.id,
                      title: products.title,
                      price: products.price,
                      image: products.images[0],
                    })
                  );
                  setAdded(true);
                  setTimeout(() => {
                    setAdded(false);
                  }, 1000);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
