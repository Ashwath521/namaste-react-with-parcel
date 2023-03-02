import { IMG_CDN_URL } from "../config";
import { UserContext } from "../App";
import { useContext } from "react";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  lastMileTravelString,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-56 p-4 m-2 shadow-lg bg-pink-600 rounded-lg">
      <img
        className="rounded-md"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="BUrger king"
      />
      <h2 className="font-bold text-xl text-white">{name}</h2>
      <h3 className="font-bold text-md text-white">{cuisines.join(", ")}</h3>
      <h4 className="font-bold text-sm text-white">{lastMileTravelString}</h4>
      <h4 className="font-bold text-sm text-white">{user?.name}</h4>
      <h5 className="font-bold text-sm text-white">{user?.email}</h5>
    </div>
  );
};

export default RestaurantCard;
