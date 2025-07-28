import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";

const CategoryList = ({ showMenu, setShowMenu, lightMode }) => {
  const navigate = useNavigate();
  const [category, setCategory] = React.useState([]);
  React.useEffect(() => {
    setShowMenu(false);
    axios
      .get("https://dummyjson.com/products/category-list")
      .then((response) => {
        const cat = response.data;
        setCategory(cat);
      });
    console.log(category);
  }, []);
  return (
    <div
      className={`w-full py-10 flex justify-between lg:justify-center flex-wrap ${
        lightMode ? "bg-gray-700 text-white" : "bg-slate-200"
      }`}
    >
      <div
        className={`w-[70%] bg-slate-200 my-2 absolute bottom-[34%] left-[27%] rounded-md ${
          showMenu ? "block" : "hidden"
        } flex flex-col items-center py-8 ${
          lightMode ? "bg-gray-700 text-white" : "bg-slate-200"
        }`}
      >
        <Menu />
      </div>
      {category.map((item, index) => (
        <div
          key={index}
          className={`w-[49%] lg:w-[15%] ${
            lightMode ? "bg-black text-violet-400" : "bg-white text-violet-900"
          } rounded-xl shadow-md lg:mx-1 my-1 py-16`}
          onClick={() => navigate("/products", { state: item })}
        >
          <h1 className="text-xl font-serif font-bold text-center ">{item}</h1>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
