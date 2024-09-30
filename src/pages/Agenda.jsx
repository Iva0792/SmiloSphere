import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Navbar from './Navbar';

const localizer = momentLocalizer(moment);

const Agenda = () => {

  const [events, setEvents] = useState([
    {
      title: 'Meeting',
      start: new Date(),
      end: new Date(),
      allDay: true,
    },
  ]);

  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });

  const handleAddEvent = () => {
    setEvents([...events, { ...newEvent, start: new Date(newEvent.start), end: new Date(newEvent.end) }]);
  };

  return (
    <div className="App">
      <Navbar />
      <h1>Agenda</h1>

      <input type="text" placeholder="Add Title" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
      <input type="datetime-local" placeholder="Start Date" value={newEvent.start} onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })} />
      <input type="datetime-local" placeholder="End Date" value={newEvent.end} onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })} />
      <button onClick={handleAddEvent}>Add Event</button>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default Agenda;