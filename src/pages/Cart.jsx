import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/bag_12271743.png";
import { increment } from "../redux/cartSlice";
import { decrement } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import emptyCart from "../assets/shopping_11034993.png";

const Cart = ({ lightMode }) => {
  const data = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    return data.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  const total = calculateTotalPrice();

  return (
    <div
      className={`w-full ${
        lightMode ? "bg-gray-700 text-white" : "bg-slate-200"
      } h-[100vh]`}
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

      <div className="w-full flex flex-col items-center lg:flex-row lg:justify-center lg:items-start py-8">
        <div className="w-[90%] lg:w-[58%] lg:ml-[2%] bg-white my-6 lg:my-0 rounded-md text-lg">
          <div className="w-full bg-violet-800 text-white font-serif rounded-t-md text-lg lg:text-2xl p-4">
            Your Cart
          </div>
          <div className={`w-full ${lightMode ? "bg-black" : "bg-white"}`}>
            {(data.cartItems.length > 1 && (
              <div className="w-full flex flex-col items-center overflow-y-scroll h-[45vh] lg:h-[70vh]">
                <div className="w-full flex flex-col items-center h-max" >
 {data.cartItems.map((item) => (
                  <div key={item.id} className="w-full flex justify-center">
                    {item.quantity > 0 && (
                      <div
                        key={item.id}
                        className={`w-[90%] lg:w-[70%] ${
                          lightMode ? "bg-black" : "bg-white"
                        }  m-2 p-4 flex `}
                      >
                        <img
                          src={item.image}
                          alt=""
                          className="w-28 h-28 object-cover"
                        />
                        <div className="ml-4">
                          <h3 className="text-lg font-bold">{item.title}</h3>
                          <p className="text-gray-600">
                            ${item.price * item.quantity}
                          </p>
                          <p className="mb-2">Quantity</p>
                          <div className="flex items-center">
                            <button
                              className="border-2 border-gray-400 px-3  rounded-l-md"
                              onClick={() => {
                                dispatch(increment(item.id));
                              }}
                            >
                              +
                            </button>
                            <span className=" border-b-2 border-t-2 border-gray-400 px-3">
                              {item.quantity}
                            </span>
                            <button
                              className="border-2 border-gray-400 px-3  rounded-r-md"
                              onClick={() => {
                                dispatch(decrement(item.id));
                              }}
                            >
                              -
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                </div>
               
                {data.cartItems.length  >1 && (
                  <button
                    type="submit"
                    className=" bg-red-500 px-4 py-2 rounded-xl hover:scale-110 w-72 hover:bg-red-700 text-white transition-all duration-300 mt-5 mb-11 font-serif lg:fixed lg:bottom-5 lg:left-[40%]"
                    onClick={() => navigate("/checkout", { state: total })}
                  >
                    Checkout
                  </button>
                )}
              </div>
            )) || (
              <div className="w-full flex flex-col justify-center items-center h-[70vh]">
                <img src={emptyCart} alt="" className="w-24 h-24 mb-5" />
                <h1 className="text-2xl font-serif">Your Cart is Empty</h1>
                <h1 className="mt-2 text-2xl font-serif">Continue Shopping</h1>
              </div>
            )}
          </div>
        </div>

        {data.cartItems.length > 1 && (
          <div
            className={`w-[90%] lg:w-[30%] ${
              lightMode ? "bg-black" : "bg-white"
            } lg:ml-7  rounded-md text-lg`}
          >
            <div className="w-full  bg-violet-800 rounded-t-md text-white py-4 px-8">
              <h1 className="font-serif text-lg ">Price Detail</h1>
            </div>
            <div className="w-full p-5 flex justify-between">
              <h1 className="font-serif">Price</h1>
              <h1>${Math.floor((total * 100) / 100) + 50}</h1>
            </div>
            <div className="w-full p-5 flex justify-between">
              <h1 className="font-serif">Discount</h1>
              <span className="flex">
                <h1> $50</h1>
              </span>
            </div>
            <div className="w-full p-5 border-t-2 border-gray-300 flex justify-between">
              <h1 className="font-serif">Total Payable</h1>
              <h1>{Math.floor(total * 100) / 100}</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
