import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './styles/App.scss';

import Home from './components/Home.jsx';
import Form from './components/Form.jsx';
import Countdown from './components/Countdown.jsx';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: [
      'Fresca&family',
      'PT+Serif:wght@700&family',
      'Roboto+Mono&display=swap'
    ],
  },
});



function App() {

  const [inputtedTitle, setInputtedTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventType, setEventType] = useState('');
  const [notes, setNotes] = useState('');

  function handleEventTitle(eventTitle){
    setInputtedTitle(eventTitle); // Event title
  }

  function handleEventDate(eventDate){
    setEventDate(eventDate); // currently appears like 2023-10-04
  }

  function handleEventTime(eventTime){
    setEventTime(eventTime);
  }

  function handleEventType(eventType){
    setEventType(eventType);
  }

  function handleNotes(notes){
    setNotes(notes);
  }


  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='form' element={<Form onEventTitle={handleEventTitle} inputtedTitle={inputtedTitle} onEventDate={handleEventDate} eventDate={eventDate} onEventTime={handleEventTime} eventTime={eventTime}  onEventType={handleEventType} eventType={eventType} onNotes={handleNotes} notes={notes}/>}/>
        <Route path='countdown' element={<Countdown inputtedTitle={inputtedTitle} eventDate={eventDate} eventTime={eventTime} eventType={eventType} notes={notes}/>} />
      </Routes>
    </div>
  )
}

export default App;
