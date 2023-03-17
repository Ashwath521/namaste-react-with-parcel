import Body from "../Body";
import {
  render,
  waitFor,
  firingEvent,
  fireEvent,
} from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    // RESTAURANT_DATA is a actual api data we need to create
    // one spreate file we need to store that data
    // we paased in the mock fetch api resolve result
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Search result on homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  // console.log(body);
  // const search = body.getByTestId("search-btn");
  // console.log(search);
});

test("Shimmer should load on homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  console.log(body);
  const shimmer = body.getByTestId("shimmer");
  // expect(shimmer).toBeInTheDocument();
  expect(shimmer.children.length).toBe(10);
  console.log(shimmer);
});
// checking the body inside Restaurants card data coming or not
test("Restaurants should load on homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("search-btn")));
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(15);
  console.log(shimmer);
});

test("Restaurants should load on homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("search-btn")));
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(15);
  console.log(shimmer);
});

test("Search for string (food) load on homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("search-btn")));
  // this is used for checking onChange events in your application
  // jest librarey gives us package fire event function inside
  // function we can pass some value it will automatically based
  // on that value we can any string value
  const input = body.getByTestId("search-input");
  fireEvent.change(input, {
    target: {
      value: "food",
    },
  });
  const searchBtn = body.getByTestId("search-btn");
  // it triggers the onclick event
  fireEvent.click(searchBtn);
  const resList = body.getByTestId("res-list");
  expect(resList.children).toBe(15);
  console.log(shimmer);
});

// Note fireevent used for trigger any event in
// javascript
