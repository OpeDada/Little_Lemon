
const BookingForm = () => {
  return (
    <div className="booking-form">
      <form>
        <fieldset>
          <legend>Reservation Form</legend>
          <div className="field">
            <label>Date </label>
            <input
              type="date"
              placeholder=""
              name=""
              // value={}
              // onChange={}
            />
          </div>
          <div className="field">
            <label>Time </label>
            <input
              type="time"
              placeholder=""
              name=""
              // value={}
              // onChange={}
            />
          </div>
          <div className="field">
            <label>Number of guests </label>
            <input
              type="text"
              placeholder=""
              name=""
              // value={}
              // onChange={}
            />
          </div>
          <div className="field">
            <label>Occasion </label>
            <select>
              <option value="">-- Select --</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="option3">Engagement</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}


export default BookingForm
