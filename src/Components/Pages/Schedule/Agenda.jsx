  import styled from 'styled-components';
  import '../../../Styles/Global.css'
  import MyBigCalendar from './components/MyBigCalendar'
  import { useContext, useEffect, useState } from 'react';
  import EventModal from './components/modal/EventModal';

  import Swal from 'sweetalert2';

  import Events from '../Events/Events' 
  import axios from 'axios';
import defaultEvents from './components/DefaultEvents';
import { UserContext } from '../../../Context/UserContext';
import Footer from "../../Layout/Footer";

  function Agenda() {
    const [events, setEvents] = useState([])
    const [eventsCalendar, setEventsCalendar] = useState([])
    const [eventSelected, setEventSelected] = useState(null)
    const { user} = useContext(UserContext)
    const [countAdd, setCount]  = useState(0)
    
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
    const createScheduler = async ()=> {
      try{
        const response = await axios.post("http://localhost:8080/api/schedulers",{
          idUser: user.userId
        })

        console.log(response.data)
        if(response.data == ""|| response.data == null){
          console.log("A agenda ja foi criada")
        }
      }catch(error){
        console.log(error)
      }
    }

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
      if(user != null){
        fetchEvents()
        createScheduler()
        changeFormattedEventsInScheduler()

      }
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
      handleEventClose()
      setEventsCalendar(eventsCalendar.filter(event => event.id !== eventCalendar.id));
    } 

    const getEventsForScheduler = async() => {
      const idUser = user.userId
      try{
        const response = await axios.get(`http://localhost:8080/api/schedulers/getEventsScheduler/${idUser}`);
        
        return response.data;         
      }catch(error){
        console.log(error);
      }


    } 

    const changeFormattedEventsInScheduler = async () => {
      const listEventsInScheduler = await getEventsForScheduler();

      for (let i = 0; i < listEventsInScheduler.length; i++) {
        const formattedDateStart = changeIsoDate(listEventsInScheduler[i].eventDateStart);
        const formattedDateEnd = changeIsoDate(listEventsInScheduler[i].eventDateEnd);

        const eventCalendar = {
          id: listEventsInScheduler[i].eventId,
          title: listEventsInScheduler[i].eventName,
          description: listEventsInScheduler[i].eventDescription,
          start: formattedDateStart, 
          end: formattedDateEnd,   
          color: 'lightcoral' 
        }

        
        setEventsCalendar([...eventsCalendar, eventCalendar]);

      }
    }

    const addEventToScheduler = async(event) => {
   

      for (let i = 0; i < eventsCalendar.length; i++) {

        if(eventsCalendar[i].id == event.eventId) {
          console.log("Caindo fora!")
          return;
        };        
      }

      try{
        const response = await axios.post(`http://localhost:8080/api/schedulers/addEventInScheduler`,{
          userId: user.userId,
          eventId: event.eventId,
          eventName: event.eventName,
          eventDateStart: event.eventDateStart,
          eventDateEnd: event.eventDateEnd,
          eventDescription: event.eventDescription,
          eventImage: event.eventImage,
          eventURL: event.eventURL,
          eventLevel: event.eventLevel
        })


      }catch(error){
        console.log(error)
      }

      changeFormattedEventsInScheduler()

    }


    const onAddToCalendar = (newEvent) => {
      
      //metodo para adicionar o evento no banco
      addEventToScheduler(newEvent)

    }

    return (
      <>
        <Events onAddToCalendar={onAddToCalendar} events={events} />
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
 <Footer />
      </>
    )
  }
    
    export default Agenda