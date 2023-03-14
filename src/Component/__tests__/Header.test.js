import Header from "../Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import Footer from "../Footer";
// above package works without browser for testing we use this instead create browserRouter
test("Logo should load on rendering header", () => {
  const head = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  // check
  const logo = head.getAllByTestId("logo");
  expect(logo[0].src).toBe("http://localhost/dummy.png");
});

test("onLine status should be green on rendering header", () => {
  const head = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  // check online status should be green on rendering header
  const onlineStatus = head.getByTestId("online-status");
  console.log(onlineStatus);
  expect(onlineStatus.innerHTML).toBe("✅");
});

test("cart items should be 0 on rendering header", () => {
  const head = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  // cart items should be 0 on rendering header
  const cartItems = head.getByTestId("cart");

  expect(cartItems.innerHTML).toBe("Cart - 0-items");
});

test("Footer is  should be there on rendering header", () => {
  const head = render(
    <StaticRouter>
      <Provider store={store}>
        <Footer />
      </Provider>
    </StaticRouter>
  );
  // Footer is  should be there on rendering header
  const footerPresent = head.getByTestId("footer");

  expect(footerPresent.innerHTML).toBe("ashwathGowda © 2023 Swiggy");
});
