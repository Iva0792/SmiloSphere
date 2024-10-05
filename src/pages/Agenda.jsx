import "./Panel.css";
import "./Agenda.css";
import 'react-big-calendar/lib/css/react-big-calendar.css';

import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es.js';
import { isSameDay } from 'date-fns'
import Navbar from './Navbar';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';

moment.locale('es');
const localizer = momentLocalizer(moment);

let formats = {
  timeGutterFormat: 'HH:mm',
  dayFormat: 'dddd DD/MM',
  monthHeaderFormat: 'MMMM YYYY',
  weekdayFormat: 'dddd',
}

const Agenda = () => {

  const [events, setEvents] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newStart, setNewStart] = useState(new Date());
  const [newEnd, setNewEnd] = useState(new Date());

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt("Nombre del nuevo evento");
    if (title) {
      setEvents([
        ...events, {
          id: Date.now(),
          start, end, title
        }
      ]);
    }
  };

  const handleSelectEvent = event => {
    setCurrentEvent(event);
    setNewTitle(event.title);
    setNewStart(event.start);
    setNewEnd(event.end);
    setModalIsOpen(true);
  };

  const handleEditEvent = () => {
    setEvents(events.map(e =>
      e.id === currentEvent.id
        ? { ...e, title: newTitle, start: newStart, end: newEnd }
        : e
    ));
    setModalIsOpen(false);
  };

  const handleDeleteEvent = () => {
    setEvents(events.filter(e => e.id !== currentEvent.id));
    setModalIsOpen(false);
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    let backgroundColor;

    const today = new Date();

    if (isSameDay(event.start, today)) {
      backgroundColor = 'orange'; // Color for today's events
    } else {
      // Customize the color based on event title or type
      switch (event.title) {
        case 'Important':
          backgroundColor = 'red';
          break;
        case 'Meeting':
          backgroundColor = 'blue';
          break;
        case 'Birthday':
          backgroundColor = 'green';
          break;
        default:
          backgroundColor = '#3174ad';
      }
    }

    return {
      style: {
        backgroundColor,
        borderRadius: '5px',
        opacity: 0.8,
        color: 'white',
        border: '0px',
        display: 'block',
      }
    }
  };

  return (

    <div>
      <Navbar />
      <div className="contenedor">
        <div className="boxPanel">
          <Calendar
            localizer={localizer}
            events={events}
            messages={{
              next: "Siguiente",
              previous: "Anterior",
              today: "Hoy",
              month: "Mes",
              week: "Semana",
              day: "Día",
              agenda: "Agenda",
              date: "Fecha",
              time: "Hora",
              event: "Evento",
              allDay: "Todo el día",
              noEventsInRange: "No hay eventos agendados"
            }}
            defaultView="week"
            selectable={true}
            showMultiDayTimes={false}
            onSelectSlot={handleSelectSlot}
            onSelectEvent={handleSelectEvent}
            className="calendar"
            step={30}
            timeslots={1}
            eventPropGetter={eventStyleGetter}
            formats={formats}
          />
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Editar Evento"
      >
        <h2>Editar Evento</h2>
        <label>Título:</label>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />

        <label>Fecha de inicio:</label>
        <DatePicker
          selected={newStart}
          onChange={(date) => setNewStart(date)}
          showTimeSelect
          dateFormat="Pp"
        />

        <label>Fecha de fin:</label>
        <DatePicker
          selected={newEnd}
          onChange={(date) => setNewEnd(date)}
          showTimeSelect
          dateFormat="Pp"
        />

        <div style={{ marginTop: "20px" }}>
          <button onClick={handleEditEvent}>Guardar cambios</button>
          <button onClick={() => setModalIsOpen(false)}>Cancelar</button>
          <button onClick={handleDeleteEvent} style={{ backgroundColor: 'red', color: 'white' }}>
            Eliminar Evento
          </button>
        </div>
      </Modal>

    </div>
  );
};

export default Agenda;