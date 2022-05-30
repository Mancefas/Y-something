import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchY from "./SearchY";

const mockFn = jest.fn();

it("should not throw an error text on initial load/empty input field", () => {
  render(<SearchY searchInput={""} setInitData={mockFn} />);
  const errorMsgComponent = screen.queryByText(/Turi prasidėti su Y/i);

  expect(errorMsgComponent).not.toBeInTheDocument();
});

it("should throw an error text if the value that is provided is not 'Y'", () => {
  const searchInput = "G";
  render(<SearchY setInitData={mockFn} />);

  const inputField = screen.getByPlaceholderText(/🔍Ieškoti/i);
  fireEvent.change(inputField, { target: { value: searchInput } });

  const errorParagraph = screen.getByText(/Turi prasidėti su Y/i);

  expect(errorParagraph).toBeVisible();
});

it("should not throw an error text if the value that is provided is 'Y'", () => {
  const searchInput = "Y";
  render(<SearchY setInitData={mockFn} />);

  const inputField = screen.getByPlaceholderText(/🔍Ieškoti/i);
  fireEvent.change(inputField, { target: { value: searchInput } });

  const errorParagraph = screen.queryByText(/Turi prasidėti su Y/i);

  expect(errorParagraph).not.toBeInTheDocument();
});

it("should change value in input when you type", () => {
  render(<SearchY setInitData={mockFn} />);

  const inputField = screen.getByPlaceholderText(/🔍Ieškoti/i);
  fireEvent.change(inputField, { target: { value: "y90" } });

  expect(inputField.value).toBe("y90".toUpperCase());
});
