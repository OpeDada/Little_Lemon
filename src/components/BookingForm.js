import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  date: Yup.string().required("Date is required"),
  time: Yup.string().required("Time is required"),
  guests: Yup.number()
    .required("Number of guests is required")
    .min(1, "Number of guests must be at least 1"),
  occasion: Yup.string().required("Occasion is required"),
});

const BookingForm = ({ availableTimes, onSubmit }) => {
  // const [date, setDate] = useState("");
  // const [time, setTime] = useState("");
  // const [guests, setGuests] = useState(0);
  // const [occasion, setOccasion] = useState("");

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  function handleSubmit(values) {
    setIsFormSubmitted(true);
    onSubmit(values);
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Perform form validation before submitting
  //   if (event.target.checkValidity()) {
  //     const formData = {
  //       date,
  //       time,
  //       guests,
  //       occasion,
  //     };
  //     onSubmit(formData);
  //   } else {
  //     event.target.reportValidity();
  //   }
  // };

  // console.log("today.getDate(): ", date.getDate());

  return (
    <div>
      <h2>Reservation Form</h2>
      <Formik
        initialValues={{ date: "", time: "", guests: "", occasion: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="date">Date:</label>
            <Field type="date" id="date" name="date" required />
            <ErrorMessage name="date" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="time">Time:</label>
            <Field as="select" id="time" name="time" required>
              <option value="">Select Time</option>
              {availableTimes &&
                availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              {/* {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))} */}
              <option>2:00</option>
            </Field>
            <ErrorMessage name="time" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="guests">Number of Guests:</label>
            <Field
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="10"
              required
            />
            <ErrorMessage name="guests" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="occasion">Occasion:</label>
            <Field as="select" id="occasion" name="occasion" required>
              <option value="">Select Occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Engagement">Engagement</option>
            </Field>
            <ErrorMessage name="occasion" component="div" className="error" />
          </div>

          <button
            type="submit"
            disabled={isFormSubmitted}
            aria-label="On Click"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
