import React, { useState } from "react";

const BookingForm = ({ availableTimes, onSubmit }) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(0);
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create form data object
    const formData = {
      date,
      time,
      guests,
      occasion,
    };
    // Pass form data to the onSubmit function
    onSubmit(formData);
  };

  // console.log("today.getDate(): ", date.getDate());

  return (
    <div className="booking-form">
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", maxWidth: "300px", gap: "20px" }}
      >
        <fieldset>
          <legend>Reservation Form</legend>
          <div className="field">
            <label htmlFor="res-date">Choose Date </label>
            <input
              type="date"
              id="res-date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="res-time">Choose Time </label>
            <select
              id="res-time"
              value={time}
              onChange={(event) => setTime(event.target.value)}
            >
              {/* <option value="">-- Select --</option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))} */}
              {availableTimes && Array.isArray(availableTimes)
                ? availableTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))
                : null}
            </select>
          </div>
          <div className="field">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              value={guests}
              onChange={(event) => setGuests(event.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={occasion}
              onChange={(event) => setOccasion(event.target.value)}
            >
              <option value="">-- Select --</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="option3">Engagement</option>
            </select>
          </div>
          <input type="submit" value="Make Your reservation" />
        </fieldset>
      </form>
    </div>
  );
};

export default BookingForm;
