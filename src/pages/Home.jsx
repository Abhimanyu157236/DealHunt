import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import beauty from "../assets/skincare_10017037.png";
import fragrances from "../assets/perfume_9613148.png";
import groceries from "../assets/vegetable_4737442.png";
import furniture from "../assets/desk_10107853.png";
import kitchenaccessories from "../assets/kitchen-tools_15369268.png";
import Morecategory from "../assets/app_7324446.png";
import banner from "../assets/Image_01_-_Desktop_1.webp";
import mobileBanner from "../assets/katie_desktop_2.webp";
import mens from "../assets/mens.avif";
import women from "../assets/women.avif";
import kids from "../assets/kids.avif";
import fashion from "../assets/fashion-word.png";
import furnitureVillage from "../assets/furniture-village.png";
import cards from "../assets/realistic-credit-card-design.png";
import Menu from "../components/Menu";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/cartSlice";
import tick from "../assets/Green-Tick.png";

const Home = ({ showMenu, setShowMenu, lightMode }) => {
  const [smartPhone, setSmartPhone] = useState([]);
  const [Added, setAdded] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItemToCart(item));
  };

  useEffect(() => {
    setShowMenu(false);
    axios
      .get("https://dummyjson.com/products/category/smartphones")
      .then((response) => {
        const phone = response.data.products;
        setSmartPhone(phone);
      });
  }, []);

  const categoryImages = [
    { name: "Beauty", image: beauty },
    { name: "Fragrances", image: fragrances },
    { name: "Groceries", image: groceries },
    { name: "Furniture", image: furniture },
    { name: "Kitchen-accessories", image: kitchenaccessories },
    { name: "More Categories", image: Morecategory },
  ];

  return (
    <div
      className={`w-full pb-28 ${
        lightMode ? "bg-gray-700 text-white" : "bg-slate-200"
      }`}
    >
      <div className="w-full flex justify-center lg:py-4">
        <div
          className={`py-10 px-4 ${
            lightMode ? "bg-black" : "bg-white"
          } w-[95%] rounded-md hidden lg:flex justify-evenly`}
        >
          {categoryImages.map((item, index) => (
            <div>
              <div className="flex justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 mb-2 hover:scale-125 transition-transform duration-300"
                  onClick={() => {
                    index == 5
                      ? navigate("/category")
                      : navigate("/products", {
                          state: item.name.toLocaleLowerCase(),
                        });
                  }}
                />
              </div>
              <h1>{item.name}</h1>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:hidden ">
        <img
          src={mobileBanner}
          alt=""
          className="w-[100%] h-96 object-cover brightness-50"
        />
        <div
          className={`w-[70%] my-2 absolute bottom-[34%] left-[27%] rounded-md ${
            showMenu ? "block" : "hidden"
          } flex flex-col items-center py-8 ${
            lightMode ? "bg-gray-600 text-white" : "bg-slate-200"
          }`}
        >
          <Menu />
        </div>
        <div
          className={`absolute top-52 pl-12 ${showMenu ? "hidden" : "block"}`}
        >
          <h1 className="text-red-500 font-serif text-4xl font-semibold mb-4">
            Upto 50% off
          </h1>
          <button className="py-2 px-5 bg-red-500 text-white rounded-full">
            Shop Now
          </button>
        </div>
      </div>

      <div className="w-full hidden lg:flex justify-center my-2">
        <img src={banner} alt="" className="w-[95%] rounded-lg" />
      </div>

      <div className="w-full flex justify-center px-2 my-2 lg:px-0">
        <div className="w-[35%] lg:w-[31%] flex flex-col items-center">
          <img src={mens} alt="" className="w-full rounded-lg" />
          <h1
            className="font-serif text-md lg:text-lg lg:bg-white md:relative bottom-14 right-40 lg:px-8 lg:py-1 lg:rounded-md"
            onClick={() => navigate("/products", { state: "mens-shirts" })}
          >
            Men
          </h1>
        </div>

        <div className="w-[35%] lg:w-[31%] flex flex-col items-center mx-1 lg:mx-3">
          <img src={women} alt="" className="w-full rounded-lg" />
          <h1
            className="font-serif text-md lg:text-lg  lg:bg-white md:relative bottom-14 right-40 lg:px-8 lg:py-1 lg:rounded-md"
            onClick={() => navigate("/products", { state: "womens-dresses" })}
          >
            Women
          </h1>
        </div>

        <div className="w-[35%] lg:w-[31%] flex flex-col items-center">
          <img src={kids} alt="" className="w-full rounded-lg" />
          <h1 className="font-serif text-md lg:text-lg  lg:bg-white md:relative bottom-14 right-40 lg:px-8 lg:py-1 lg:rounded-md">
            Kids
          </h1>
        </div>
      </div>

      <h1 className="text-xl md:text-2xl lg:text-4xl font-serif font-bold mt-10 md:mt-16 mb-4 md:mb-10 ml-4 md:ml-12">
        Best Deals On Smartphones
      </h1>
      {Added && (
        <div
          className={`lg:w-[25%] ${
            lightMode ? "bg-black" : "bg-white"
          } rounded-lg flex items-center my-5 p-4 border-b-4 border-green-600 fixed top-5 left-[25%]  lg:left-[60%]`}
        >
          <img src={tick} alt="" className="w-8 h-8" />
          <h1 className="text-lg font-serif ml-3 text-green-600 font-semibold">
            Added Successfully
          </h1>
        </div>
      )}
      <div className="w-full flex justify-between lg:justify-center flex-wrap">
        {smartPhone.slice(0, 6).map((phone) => (
          <div
            key={phone.id}
            className={`w-[49%] lg:w-[15%] ${
              lightMode ? "bg-black" : "bg-white"
            } rounded-xl shadow-md lg:mx-1 my-1`}
          >
            <div className="rounded-t-xl overflow-hidden">
              <img
                src={phone.images[0]}
                alt=""
                className="w-full h-[200px] object-contain"
              />
            </div>
            <div
              className="p-3 "
              onClick={() => navigate("/productDetail", { state: phone.id })}
            >
              <h1 className="font-bold text-base font-serif">
                {phone.title.substring(0, 21)}
              </h1>
              <p className="text-sm text-gray-600 font-serif">
                {phone.description.substring(0, 25)}...
              </p>
              <p className="text-lg font-semibold mt-1 font-serif">
                ${phone.price}
              </p>
              <p className="text-sm mb-2 font-serif">
                {Math.floor(phone.rating * 10) / 10}⭐ ({phone.reviews.length})
              </p>
              <button
                className=" text-red-600 px-4 py-2 rounded-3xl border-2 border-red-600 w-36 hover:bg-red-600 hover:text-white transition-colors duration-300 mb-3 font-serif"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart({
                    id: phone.id,
                    title: phone.title,
                    price: phone.price,
                    image: phone.images[0],
                  });
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

      <div className="flex justify-center mt-10 md:mt-16">
        <div className="w-[95%] flex bg-orange-300 px-10 md:px-36 md:pb-10 rounded-xl">
          <div className="pt-16 md:pt-36 w-full md:w-[55%]">
            <h1 className="text-3xl text-black md:text-5xl font-bold mt-8 mb-4">
              Get 5% Cash back
            </h1>
            <h3 className="text-xl text-black md:text-2xl md:pl-3">
              on LuxKart.com
            </h3>
            <button className="ml-3 px-4 py-3 rounded-3xl text-white text-xl w-36 md:w-40 bg-emerald-900  my-6">
              Learn More
            </button>
          </div>
          <div className="hidden md:block w-[45%] ml-32 mt-20">
            <img src={cards} alt="cards" className="w-full" />
          </div>
        </div>
      </div>

      <h1 className="text-xl md:text-2xl lg:text-4xl font-serif font-bold mt-10 md:mt-16 mb-4 md:mb-10 ml-4 md:ml-12">
        Trending Products for you!
      </h1>
      <div className="w-full md:flex justify-center mt-5 ">
        <div
          className={`w-[96%] md:w-[48%] md:mr-1 ${
            lightMode ? "bg-black" : "bg-white"
          } rounded-2xl mb-7`}
        >
          <img
            src={furnitureVillage}
            alt="furniture village"
            className="md:w-full w-[100%] rounded-t-2xl"
          />
          <h1 className="text-2xl font-bold mt-7 mx-7 font-serif">
            Furniture Village
          </h1>
          <p className="text-sm mx-7 my-2 font-serif">
            Delivery with in 24 hours
          </p>
          <button
            className={`mx-7 px-4 py-3 rounded-3xl  text-xl w-36 md:w-40 ${
              lightMode ? "bg-gray-700 text-white" : "bg-black text-white"
            } mt-3 mb-9 font-serif`}
            onClick={() => navigate("/products", { state: "furniture" })}
          >
            Shop Now
          </button>
        </div>
        <div
          className={`w-[96%] md:w-[48%] ml-[1%] md:mr-1 ${
            lightMode ? "bg-black" : "bg-white"
          } rounded-2xl mb-7`}
        >
          <img
            src={fashion}
            alt="fashion"
            className="md:w-full w-[100%] rounded-t-2xl"
          />
          <h1 className="text-2xl font-bold mt-7 mx-7 font-serif">
            Fashion World
          </h1>
          <p className="text-sm mx-7 my-2 font-serif">
            Delivery with in 24 hours
          </p>
          <button
            className={`mx-7 px-4 py-3 rounded-3xl  text-xl w-36 md:w-40 ${
              lightMode ? "bg-gray-700 text-white" : "bg-black text-white"
            } mt-3 mb-9 font-serif`}
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
