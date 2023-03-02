import { IMG_CDN_URL } from "../config";
// import { UserContext } from "../App";
// import { useContext } from "react";

const FoodMenu = ({ cloudinaryImageId, name, price }) => {
  console.log(name);
  // const { user } = useContext(UserContext);
  return (
    <div className="w-56 p-4 m-2 shadow-lg bg-pink-600 rounded-lg">
      <img
        className="rounded-md"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="BUrger king"
      />
      <h2 className="font-bold text-xl text-white">{name}</h2>
      {/* <h3 className="font-bold text-md text-white">{cuisines.join(", ")}</h3> */}
      {/* <h4 className="font-bold text-sm text-white">{lastMileTravelString}</h4> */}
      <h4 className="font-bold text-sm text-white">{price}</h4>
      {/* <h5 className="font-bold text-sm text-white">{user?.email}</h5> */}
      <h1>welcome</h1>
    </div>
  );
};

export default FoodMenu;
