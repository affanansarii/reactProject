import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/slices/products.slice";
import { addToCart } from "../../Redux/slices/cart.slice";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((res) => res.productsSlice);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      {products.loading && (
        <div className="flex items-center justify-center bg-red-100 min-h-screen">
          <h1 className="text-2xl shadow-sm font-semibold bg-white px-5 p-3 rounded-lg">
            Loading...
          </h1>
        </div>
      )}

      {products.loading === false && products.data && (
        <div>
          <div className="p-16 bg-red-50 grid md:grid-cols-4 gap-8">
            {products.data.map((item, index) => (
              <div
                key={index}
                className="shadow-lg bg-white p-8 border rounded-lg animate__animated animate__zoomIn"
              >
                <div className="flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: 225, height: 250 }}
                  />
                </div>
                <div className="flex flex-col gap-2 mt-6">
                  <h1 className="font-semibold text-lg">{item.title}</h1>
                  <p className="text-gray-600">
                    {item.description.slice(0, 40)}...
                  </p>
                  <h1 className="font-semibold text-lg">Rs. {item.price}</h1>
                </div>
                <div className="flex mt-5 gap-4">
                  <button
                    className="px-4 py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-800"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    Add to Cart
                  </button>
                  <button className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-700">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {products.loading === false && products.error && (
        <div className="flex items-center justify-center bg-red-100 min-h-screen">
          <h1 className="text-2xl shadow-sm bg-red-500 text-white font-semibold px-5 p-3 rounded-lg">
            Something Went wrong!
          </h1>
        </div>
      )}
    </>
  );
};

export default Products;
