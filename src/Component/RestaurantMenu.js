// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useRestaurantMenu from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const RestaurantMenu = () => {
  const { id } = useParams();

  // const [restaurantMenuResponse, setRestaurantMenuResponse] = useState(null);
  // useEffect(() => {
  //   getRestaurantMenu();
  // }, []);
  // async function getRestaurantMenu() {
  //   const resMenu = await fetch(
  //     "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9591966&lng=77.58988070000001&menuId=" +
  //       id
  //   );
  //   const menu = await resMenu.json();
  //   setRestaurantMenuResponse(menu?.data);
  //   console.log(menu);
  // }
  console.log("render");
  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };
  const [restaurantMenuResponse] = useRestaurantMenu(id);
  return (
    <>
      <div className="flex">
        <div>
          <h1>This is a restaurant menu</h1>
          <h2>{restaurantMenuResponse?.name}</h2>
          <img src={IMG_CDN_URL + restaurantMenuResponse?.cloudinaryImageId} />
          <h2>{restaurantMenuResponse?.locality}</h2>
          <h3>{restaurantMenuResponse?.area}</h3>
          {/* <div
            className="p-2 m-2 bg-orange-600 w-20 rounded-md text-white cursor-pointer"
            onClick={() => handleClick()}
          >
            Add btn
          </div> */}
        </div>

        <div>
          {restaurantMenuResponse &&
            Object?.values(restaurantMenuResponse?.menu?.items)?.map((data) => (
              <ul key={data?.id}>
                <li>
                  {data?.name}-
                  <button
                    className="p-2 m-2 bg-orange-600 w-28 rounded-md text-white cursor-pointer"
                    onClick={() => addFoodItem(data)}
                  >
                    -Add Item
                  </button>
                </li>
              </ul>
            ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
