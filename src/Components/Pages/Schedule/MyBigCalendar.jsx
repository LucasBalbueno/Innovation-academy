import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment); // Usando Moment.js para lidar com as datas

const MyBigCalendar = ({events}) => {
  

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events} // Lista de eventos
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, backgroundColor: "#FFF" }} // Altura do calendário
      />
    </div>
  );
};

export default MyBigCalendar;
