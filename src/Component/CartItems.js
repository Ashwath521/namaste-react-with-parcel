import React from "react";
import { useSelector } from "react-redux";
import FoodMenu from "./FoodMenu";

const CartItems = () => {
  const cartItem = useSelector((state) => state.cart.items);
  console.log(cartItem);
  return (
    <>
      <h1>cart items</h1>
      <div>
        {/* {cartItem.map((items) => {
          <FoodMenu {...items} key={items?.id} />;
        })} */}
        <FoodMenu />
      </div>
    </>
  );
};

// cloudinaryImageId;
// name;
// price;
// restId;

export default CartItems;
