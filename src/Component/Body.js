import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import FilterShimmer from "./FilterShimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const BodyComponent = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [filterRestaurantData, setFilterRestaurantData] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    getRestaurantData();
  }, []);
  async function getRestaurantData() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9717208&lng=77.6006245&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
      setFilterRestaurantData(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  const isOnline = useOnline();

  if (!isOnline)
    return <h1>🔴!!Oops offline please check your internet connection📶</h1>;

  if (restaurant?.length === 0) return <Shimmer />;
  return (
    <>
      <div className=" m-2 p-4">
        <div className="text-center">
          <input
            type="text"
            className="mt-1  px-3 py-2 text-black bg-white border border-slate-300 rounded-md text-md shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
"
            placeholder="search"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button
            data-testid="search-btn"
            className="p-2 m-2 bg-blue-600 rounded-md text-white"
            onClick={() => {
              const data = filterData(text, restaurant);
              setFilterRestaurantData(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex flex-wrap ">
          {filterRestaurantData?.length === 0 ? (
            <FilterShimmer />
          ) : (
            filterRestaurantData?.map((res) => {
              return (
                <Link to={"/restaurants/" + res.data.id} key={res.data.id}>
                  <RestaurantCard {...res.data} />
                </Link>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default BodyComponent;
