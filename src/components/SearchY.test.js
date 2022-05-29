import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchY from "./SearchY";

it("should not throw an error text on initial load/empty input field", () => {
  render(<SearchY searchInput={""} setInitData={() => {}} />);
  const errorMsgComponent = screen.queryByText(/Turi prasidėti su Y/i);

  expect(errorMsgComponent).not.toBeInTheDocument();
});

it("should throw an error text if the value that is provided is not 'Y'", () => {
  const searchInput = "G";
  render(
    <SearchY searchInput={searchInput.toUpperCase()} setInitData={() => {}} />
  );

  const errorParagraph = screen.getByText(/Turi prasidėti su Y/i);

  expect(errorParagraph).toBeVisible();
});

it("should not throw an error text if the value that is provided is 'Y'", () => {
  const searchInput = "Y";
  render(<SearchY searchInput={searchInput} setInitData={() => {}} />);

  const errorParagraph = screen.queryByText(/Turi prasidėti su Y/i);

  expect(errorParagraph).not.toBeInTheDocument();
});
