import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/slices/auth.slice";

const menus = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Images",
    to: "/images",
  },
  {
    label: "Login",
    to: "/login",
  },
  {
    label: "Post",
    to: "/posts",
  },
  {
    label: "Products",
    to: "/products",
  },
  {
    label: "Cart",
    to: "/cart",
    badge: true,
  },
];

const Layout = ({ children }) => {
  const auth = useSelector((res) => res.authSlice);
  const cart = useSelector((res) => res.cartSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);
  const [animate, setAnimate] = useState(null);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handlePopup = () => {
    if (popup) {
      setAnimate("animate__animated animate__flipOutX");
      setTimeout(() => {
        setPopup(false);
      }, 1000);
    } else {
      setAnimate("animate__animated animate__flipInY");
      setPopup(true);
    }
  };

  return (
    <>
      <div>
        <div className="flex justify-around items-center bg-slate-900 fixed top-0 left-0 z-10 w-full">
          <h1 className="text-white text-2xl font-bold">Redux</h1>
          <ul className="flex">
            {menus.map((item, index) => (
              <div key={index}>
                {(auth.user && item.to) !== "/login" && (
                  <li className="p-6 hover:bg-indigo-600 relative" key={index}>
                    {item.badge && cart.length > 0 && (
                      <div className="absolute top-0 right-0 bg-red-500 w-8 h-8 rounded-full flex items-center justify-center text-semibold text-white">
                        {cart.length}
                      </div>
                    )}

                    <Link className="text-white font-semibold" to={item.to}>
                      {item.label}
                    </Link>
                  </li>
                )}
              </div>
            ))}
            {auth.user && (
              <li className="relative flex items-center">
                <button
                  onClick={handlePopup}
                  className="overfolw-hidden w-8 h-8 bg-orange-600 rounded-full"
                >
                  <img
                    src={auth.user.image}
                    alt="dummy"
                    className="w-full h-full"
                  />
                </button>
                {popup && (
                  <div
                    className={`absolute top-20 border rounded flex flex-col bg-white shadow-lg
                  ${animate}`}
                  >
                    <Link
                      to="/profile"
                      className="px-4 py-2 hover:bg-indigo-600 hover:text-white text-left"
                    >
                      My Profile
                    </Link>
                    <button className="px-4 py-2 hover:bg-indigo-600 hover:text-white text-left">
                      {auth.user.email}
                    </button>
                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 hover:bg-indigo-600 hover:text-white text-left"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </li>
            )}
          </ul>
        </div>
        <div>{children}</div>
        <div className="bg-slate-900 p-32">
          <h1 className="text-white text-6xl font-bold">Footer</h1>
        </div>
      </div>
    </>
  );
};

export default Layout;
