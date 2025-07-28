import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/bag_12271743.png";

const CheckOut = ({ lightMode }) => {
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const [cardSelected, setCardSelected] = useState(false);
  const [codSelected, setCodSelected] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [success, setSuccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const price = location.state;

  return (
    <>
      <div
        className={`w-full ${
          lightMode ? "bg-gray-700 text-white" : "bg-slate-200"
        } ${success && "opacity-50"}`}
      >
        <div
          className={`w-full ${
            lightMode ? "bg-black" : "bg-white"
          } py-1 md:py-4 flex justify-between items-center`}
        >
          <div className="w-[20%] md:w-[10%] mx-6 md:mx-24 flex  items-center">
            <img src={logo} alt="Logo" className="w-12 h-12" />
            <h1 className="text-2xl font-bold font-serif text-purple-800 ml-2">
              DealHunt
            </h1>
          </div>
        </div>

        <div className="w-full flex flex-col items-center  lg:flex-row lg:justify-center lg:items-start py-8">
          <div className="w-[90%] lg:w-[30%]">
            <div
              className={`w-full rounded-md text-lg ${
                lightMode ? "bg-black" : "bg-white"
              }`}
            >
              <div className="w-full  bg-violet-800 rounded-t-md text-white py-4 px-8">
                <h1 className="font-serif text-lg ">Price Detail</h1>
              </div>
              <div className="w-full p-5 flex justify-between">
                <h1 className="font-serif">Price</h1>
                <h1>${Math.floor(price * 100) / 100}</h1>
              </div>
              <div className="w-full p-5 flex justify-between">
                <h1 className="font-serif">Delievery Charges</h1>
                <span className="flex">
                  <h1 className="line-through text-gray-400 mr-2">$1.2</h1>
                  <h1 className="text-green-600 font-serif">FREE</h1>
                </span>
              </div>
              <div className="w-full p-5 flex justify-between">
                <h1 className="font-serif">Platform fee</h1>
                <h1>$1</h1>
              </div>
              <div className="w-full p-5 border-t-2 border-gray-300 flex justify-between">
                <h1 className="font-serif">Total Payable</h1>
                <h1>${Math.floor((price * 100) / 100) + 1}</h1>
              </div>
            </div>

            <div
              className={`w-full ${
                lightMode ? "bg-black" : "bg-white"
              } my-9 rounded-md text-lg`}
            >
              <div className="w-full  bg-violet-800 rounded-t-md text-white py-4 px-8">
                <h1 className="font-serif text-lg ">PAYMENT MODE</h1>
              </div>
              <div className="w-full px-4 py-3">
                <div className="w-full p-5 flex justify-between">
                  <h1>Credit Card/Debit Card</h1>
                  <input
                    type="radio"
                    value={cardSelected}
                    checked={cardSelected}
                    onClick={() => {
                      setCardSelected((prev) => !prev);
                      setCodSelected(false);
                    }}
                  />
                </div>

                <div
                  className={`w-[80%] flex flex-wrap ${
                    cardSelected ? "block" : "hidden"
                  }`}
                >
                  <form>
                    <input
                      type="text"
                      required
                      placeholder="Card No.*"
                      className={`w-full border-2 border-gray-500 p-4 rounded-lg outline-none mb-6 ${
                        lightMode ? "bg-gray-700" : "bg-white"
                      }`}
                    />
                    <input
                      type="text"
                      required
                      placeholder="CVV*"
                      className={`w-[45%] border-2 border-gray-500 p-4 rounded-lg outline-none mr-4 ${
                        lightMode ? "bg-gray-700" : "bg-white"
                      }`}
                    />
                    <input
                      type="text"
                      required
                      placeholder="Validity*"
                      className={`w-[45%] border-2 border-gray-500 p-4 rounded-lg outline-none ${
                        lightMode ? "bg-gray-700" : "bg-white"
                      }`}
                    />
                  </form>
                </div>

                <div className="w-full p-5 flex justify-between">
                  <h1>COD</h1>
                  <input
                    type="radio"
                    value={codSelected}
                    checked={codSelected}
                    onClick={() => {
                      setCodSelected((prev) => !prev);
                      setCardSelected(false);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className={`w-[90%] lg:w-[58%] lg:ml-[2%] my-6 lg:my-0 rounded-md text-lg ${
              lightMode ? "bg-black" : "bg-white"
            }`}
          >
            <div className="w-full bg-violet-800 text-white font-serif rounded-t-md text-lg lg:text-2xl p-4">
              DELIEVERY ADDRESS
            </div>
            <div className="w-full ">
              <div className="w-full flex flex-wrap flex-col items-center lg:flex-row lg:justify-center ">
                <form className="px-2">
                  <input
                    type="text"
                    required
                    placeholder="Name*"
                    className={`w-[85%] lg:w-[46%] outline-none border-2 border-gray-500 p-3 lg:mr-2 my-3 rounded-lg ${
                      lightMode ? "bg-gray-700" : "bg-white"
                    }`}
                  />
                  <input
                    type="text"
                    required
                    placeholder="10 Digit Phone No.*"
                    className={`w-[85%] lg:w-[46%] outline-none border-2 border-gray-500 p-3 my-3 rounded-lg ${
                      lightMode ? "bg-gray-700" : "bg-white"
                    }`}
                  />
                  <input
                    type="text"
                    required
                    placeholder="Pincode*"
                    className={`w-[85%] lg:w-[46%] outline-none border-2 border-gray-500 p-3 lg:mr-2 my-3 rounded-lg ${
                      lightMode ? "bg-gray-700" : "bg-white"
                    }`}
                  />
                  <input
                    type="text"
                    required
                    placeholder="Locality*"
                    className={`w-[85%] lg:w-[46%] outline-none border-2 border-gray-500 p-3 my-3 rounded-lg ${
                      lightMode ? "bg-gray-700" : "bg-white"
                    }`}
                  />
                  <textarea
                    required
                    placeholder="Address (Area & street)*"
                    className={`w-[85%] lg:w-[93%] outline-none border-2 border-gray-500 p-3 my-3 rounded-lg ${
                      lightMode ? "bg-gray-700" : "bg-white"
                    }`}
                  />
                  <input
                    type="text"
                    required
                    placeholder="City/District/Town*"
                    className={`w-[85%] lg:w-[46%] outline-none border-2 border-gray-500 p-3 lg:mr-2 my-3 rounded-lg ${
                      lightMode ? "bg-gray-700" : "bg-white"
                    }`}
                  />
                  <select
                    name="state"
                    required
                    className={`w-[85%] lg:w-[46%] bg-transparent outline-none border-2 border-gray-500 p-3 my-3 rounded-lg ${
                      lightMode ? "bg-gray-700" : "bg-white"
                    }`}
                  >
                    <option selected disabled>
                      --Select State*--
                    </option>
                    {states.map((state, index) => (
                      <option key={index}>{state}</option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder="LandMark (Optional)"
                    className={`w-[85%] lg:w-[46%] outline-none border-2 border-gray-500 p-3 lg:mr-2 my-3 rounded-lg ${
                      lightMode ? "bg-gray-700" : "bg-white"
                    }`}
                  />
                  <input
                    type="text"
                    placeholder="Alternate No. (Optional)"
                    className={`w-[85%] lg:w-[46%] outline-none border-2 border-gray-500 p-3 my-3 rounded-lg ${
                      lightMode ? "bg-gray-700" : "bg-white"
                    }`}
                  />

                  <button
                    className=" bg-red-500 px-4 mx-3 py-2 rounded-xl hover:scale-110 w-72 hover:bg-red-700 text-white transition-all duration-300 mt-5 mb-11 font-serif"
                    onClick={(e) => {
                      e.preventDefault();
                      cardSelected == true || codSelected == true
                        ? navigate("/congratulation")
                        : alert("Please select a payment method");
                    }}
                  >
                    Confirm Order
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
