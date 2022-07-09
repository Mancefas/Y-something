import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchY from "./SearchY";
import App from "../App";
import { DataContextProvider } from "../context/DataContext";

const mockFn = jest.fn();

it("should not throw an error text on initial load/empty input field", () => {
  render(
    <DataContextProvider>
      <SearchY searchInput={""} setInitData={mockFn} />
    </DataContextProvider>
  );
  const errorMsgComponent = screen.queryByText(/Turi prasidėti su Y/i);

  expect(errorMsgComponent).not.toBeInTheDocument();
});

it("should throw an error text if the value that is provided is not 'Y'", () => {
  const searchInput = "G";
  render(
    <DataContextProvider>
      <SearchY searchInput={""} setInitData={mockFn} />
    </DataContextProvider>
  );

  const inputField = screen.getByPlaceholderText(/🔍Ieškoti/i);
  fireEvent.change(inputField, { target: { value: searchInput } });

  const errorParagraph = screen.getByText(/Turi prasidėti su Y/i);

  expect(errorParagraph).toBeVisible();
});

it("should not throw an error text if the value that is provided is 'Y'", () => {
  const searchInput = "Y";
  render(
    <DataContextProvider>
      <SearchY searchInput={""} setInitData={mockFn} />
    </DataContextProvider>
  );

  const inputField = screen.getByPlaceholderText(/🔍Ieškoti/i);
  fireEvent.change(inputField, { target: { value: searchInput } });

  const errorParagraph = screen.queryByText(/Turi prasidėti su Y/i);

  expect(errorParagraph).not.toBeInTheDocument();
});

it("should change value in input when you type", () => {
  render(
    <DataContextProvider>
      <SearchY searchInput={""} setInitData={mockFn} />
    </DataContextProvider>
  );

  const inputField = screen.getByPlaceholderText(/🔍Ieškoti/i);
  fireEvent.change(inputField, { target: { value: "y90" } });

  expect(inputField.value).toBe("y90".toUpperCase());
});

it("should not show a different button than what was searched for", () => {
  render(
    <DataContextProvider>
      <App />
    </DataContextProvider>
  );

  const inputField = screen.getByPlaceholderText(/🔍Ieškoti/i);
  const differentBtnThenSearchImput = screen.queryByText(/Y902/i);

  fireEvent.change(inputField, { target: { value: "y901" } });

  expect(differentBtnThenSearchImput).not.toBeVisible();
});
