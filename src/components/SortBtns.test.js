import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

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

it("should call filterMostUsed() when pressed Populiariausi btn", () => {
  render(<SortBtns filterMostUsed={mockFn} data={data} />);

  const btnPopuliariausi = screen.getByText(/Populiariausi/i);
  fireEvent.click(btnPopuliariausi);

  expect(mockFn).toHaveBeenCalledTimes(1);
});

it("should call wholeData() when pressed Visi btn", () => {
  render(<SortBtns wholeData={mockFn} data={data} />);

  const btnVisi = screen.getByText(/Visi/i);
  fireEvent.click(btnVisi);

  expect(mockFn).toHaveBeenCalledTimes(1);
});
