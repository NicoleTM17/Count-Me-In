import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Form({onEventTitle, inputtedTitle, onEventDate, eventDate, onEventTime, eventTime, onEventType, eventType, onNotes, notes}){
  const navigate = useNavigate();

  function handleSubmit(event){
    event.preventDefault();
    // window.location.href = '/countdown';
    navigate('/countdown');
  }

  Form.propTypes = {
    onEventTitle: PropTypes.func.isRequired,
    inputtedTitle: PropTypes.string.isRequired,
    onEventDate: PropTypes.func.isRequired,
    eventDate: PropTypes.string.isRequired,
    onEventTime: PropTypes.func.isRequired,
    eventTime: PropTypes.string.isRequired,
    onEventType: PropTypes.func.isRequired,
    eventType: PropTypes.string.isRequired,
    onNotes: PropTypes.func.isRequired,
    notes: PropTypes.string.isRequired,
  };

  function handleEventTitle(event){
    onEventTitle(event.target.value); // Event title
  }

  function handleEventDate(event){
    onEventDate(event.target.value); // Event date
  }

  function handleEventTime(event){
    onEventTime(event.target.value); // Event time
  }

  function handleEventType(event){
    onEventType(event.target.value); // Event type
  }

  function handleNotes(event){
    onNotes(event.target.value); // Notes
  }


  return(
    <div onSubmit={handleSubmit} id="form">
      <div className="form-content">
        <h1>Create An Event Countdown</h1>
        <form className="event-form" action="#">

          {/* EVENT TITLE */}
          <label htmlFor="eventTitle">Event title:<span style={{fontSize: 'x-small'}}>*</span></label><br/>
          <input onChange={handleEventTitle} type="text" value={inputtedTitle} placeholder="Trip to Tokyo" required /><br/>

          <div className="date-time">
            {/* EVENT DATE */}
            <div>
              <label htmlFor="eventDate">Event date:<span style={{fontSize: 'x-small'}}>*</span></label><br/>
              <input onChange={handleEventDate} type="date" value={eventDate} required /><br/>
            </div>

            {/* EVENT TIME */}
            <div>
              <label htmlFor="eventTime">Event time:<span style={{fontSize: 'x-small'}}>*</span></label><br/>
              <input onChange={handleEventTime} type="time" value={eventTime} required /><br/>
            </div>
          </div>

          <label htmlFor="eventType">Event type:<span style={{fontSize: 'x-small'}}>*</span></label><br/>
          <select onChange={handleEventType} value={eventType} name="event-type" id="event-type">
            <option value="">Select an event type</option>
            <option value="Holiday">Holiday / Vacation</option>
            <option value="Trip">Short trip</option>
            <option value="Birthday">Birthday</option>
            <option value="Christmas">Christmas</option>
            <option value="New Years">New Years</option>
            <option value="Easter">Easter</option>
            <option value="Wedding">Wedding</option>
            <option value="Baby shower">Baby shower</option>
            <option value="Other">Other event</option>
          </select><br/>

          {/* NOTES */}
          <label htmlFor="notes">Add note:</label><br/>
          <textarea onChange={handleNotes} value={notes} name="notes" id="event-notes" cols="35" rows="5" placeholder="Enter text here"></textarea><br/>

          <button className="event-btn">Generate</button>
        </form>

      </div>
    </div>
  );


}

export default Form;
