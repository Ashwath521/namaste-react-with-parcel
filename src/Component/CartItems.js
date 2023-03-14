import React from "react";
import { useSelector } from "react-redux";
import Test from "./Test";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="flex flex-wrap">
      {cartItems.map((item) => (
        <Test {...item} key={item.id} />
      ))}
    </div>
  );
};

export default CartItems;
