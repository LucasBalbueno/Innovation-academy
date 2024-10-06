import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import CalendarContainer from './CalendarContainer';

const localizer = momentLocalizer(moment); 
const DragAndDropCalendar = withDragAndDrop(Calendar)

const MyBigCalendar = ({events,moveEvents, handleEventClick}) => {

  const eventStyle = (event) => ({
    style: { 
      backgroundColor: event.color
    }
  })



  return (
    <CalendarContainer>
      <DragAndDropCalendar
        defaultDate={moment().toDate()}
        defaultView='month'
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onEventDrop={moveEvents}
        onEventResize={moveEvents}
        style={{ height: 600, backgroundColor: "rgb(69, 69, 69)", color: '#FFF'}}
        resizable
        onSelectEvent={handleEventClick}
        eventPropGetter={eventStyle}

      />      
    </CalendarContainer>
  );
};

export default MyBigCalendar;
