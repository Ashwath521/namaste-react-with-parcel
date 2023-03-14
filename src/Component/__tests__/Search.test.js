import Body from "../Body";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "./data";

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
  console.log(body);
  const search = body.getByTestId("search-btn");
  console.log(search);
});
