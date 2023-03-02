import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurantMenu = (id) => {
  const [restaurantMenuResponse, setRestaurantMenuResponse] = useState(null);
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const resMenu = await fetch(FETCH_MENU_URL + id);
    const menu = await resMenu.json();
    setRestaurantMenuResponse(menu?.data);
  }

  return [restaurantMenuResponse];
};

export default useRestaurantMenu;
