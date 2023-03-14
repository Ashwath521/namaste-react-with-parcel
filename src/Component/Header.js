import React, { useState, useContext } from "react";
import Logo from "../assets/img/Foodvilla.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
// import { UserContext } from "../App";
import { useSelector } from "react-redux";
const Title = () => {
  return (
    <div className="rounded-full">
      <img
        data-testid="logo"
        className="h-20 w-20 rounded-lg"
        src={Logo}
        alt="food villa image"
      />
    </div>
  );
};

const HeaderComponent = () => {
  // const { user } = useContext(UserContext);
  // console.log(user);
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  const [buttonShow, setButtonShow] = useState(true);
  const isOnline = useOnline();
  return (
    <>
      <h1 className="text-center text-2xl font-bold text-orange-600 mt-4">
        Ashwath Food Villa
      </h1>
      <div className="flex justify-around border-pink-100 border-2 m-10 bg-orange-600 rounded-md p-4">
        <Title />
        <div>
          <ul className="flex align-middle mt-7 text-white text-lg">
            <Link to="/">
              <li className="pr-4">Home</li>
            </Link>
            <Link to="/about">
              <li className="pr-4">About</li>
            </Link>
            <Link to="/contact">
              <li className="pr-4">Contact</li>
            </Link>

            <Link to="/instmart">
              <li className="pr-4">InstMart</li>
            </Link>
            <Link to="/cart">
              <li className="pr-4" data-testid="cart">
                Cart - {cartItems.length}-items
              </li>
            </Link>

            <h1 className="pr-4" data-testid="online-status">
              {isOnline ? "✅" : "🔴"}
            </h1>
            {/* <h2>{user?.name}</h2> */}
          </ul>
        </div>
        {buttonShow ? (
          <button
            className="text-white text-lg"
            onClick={() => {
              if (buttonShow) {
                setButtonShow(false);
              }
            }}
          >
            Login
          </button>
        ) : (
          <button
            className="text-white text-lg"
            onClick={() => {
              if (!buttonShow) {
                setButtonShow(true);
              }
            }}
          >
            Logout
          </button>
        )}
      </div>
    </>
  );
};
export default HeaderComponent;
