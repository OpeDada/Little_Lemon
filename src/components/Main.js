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
const updateTimes = (selectedDate) => {
  // Replace with your logic to fetch or calculate available times based on the selected date
  // For now, returning the same available times regardless of the date
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const initializeTimes = () => {
  // Replace with your logic to initialize the availableTimes state
  // For now, returning the same available times as the initial state
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
