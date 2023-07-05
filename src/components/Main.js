import React, { useReducer, useEffect } from "react";
import { Link, useNavigate, Routes, Route } from "react-router-dom";
import bannerPix from "../assets/images/restaurantfood.jpg";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";

// return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];


async function fetchAPI(date) {
  // Fetch the available booking times for the given date
  try {
    const response = await fetch(`https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js?date=${date}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching available times:', error);
  }
}

async function submitAPI(formData) {
  // Submit the form data to the API
  try {
    const response = await fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error submitting form:', error);
}
}

const Main = () => {
  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  useEffect(() => {
    // Fetch available times on component mount
    initializeTimes();

    // Clean up function to cancel any ongoing API requests
    return () => {
      // Optional: You can cancel any ongoing API requests or perform any necessary cleanup here.
    };
  }, []);

  async function initializeTimes() {
    const today = new Date();
    try {
      const response = await fetchAPI(today);
      dispatch({ type: "SET_TIMES", payload: response });
    } catch (error) {
      console.error("Error fetching available times:", error);
    }
  }

  function updateTimes(state, action) {
    switch (action.type) {
      case "SET_TIMES":
        return action.payload;
      default:
        return state;
    }
  }

  async function handleSubmit(formData) {
    try {
      const response = await submitAPI(formData);
        console.log("response ", response);
      if (response) {
        navigate("/confirmed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

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
      <Routes>
        <Route
          path="/booking-page"
          render={() => (
            <BookingForm
              availableTimes={availableTimes}
              onSubmit={handleSubmit}
            />
          )}
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      {/* <BookingForm availableTimes={availableTimes} onSubmit={handleSubmit} /> */}
    </main>
  );
};

export default Main;
