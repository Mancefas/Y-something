import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ReglamentBtns from "./ReglamentBtns";
import { DataContextProvider } from "../context/DataContext";

const initData = [
  { name: "T1", text: "Test" },
  { name: "T2", text: "Test2" },
];

it("should render btn at the start", () => {
  render(
    <DataContextProvider>
      <ReglamentBtns />
    </DataContextProvider>
  );

  const btn1 = screen.getByText(/PAL/i);
  const btn2 = screen.getByText(/PAK/i);

  expect(btn1).toBeVisible();
  expect(btn2).toBeVisible();
});
