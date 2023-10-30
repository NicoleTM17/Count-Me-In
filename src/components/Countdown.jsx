import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

function Countdown({inputtedTitle, eventDate, eventTime, eventType, notes}){

  const [daysLeft, setDaysLeft] = useState('');

  Countdown.propTypes = {
    inputtedTitle: PropTypes.string.isRequired,
    eventDate: PropTypes.string.isRequired,
    eventTime: PropTypes.string.isRequired,
    eventType: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
  };

  const titleCapitalised = inputtedTitle.charAt(0).toUpperCase() + inputtedTitle.slice(1);


  const formattedDate = new Date(eventDate).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });


  const daysToGo = useCallback(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dayOfEvent = new Date(formattedDate);
    dayOfEvent.setHours(0, 0, 0, 0);

    const timeDifference = dayOfEvent.getTime() - today.getTime();
    setDaysLeft(Math.ceil(timeDifference / (1000 * 60 * 60 * 24)));
  }, [formattedDate, setDaysLeft]);

  useEffect(() => {
    // Calculate the days left when the component is mounted
    daysToGo();
  }, [daysToGo]);


  return(
    <div id="countdown">

    <h1>{titleCapitalised}</h1>
    <h2>{daysLeft} Days left</h2>
    <div className='countdown-values'>
      <div className='time'>15 <div className='countdown-txt'>Hours</div></div>
      <div className='colon'>:</div>
      <div className='time'>45 <div className='countdown-txt'>Minutes</div></div>
      <div className='colon'>:</div>
      <div className='time'>27 <div className='countdown-txt'>Seconds</div></div>
    </div>

    <h2>Date:{formattedDate}</h2>
    <h2>Time: {eventTime}</h2>
    <h2>Event type: {eventType}</h2>
    <p>Notes: {notes}</p> {/* if user did not added any notes, hide this p tag */}

    {/* Number of days e.g. 108 days to go*/}




    </div>

  );


}


export default Countdown;
