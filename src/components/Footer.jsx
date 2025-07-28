import React from "react";
import youtube from "../assets/youtube.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import pinterest from "../assets/pinterest_icon.png";
import linkedin from "../assets/linkdin.png";

const Footer = ({ lightMode }) => {
  return (
    <div
      className={`w-full ${lightMode ? "bg-black text-white" : "bg-white"} `}
    >
      <div className="w-[96%] border-gray-500 md:flex">
        <div className="w-[100%] md:w-[30%] pt-16 pb-16 md:py-14 px-5 md:ml-10 md:mr-36 text-justify">
          <h1 className="text-2xl font-extrabold font-serif mt-2 text-purple-800">
            DealHunt
          </h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <h1 className="hidden md:block text-2xl font-extrabold font-serif mt-14">
            Follow Us
          </h1>
          <div className="w-full hidden md:flex  gap-4 mt-2">
            <img src={youtube} alt="youtube" className="w-5" />
            <img src={facebook} alt="facebook" className="w-5" />
            <img src={instagram} alt="instagram" className="w-5" />
            <img src={pinterest} alt="pinterest" className="w-5" />
            <img src={linkedin} alt="linkedin" className="w-5" />
          </div>
        </div>
        <div className="w-[100%] flex md:justify-evenly flex-wrap ml-4 ">
          <div className="w-[50%] md:w-[20%] md:py-20 pb-8 pl-2">
            <h1 className=" text-2xl font-extrabold font-serif mt-2">
              Department
            </h1>
            <ul>
              <li className="my-2 hover:text-red-500 hover:translate-x-4 transition-all duration-300">
                Fashion
              </li>
              <li className="my-2 hover:text-red-500 hover:translate-x-4 transition-all duration-300">
                Electronics
              </li>
              <li className="my-2 hover:text-red-500 hover:translate-x-4 transition-all duration-300">
                Home & Kitchen
              </li>
              <li className="my-2 hover:text-red-500 hover:translate-x-4 transition-all duration-300">
                Beauty & Health
              </li>
              <li className="my-2 hover:text-red-500 hover:translate-x-4 transition-all duration-300">
                Sports & Outdoors
              </li>
              <li className="my-2 hover:text-red-500 hover:translate-x-4 transition-all duration-300">
                Toys & Games
              </li>
              <li className="my-2 hover:text-red-500 hover:translate-x-4 transition-all duration-300">
                Books
              </li>
              <li className="my-2 hover:text-red-500 hover:translate-x-4 transition-all duration-300">
                Automotive
              </li>
            </ul>
          </div>

          <div className="w-[50%] md:w-[20%] md:py-20 pb-8 pl-2">
            <h1 className=" text-2xl font-extrabold font-serif mt-2">
              About Us
            </h1>
            <ul>
              <li className="my-2 hover:text-red-500 hover:translate-x-4 transition-all duration-300">
                About DealHunt
              </li>
              <li className="my-2 hover:text-red-500 hover:translate-x-4 transition-all duration-300">
                Our Team
              </li>
              <li className="my-2 hover:text-red-500 hover:translate-x-4 transition-all duration-300">
                Careers
              </li>
              <li className="my-2 hover:text-red-500 hover:translate-x-4 transition-all duration-300">
                Privacy Policy
              </li>
              <li className="my-2 hover:text-red-500 hover:translate-x-4 transition-all duration-300">
                Terms of Service
              </li>
              <li className="my-2 hover:text-red-500 hover:translate-x-4 transition-all duration-300">
                Contact Us
              </li>
              <li className="my-2 hover:text-red-500 hover:translate-x-4 transition-all duration-300">
                Ideas
              </li>
              <li className="my-2 hover:text-red-500 hover:translate-x-4 transition-all duration-300">
                Automotive
              </li>
            </ul>
          </div>

          <div className="w-[50%] md:w-[20%] md:py-20 px-2 pl-2">
            <h1 className=" text-2xl font-extrabold font-serif mt-2">
              Services
            </h1>
            <ul>
              <li className="my-2 hover:text-red-500 hover:translate-x-4 transition-all duration-300">
                Gift Card
              </li>
              <li className="my-2 hover:text-red-500 hover:translate-x-4 transition-all duration-300">
                Mobile App
              </li>
              <li className="my-2 hover:text-red-500 hover:translate-x-4 transition-all duration-300">
                Wishlist
              </li>
              <li className="my-2 hover:text-red-500 hover:translate-x-4 transition-all duration-300">
                Delivery
              </li>
              <li className="my-2 hover:text-red-500 hover:translate-x-4 transition-all duration-300">
                Return
              </li>
            </ul>
          </div>

          <div className="w-[50%] md:w-[20%] md:py-20 px-2 pl-2">
            <h1 className=" text-2xl font-extrabold font-serif mt-2">Help</h1>
            <ul>
              <li className="my-2 hover:text-red-500 hover:translate-x-4 transition-all duration-300">
                Dealhunt Help
              </li>
              <li className="my-2 hover:text-red-500 hover:translate-x-4 transition-all duration-300">
                Track Order
              </li>
              <li className="my-2 hover:text-red-500 hover:translate-x-4 transition-all duration-300">
                Feedback
              </li>
              <li className="my-2 hover:text-red-500 hover:translate-x-4 transition-all duration-300">
                Security & Fraud
              </li>
            </ul>
          </div>
        </div>
        <div className="md:hidden ml-8">
          <h1 className="  text-2xl font-extrabold font-serif mt-14">
            Follow Us
          </h1>
          <div className="w-full flex  gap-4 mt-2">
            <img src={youtube} alt="youtube" className="w-5" />
            <img src={facebook} alt="facebook" className="w-5" />
            <img src={instagram} alt="instagram" className="w-5" />
            <img src={pinterest} alt="pinterest" className="w-5" />
            <img src={linkedin} alt="linkedin" className="w-5" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-10 border-t-2 border-gray-500 ">
        <h1>copyright © 2025 DealHunt. All rights reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;
