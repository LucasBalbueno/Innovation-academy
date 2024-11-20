  import styled from 'styled-components';
  import '../../../Styles/Global.css'
  import MyBigCalendar from './components/MyBigCalendar'
  import { useEffect, useState } from 'react';
  import EventModal from './components/modal/EventModal';

  import Swal from 'sweetalert2';

  import Events from '../Events/Events' 
  import axios from 'axios';
import defaultEvents from './components/DefaultEvents';

  function Agenda() {
    const [events, setEvents] = useState([])
    const [eventsCalendar, setEventsCalendar] = useState([])
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

    const fetchEvents = async () => {
      try {
          Swal.fire({
              title: 'Carregando eventos...',
              allowOutsideClick: false,
              didOpen: () => {
                  Swal.showLoading();
              },
          });

          const response = await axios.get('http://localhost:8080/api/events');

          Swal.close();


          setEvents(response.data);
          console.log(response.data);
      } catch (error) {
          Swal.close();

          Swal.fire({
              icon: 'error',
              title: 'Erro ao carregar eventos',
              text: 'Ocorreu um erro ao buscar os eventos. Tente novamente mais tarde.',
          });
          console.error('Erro ao buscar eventos:', error);
      }
  };

    useEffect(()=> {
      fetchEvents()
    },[])

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

    const changeIsoDate = (isoDate) => {
      const dateObj = new Date(isoDate);
      const year = dateObj.getUTCFullYear(); // Ano
      const month = dateObj.getUTCMonth();  // Mês (0-11)
      const day = dateObj.getUTCDate();     // Dia
      const hours = dateObj.getUTCHours();  // Horas
      const minutes = dateObj.getUTCMinutes(); // Minutos

      const date = new Date(year,month,day, hours,minutes);
      return date;
    }

    const removeEventCalendar = (eventCalendar) => {
      console.log(eventCalendar)
      handleEventClose()
      setEventsCalendar(eventsCalendar.filter(event => event.id !== eventCalendar.id));
    } 

    const handleAdd = (newEvent) => {

      const formattedDateStart = changeIsoDate(newEvent.eventDateStart);
      const formattedDateEnd = changeIsoDate(newEvent.eventDateEnd);

      const newEventCalendar = {
        id: newEvent.eventId,
        title: newEvent.eventName,
        description: newEvent.eventDescription,
        start: formattedDateStart, 
        end: formattedDateEnd,   
        color: 'lightcoral' 
      }
      console.log(newEventCalendar)
      console.log(defaultEvents[0])
      setEventsCalendar([...eventsCalendar, {...newEventCalendar,id:events.length + 1}]);
    }

    return (
      <>
        <Events onAddToCalendar={handleAdd} events={events} />
        <CalendarContent> 
            
              <MyBigCalendar
              events={eventsCalendar}
              moveEvents={moveEvents}
              handleEventClick={handleEventClick}
              handleEventClose={handleEventClose}
            />         
                  
          {eventSelected && (
              <EventModal
                event={eventSelected}
                onClose={handleEventClose}
                removeEvent={removeEventCalendar}
              />
            )}

        
        </CalendarContent>
      </>
    )
  }
    
    export default Agenda