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

describe("initializeTimes", () => {
  it("should return the initial available times", () => {
    const expectedTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    const times = initializeTimes();
    expect(times).toEqual(expectedTimes);
  });
});

describe("updateTimes", () => {
  it("should return the same available times", () => {
    const selectedDate = "2023-07-02";
    const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const updatedTimes = updateTimes(selectedDate);
    expect(updatedTimes).toEqual(state);
  });
});
