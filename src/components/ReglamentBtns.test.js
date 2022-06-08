import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ReglamentBtns from "./ReglamentBtns";

const initData = [
  { name: "T1", text: "Test" },
  { name: "T2", text: "Test2" },
];

it("should render btn at the start", () => {
  render(<ReglamentBtns initData={initData} />);

  const btn1 = screen.getByText(/T1/i);
  const btn2 = screen.getByText(/T2/i);

  expect(btn1).toBeVisible();
  expect(btn2).toBeVisible();
});
