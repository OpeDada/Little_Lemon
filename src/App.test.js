import { render, screen, fireEvent } from "@testing-library/react";
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

// test("initializeTimes returns a non-empty array of available booking times", () => {
//   const result = initializeTimes();
//   expect(Array.isArray(result)).toBe(true);
//   expect(result.length).toBeGreaterThan(0);
// });

// test("updateTimes returns the same value as provided in the state", () => {
//   const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
//   const selectedDate = new Date();
//   const dispatchData = { selectedDate };
//   const result = updateTimes(state, dispatchData);
//   expect(result).toEqual(state);
// });

describe("BookingForm", () => {
  it("renders the form with HTML5 validation attributes", () => {
    render(<BookingForm />);

    const dateInput = screen.getByLabelText("Date:");
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toBeRequired();

    const timeSelect = screen.getByLabelText("Time:");
    expect(timeSelect).toHaveAttribute("required");
    // Add more assertions for the specific HTML5 validation attributes applied to the time select field

    const guestsInput = screen.getByLabelText("Number of Guests:");
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toBeRequired();

    const occasionSelect = screen.getByLabelText("Occasion:");
    expect(occasionSelect).toHaveAttribute("required");
    // Add more assertions for the specific HTML5 validation attributes applied to the occasion select field
  });

  it("validates the form fields correctly", () => {
    render(<BookingForm />);
    const submitButton = screen.getByText("Submit");

    // Get the form input fields
    const dateInput = screen.getByLabelText("Date:");
    const timeSelect = screen.getByLabelText("Time:");
    const guestsInput = screen.getByLabelText("Number of Guests:");
    const occasionSelect = screen.getByLabelText("Occasion:");

    // Test valid input values
    fireEvent.change(dateInput, { target: { value: "2022-12-25" } });
    fireEvent.change(timeSelect, { target: { value: "12:00 PM" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

    fireEvent.click(submitButton);

    // Assert that the form submission was successful
    // Add your own assertion here based on the behavior of your form

    // Test invalid input values
    fireEvent.change(dateInput, { target: { value: "" } });
    fireEvent.change(timeSelect, { target: { value: "" } });
    fireEvent.change(guestsInput, { target: { value: "0" } });
    fireEvent.change(occasionSelect, { target: { value: "" } });

    fireEvent.click(submitButton);

    // Assert that the form submission failed
    // Add your own assertion here based on the behavior of your form
  });
});
