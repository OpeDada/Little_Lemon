import React, { useState } from "react";

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(0);
  const [occasion, setOccasion] = useState("");

  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const handleSubmit = (event) => {
    event.preventDefault();
  };

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
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="res-time">Choose Time </label>
            <select
              id="res-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              <option value="">-- Select --</option>
              {availableTimes.map((availableTime) => (
                <option key={availableTime} value={availableTime}>
                  {availableTime}
                </option>
              ))}
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
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
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
