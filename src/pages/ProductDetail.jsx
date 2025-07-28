import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/cartSlice";
import tick from "../assets/Green-Tick.png";

const ProductDetail = ({ showMenu, setShowMenu, lightMode }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  const [product, setProduct] = useState([]);
  const [Added, setAdded] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  useEffect(() => {
    setShowMenu(false);
    axios.get(`https://dummyjson.com/products/${state}`).then((response) => {
      setProduct(response.data);
    });
  }, []);
  return (
    <div
      className={`w-full lg:flex justify-center ${
        lightMode ? "bg-gray-700 text-white" : "bg-slate-200"
      } py-6`}
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
      <div className="w-fit lg:w-[40%] flex overflow-scroll lg:overflow-hidden lg:block px-3 ">
        {product.images && product.images.length > 0
          ? product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`img-${index}`}
                className={`w-[98%] lg:w-[75%] mx-1 my-4 ${
                  lightMode ? "bg-black" : "bg-white"
                } object-contain rounded-xl`}
              />
            ))
          : null}
      </div>

      <div className="w-full lg:w-[50%] flex justify-center my-7 lg:my-12">
        <div className="w-[80%] lg:w-full flex flex-col lg:block item-start">
          <h1 className="font-bold text-4xl lg:text-8xl font-serif">
            {product.title}
          </h1>
          <p className="text-2xl lg:text-4xl my-5 ">
            {Math.floor(product.rating * 10) / 10}⭐{" "}
          </p>
          <h1 className="text-2xl lg:text-4xl my-5 text-green-600 font-serif font-bold ">
            Special price
          </h1>
          <p className="text-4xl lg:text-6xl font-bold my-5">
            ${product.price}
          </p>
          <p>Secure delievery in 4-6 working days</p>
          <div className="my-10">
            <p className="text-wrap text-lg my-7 font-serif">
              {" "}
              🏷️ Bank Offer5% cashback on Axis Bank Credit Card upto ₹4,000 per
              statement quarter
            </p>
            <p className="text-wrap text-lg my-7 font-serif">
              🏷️ Bank Offer5% cashback on Axis Bank Debit Card up to ₹750
            </p>
            <p className="text-wrap text-lg my-7 font-serif">
              🏷️ Bank Offer10% off up to ₹1,500 on BOBCARD EMI Transactions of 6
              months and above tenures, Min TxnValue: ₹7,500
            </p>
            <p className="text-wrap text-lg my-7 font-serif">
              🏷️ Special PriceGet extra 43% off (price inclusive of
              cashback/coupon)
            </p>
          </div>
          <button
            className=" bg-red-400 px-4 mx-3 py-2 rounded-xl hover:scale-110 w-72 hover:bg-red-600 text-white transition-all duration-300 mb-3 font-serif"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(
                addItemToCart({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.images[0],
                })
              );
              setAdded(true);
              setTimeout(() => {
                setAdded(false);
              }, 1000);
            }}
          >
            Add To Cart
          </button>
          <button
            className=" bg-green-400 px-4 mx-3 py-2 rounded-xl hover:scale-110 w-72 hover:bg-green-600 text-white transition-all duration-300 mb-3 font-serif"
            onClick={() => navigate("/checkout", { state: product.id })}
          >
            Buy Now
          </button>
          {Added && (
            <div
              className={`lg:w-[25%] ${
                lightMode ? "bg-black" : "bg-white"
              } rounded-lg flex items-center my-5 p-4 border-b-4 border-green-600 absolute top-[185%] left-[25%] lg:top-[98%] lg:left-[60%]`}
            >
              <img src={tick} alt="" className="w-8 h-8" />
              <h1 className="text-lg font-serif ml-3 text-green-600 font-semibold">
                Added Successfully
              </h1>
            </div>
          )}
          <div
            className={`w-full flex justify-between ${
              lightMode ? "bg-black" : "bg-white"
            } mt-5 lg:mt-11 rounded-xl py-3 px-4 mx-3`}
          >
            <h1 className="text-lg font-serif">Product Detail</h1>
            <h1
              className={`text-2xl ${
                showDetail
                  ? "rotate-45 transition-transform duration-400"
                  : "transition-transform duration-400"
              }`}
              onClick={() => setShowDetail((prev) => !prev)}
            >
              +
            </h1>
          </div>
          <div
            className={
              showDetail
                ? `w-full ${
                    lightMode ? "bg-black" : "bg-white"
                  } mt-1 rounded-xl py-3 px-4 mx-3`
                : "hidden"
            }
          >
            <p className="text-lg font-serif my-3">
              <b>Description :</b>
              {product.description}
            </p>
            <h1 className="text-lg font-serif my-5">
              <b>Brand :</b> {product.brand}
            </h1>

            <h1 className="text-lg font-serif my-5">
              <b>Warranty :</b> {product.warrantyInformation}
            </h1>
            <h1 className="text-lg font-serif my-5">
              <b>Return Policy :</b> {product.returnPolicy}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
