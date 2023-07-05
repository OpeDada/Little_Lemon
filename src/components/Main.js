import React, { useReducer, useEffect } from "react";
import { Link, useNavigate, Routes, Route } from "react-router-dom";
import bannerPix from "../assets/images/restaurantfood.jpg";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";

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

// const seededRandom = function (seed) {
//   var m = 2 ** 35 - 31;
//   var a = 185852;
//   var s = seed % m;
//   return function () {
//     return (s = (s * a) % m) / m;
//   };
// };

// const fetchAPI = function (date) {
//   let result = [];
//   let random = seededRandom(date.getDate());

//   for (let i = 17; i <= 23; i++) {
//     if (random() < 0.5) {
//       result.push(i + ":00");
//     }
//     if (random() < 0.5) {
//       result.push(i + ":30");
//     }
//   }
//   return result;
// };
// const submitAPI = function (formData) {
//   return true;
// };

// export const initializeTimes = () => {
//   try {
//     const today = new Date();
//     const availableTimes = fetchAPI(today);
//     return availableTimes;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

// export const updateTimes = (date) => {
//   try {
//     const availableTimes = fetchAPI(date);
//     return availableTimes;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

async function fetchAPI(date) {
  // Fetch the available booking times for the given date
  const response = await fetch(
    `https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js?date=${date}`
  );
  const data = await response.json();
  return data;
}

async function submitAPI(formData) {
  // Submit the form data to the API
  const response = await fetch(
    "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js",
    {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
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

  function handleSubmit(formData) {
    submitAPI(formData)
      .then((response) => {
        if (response) {
          navigate("/confirmed");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
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
      {/* <Routes>
        <Route
          path="/booking-page"
          render={() => (
            <BookingForm
              availableTimes={availableTimes}
              onSubmit={submitForm}
            />
          )}
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes> */}
      <BookingForm availableTimes={availableTimes} onSubmit={handleSubmit} />
    </main>
  );
};

export default Main;
