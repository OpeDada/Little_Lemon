import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import bannerPix from "../assets/images/restaurantfood.jpg";
import BookingForm from "./BookingForm";

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case "SET_AVAILABLE_TIMES":
      return action.payload;
    default:
      return state;
  }
};

// Function to update availableTimes based on the selected date
export const updateTimes = (selectedDate) => {

  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const initializeTimes = () => {

  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export default function Main() {
  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    [],
    initializeTimes
  );

  const handleDateChange = (selectedDate) => {
    const updatedTimes = updateTimes(selectedDate);
    dispatch({ type: "SET_AVAILABLE_TIMES", payload: updatedTimes });
  };

  return (
    <main>
      <section className="hero">
        <div>
          <h1>Little Lemon</h1>
          <h4>Chicago</h4>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button>
            <Link to="/booking-page">Reserve a Table</Link>
          </button>
        </div>
        <img src={bannerPix} alt="restaurant pix"></img>
      </section>
      <BookingForm
        availableTimes={availableTimes}
        onDateChange={handleDateChange}
      />
    </main>
  );
}
