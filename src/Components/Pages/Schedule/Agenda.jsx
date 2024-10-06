import styled from 'styled-components';
import '../../../Styles/Global.css'
import MyBigCalendar from './components/MyBigCalendar'
import { useState } from 'react';
import EventModal from './components/modal/EventModal';

import defaultEvents from './components/DefaultEvents';
import AddEvent from './components/add/AddEvent';

function Agenda() {
  const [events, setEvents] = useState(defaultEvents)
  const [eventSelected, setEventSelected] = useState(null)
  
  const CalendarContent = styled.div`
    display: flex;
    gap: 20px;
    background-color: 'rgb(69, 69, 69)';
  `

  const Toolbar = styled.div`
    height: 100vh;
    width: 20%;
    
    background-color: '#262626';
  `

  const moveEvents = (data) => {
    const { start, end } = data;

    const updatedEvent = events.map((event) =>{
      if(event.id == data.event.id){
        return{
          ...event,
          start: new Date(start),
          end: new Date(end)
        }
      } 

      return event
    })

    setEvents( updatedEvent)
  }

  const handleEventClick = (event) => {
    setEventSelected(event)
  }
  const handleEventClose = () => {
    setEventSelected(null)
  }


  const handleAdd = (newEvent) => {
    setEvents([...events, {...newEvent,id:events.length + 1}]);
  }

  const handleDelete = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId)
    setEvents(updatedEvents)
    setEventSelected(null)
  }

  const handleUpdate = (updatedEvent) => {
    const updatedEvents = events.map((event) => {
      if(event.id == updatedEvent.id){
        return updatedEvent
      }
      return event
    })

    setEvents(updatedEvents)
    setEventSelected(null)
  }

  return (
    <>
      <CalendarContent> 
        {eventSelected == null ? (
          <>
            <MyBigCalendar
            events={events}
            moveEvents={moveEvents}
            handleEventClick={handleEventClick}
            handleEventClose={handleEventClose}
            />

          <Toolbar className="toolbar">
            <p>Ferramentas</p>
            <AddEvent
              onAddEvent={handleAdd}
            />
          </Toolbar>
          
          </>
               
          
        ): (
          <p/>
        )} 

        {eventSelected && (
            <EventModal
              event={eventSelected}
              onClose={handleEventClose}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          )}

      
      </CalendarContent>
      
      
    </>
  )
}
  
  export default Agenda