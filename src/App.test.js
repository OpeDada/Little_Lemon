import { render, screen } from "@testing-library/react";
// import App from "./App";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./components/Main";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Reservation Form");
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes returns a non-empty array of available booking times", () => {
  const result = initializeTimes();
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});


test("updateTimes returns the same value as provided in the state", () => {
  const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const selectedDate = new Date();
  const dispatchData = { selectedDate };
  const result = updateTimes(state, dispatchData);
  expect(result).toEqual(state);
});
