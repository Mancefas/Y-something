import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header/Header";

it("should render link BTN at start", () => {
  render(<Header showModal={true} />);

  const btnToPress = screen.queryByText(/Kaip naudotis?/i);

  expect(btnToPress).toBeVisible();
});

it("should not see modal content when the button is not pressed", () => {
  render(<Header showModal={true} />);

  const modalDiv = screen.queryByTestId("modal");

  expect(modalDiv.textContent).toBe("");
});

it("should show some context in modal div when pressed link BTN ", () => {
  render(<Header />);

  const btnToPress = screen.queryByText(/Kaip naudotis?/i);
  const modalDiv = screen.queryByTestId("modal");

  fireEvent.click(btnToPress);

  expect(modalDiv.textContent).not.toBe("");
});
