import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "../App";
import SortBtns from "./SortBtns";

const data = [
  { name: "T1", text: "Test" },
  { name: "T2", text: "Test2" },
];

const mockFn = jest.fn();

it("should render btns", () => {
  render(<SortBtns />);

  const btnPopuliariausi = screen.getByText(/Populiariausi/i);
  const btnVisi = screen.getByText(/Visi/i);

  expect(btnPopuliariausi).toBeVisible();
  expect(btnVisi).toBeVisible();
});

it("should not render unpopular btns after pressing Populiariausi btn", () => {
  render(<App />);

  const btnPopuliariausi = screen.getByText(/Populiariausi/i);
  fireEvent.click(btnPopuliariausi);

  const unpopularBtn = screen.queryByText(/Y912/i);
  expect(unpopularBtn).toBeNull();
});

it("should render all btns (even unpopular) after pressing Visi btn", () => {
  render(<App />);

  const btnPopuliariausi = screen.getByText(/Visi/i);
  fireEvent.click(btnPopuliariausi);

  const unpopularBtn = screen.queryByText(/Y912/i);
  expect(unpopularBtn).toBeVisible();
});

// it("should call filterMostUsed() when pressed Populiariausi btn", () => {
//   render(<SortBtns filterMostUsed={mockFn} data={data} />);

//   const btnPopuliariausi = screen.getByText(/Populiariausi/i);
//   fireEvent.click(btnPopuliariausi);

//   expect(mockFn).toHaveBeenCalledTimes(1);
// });

// it("should call wholeData() when pressed Visi btn", () => {
//   render(<SortBtns wholeData={mockFn} data={data} />);

//   const btnVisi = screen.getByText(/Visi/i);
//   fireEvent.click(btnVisi);

//   expect(mockFn).toHaveBeenCalledTimes(1);
// });
