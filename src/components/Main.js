import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import bannerPix from "../assets/images/restaurantfood.jpg";
import BookingForm from "./BookingForm";

// return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

// const fetchAPI = async (date) => {
//   try {
//     const response = await fetch(
//       `https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js/times?date=${date}`
//     );
//     if (!response.ok) {
//       throw new Error("Failed to fetch available times.");
//     }
//     const data = await response.json();
//     return data.times;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};
const submitAPI = function (formData) {
  return true;
};

const Main = () => {
  const initializeTimes = () => {
    try {
      const today = new Date();
      const availableTimes = fetchAPI(today);
      return availableTimes;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const updateTimes = (date) => {
    try {
      const availableTimes = fetchAPI(date);
      return availableTimes;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    dispatch(today);
  }, []);

  const handleSubmit = (formData) => {
    // Perform actions with the form data, such as making API calls, updating state, etc.
    console.log("Form submitted:", formData);
    // Call the API function to submit the form data
    submitAPI(formData)
      .then((response) => {
        console.log("Form submission successful:", response);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
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
      <BookingForm availableTimes={availableTimes} onSubmit={handleSubmit} />
    </main>
  );
};

export default Main;
