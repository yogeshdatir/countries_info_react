import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "../../App";
import store from "../../redux/store";

describe("Searchbar Component", () => {
  test("rendered", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    const SearchComponent = screen.getByTestId(/searchbar/i);
    expect(SearchComponent).toBeInTheDocument();
  });

  test("user should be able to search", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    const SearchComponent = screen.getByTestId(/searchbar/i);
    expect(SearchComponent).toBeInTheDocument();

    const input = screen.getByPlaceholderText(/Search for a country…/i);
    expect(input).toBeInTheDocument();

    userEvent.type(input, "america");
    expect(input).toHaveValue("america");
    await waitFor(
      () => expect(screen.getByTestId("countryCard-United States")),
      {
        timeout: 1000,
      }
    );
  });
});
