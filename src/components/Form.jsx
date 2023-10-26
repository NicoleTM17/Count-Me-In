

function Form(){

  return(
    <div id="form-content">
      <div className="form">
        <h1>Create an event countdown</h1>
        <form className="event-form" action="#">

          {/* EVENT TITLE */}
          <label htmlFor="eventTitle">Event title:*</label><br/>
          <input type="text" placeholder="Trip to Tokyo" required /><br/>

          <div className="date-time">
            {/* EVENT DATE */}
            <div>
              <label htmlFor="eventDate">Event date:*</label><br/>
              <input type="date" required /><br/>
            </div>

            {/* EVENT TIME */}
            <div>
              <label htmlFor="eventTime">Event time:*</label><br/>
              <input type="time" required /><br/>
            </div>
          </div>

          <label htmlFor="eventType">Event type:*</label><br/>
          <select name="event-type" id="event-type">
            <option value="" selected>Select an event type</option>
            <option value="holiday">Holiday / Vacation</option>
            <option value="trip">Short trip</option>
            <option value="birthday">Birthday</option>
            <option value="christmas">Christmas</option>
            <option value="new-years">New Years</option>
            <option value="easter">Easter</option>
            <option value="wedding">Wedding</option>
            <option value="baby-shower">Baby shower</option>
            <option value="other">Other event</option>
          </select><br/>

          {/* NOTES */}
          <label htmlFor="notes">Add note:</label><br/>
          <textarea name="notes" id="event-notes" cols="35" rows="5" placeholder="Enter text here"></textarea><br/>

          <button className="event-btn">Generate</button>
        </form>

      </div>
    </div>
  );


}

export default Form;
