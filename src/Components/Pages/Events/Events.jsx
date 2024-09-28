import '../../../Styles/Global.css'
import { useState, useEffect } from 'react';
import '../Events/events.css'

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulação de eventos futuros com imagens
    const upcomingEvents = [
      { 
        id: 1,
        image: "../src/Components/Pages/Events/assets/images/react.png",
        name: "Workshop de React", 
        date: "01/10/2024", 
        link: "https://www.youtube.com.br"
      },
      { 
        id: 2,
        image: "../src/Components/Pages/Events/assets/images/sql.png",
        name: "SQL na prática", 
        date: "15/10/2024", 
        link: "https://www.youtube.com.br"
      },
      { 
        id: 3, 
        image: "../src/Components/Pages/Events/assets/images/inovacao.jpg",
        name: "Inovação, Tecnologia, Tendências", 
        date: "05/11/2024", 
        link: "https://www.youtube.com.br"
      }
    ];

    setEvents(upcomingEvents);
  }, []);

  return (
    <>
      <h1>Próximos Eventos</h1>
      <ul class = "event-card">
        {events.map(event => (
          <li key={event.id}>
            <img src={event.image} alt={event.name}/>
            <h3>{event.name}</h3>
            <p>Data: {event.date}</p>
            <p>Acesse o evento online:</p>
            <p>
              <a class="button btn-2" href={event.link} target="_blank" rel="noopener noreferrer">Clique aqui</a>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Events;
