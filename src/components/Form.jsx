

function Form(){

  return(
    <div id="form">
      <h1>Create an event countdown</h1>
      <form className="event-form" action="#">

        {/* EVENT TITLE */}
        <label htmlFor="eventTitle">Event title:*</label><br/>
        <input type="text" placeholder="Trip to Tokyo" required /><br/>

        {/* EVENT DATE */}
        <label htmlFor="eventDate">Event date:*</label><br/>
        <input type="date" required /><br/>

        {/* EVENT TIME */}
        <label htmlFor="eventTime">Event time:*</label><br/>
        <input type="time" required /><br/>

        {/* NOTES */}
        <label htmlFor="notes">Notes:</label><br/>
        <textarea name="notes" id="event-notes" cols="30" rows="5" placeholder="Enter text here"></textarea>

      </form>
    </div>
  );


}

export default Form;
