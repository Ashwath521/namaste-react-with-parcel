import ReactDOM from "react-dom";
import HeaderComponent from "./Component/Header";
import BodyComponent from "./Component/Body";
import FooterComponent from "./Component/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Component/About.js";
import ErrorPage from "./Component/ErrorPage.js";
import Contact from "./Component/Contact.js";
import RestaurantMenu from "./Component/RestaurantMenu";
import ProfileClass from "./Component/ProfileClass";
import { lazy, Suspense, useState } from "react";
const InstMart = lazy(() => import("./Component/InstMart"));
import { createContext } from "react";
import { Provider } from "react-redux";
import store from "./utils/store";
import CartItems from "./Component/cartItems";

export const UserContext = createContext();
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "ashwathmn",
    email: "ashwathmn96@gmail.com",
  });

  console.log(setUser);

  return (
    <>
      <Provider store={store}>
        <UserContext.Provider
          value={{
            user: user,
          }}
        >
          <HeaderComponent />
          <Outlet />
          <FooterComponent />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <ProfileClass name="aschu" />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instmart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <InstMart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <CartItems />,
      },
    ],
  },
]);

document.addEventListener("DOMContentLoaded", function (event) {
  const root = document.getElementById("root");
  if (root) {
    ReactDOM.render(<RouterProvider router={appRouter} />, root);
  } else {
    console.error("Target container is not a DOM element");
  }
});
