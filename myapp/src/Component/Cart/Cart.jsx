import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAllCart, removeCart } from "../../Redux/slices/cart.slice";

const Cart = () => {
  const cart = useSelector((res) => res.cartSlice);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-center">
        <div className="flex mt-6 flex-col p-16 bg-red-50 w-3/4 gap-8">
          <div>
            {cart.length > 0 ? (
              <button
                className="px-4 py-2 bg-rose-500 text-white font-bold rounded hover:bg-rose-700"
                onClick={() => dispatch(removeAllCart())}
              >
                Remove All Cart
              </button>
            ) : (
              <h1 className="text-center font-bold text-3xl">Your Cart Is Empty!!!</h1>
            )}
          </div>
          {cart.map((item, index) => (
            <div
              key={index}
              className=" flex gap-x-8 animate__animated animate__zoomIn shadow-lg bg-white p-8 border rounded-lg"
            >
              <div className="flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: 225, height: 250 }}
                />
              </div>
              <div>
                <div className="flex flex-col gap-2 mt-6">
                  <h1 className="font-semibold text-lg">{item.title}</h1>
                  <p className="text-gray-600">
                    {item.description.slice(0, 40)}...
                  </p>
                  <h1 className="font-semibold text-lg">Rs. {item.price}</h1>
                </div>
                <div className="flex items-start mt-5 gap-4">
                  <button className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-700">
                    Buy Now
                  </button>
                  <button
                    className="px-4 py-2 bg-rose-500 text-white font-bold rounded hover:bg-rose-700"
                    onClick={() => dispatch(removeCart(index))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
