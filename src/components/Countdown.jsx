import { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Countdown({inputtedTitle, eventDate, eventTime, eventType, notes}){

  const navigateToForm = useNavigate();

  function handleBackBtn(){
    navigateToForm('/form');
  }

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

  let countdownBackground;

  switch(eventType){
    case 'Holiday':
      countdownBackground = 'linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3)), url(https://images.unsplash.com/photo-1496046744122-2328018d60b6?auto=format&fit=crop&q=80&w=1487&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)';
      break;
    case 'Trip':
      countdownBackground = 'linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3)), url(https://images.unsplash.com/photo-1446768500601-ac47e5ec3719?auto=format&fit=crop&q=80&w=1446&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)';
      break;
    case 'Birthday':
      countdownBackground = 'linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3)), url(https://images.unsplash.com/photo-1559456751-057ed03f3143?auto=format&fit=crop&q=80&w=1501&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)';
      break;
    case 'Christmas':
      countdownBackground = 'linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3)), url(https://images.unsplash.com/photo-1605633561363-87dc6c83fd39?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)';
      break;
    case 'New Years':
      countdownBackground = 'linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3)), url(https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?auto=format&fit=crop&q=80&w=1473&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)';
      break;
    case 'Easter':
      countdownBackground = 'linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3)), url(https://images.unsplash.com/photo-1680876834443-e78bf5c760a9?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)';
      break;
    case 'Wedding':
      countdownBackground = 'linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3)), url(https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)';
      break;
    case 'Baby shower':
      countdownBackground = 'linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3)), url(https://images.unsplash.com/photo-1602863211789-b204f52f6933?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)';
      break;
    case 'Other':
      countdownBackground = 'linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3)), url(https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)';
      break;
    default:
      countdownBackground = 'linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3)), url(https://images.unsplash.com/photo-1623638308715-49498b199bcd?auto=format&fit=crop&q=80&w=1632&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)';
  }

  // COUNTDOWN CLOCK

  const countdownDate = new Date(eventDate + 'T' + eventTime).getTime();

  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [days, setDays] = useState('');
  const [daysLeftText, setDaysLeftText] = useState('');

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance >= 0) {
        const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

        setDays(daysLeft);
        setHours(hoursLeft);
        setMinutes(minutesLeft);
        setSeconds(secondsLeft);

        if (daysLeft === 1) {
          setDaysLeftText('Day Left');
        } else {
          setDaysLeftText('Days Left');
        }
      } else {
        setDaysLeftText('Event passed!');
      }
    };

    const interval = setInterval(updateCountdown, 1000); // updates every second

    return () => {
      clearInterval(interval);
    };
  }, [countdownDate]);


  return(
    <div id="countdown" style={{backgroundImage: `${countdownBackground}`}}>

      <div onClick={handleBackBtn} className='back-btn-countdown'> ↩︎ Create another countdown</div>

      <h1>{titleCapitalised}</h1>
      <h2 className='days-left'>{days} {daysLeftText}</h2>
      <div className='countdown-values'>
        <div className='time'>{hours} <div className='countdown-txt'>Hours</div></div>
        <div className='colon'>:</div>
        <div className='time'>{minutes} <div className='countdown-txt'>Minutes</div></div>
        <div className='colon'>:</div>
        <div className='time'>{seconds} <div className='countdown-txt'>Seconds</div></div>
      </div>

      <h2 className='event-date'>Date: {formattedDate}</h2>
      <h2 className='event-time'>Time of event: {eventTime}</h2>
      <h2 className={eventType.length === 0 ? 'hide-subheader' : 'event-type'}>Event type: {eventType}</h2>
      <p className={notes.length === 0 ? 'hide-subheader' : 'event-notes'}>Notes: {notes}</p> {/* if user did not added any notes, hide this p tag */}





    </div>

  );


}


export default Countdown;
