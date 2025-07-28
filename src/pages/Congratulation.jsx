import React from "react";
import party from "../assets/confetti-background.png";
import tick from "../assets/Green-Tick.png";

const Congratulation = () => {
  return (
    <div className=" w-full flex flex-col items-center h-[100vh]">
      <div className="w-full">
        <img src={party} alt="Party" className="w-full h-full  object-cover" />
      </div>

      <div className=" w-full flex flex-col items-center absolute top-[38%]">
        <img src={tick} alt="Tick" className="w-24 h-24 lg:w-48 lg:h-48 mb-4" />
        <h1 className="text-2xl lg:text-8xl font-serif font-bold text-green-700">
          Congratulations!
        </h1>
        <h1 className="text-2xl lg:text-4xl font-bold text-blue-600 font-serif text-center mt-5">
          Your order has been placed successfully.
        </h1>
      </div>
    </div>
  );
};

export default Congratulation;
