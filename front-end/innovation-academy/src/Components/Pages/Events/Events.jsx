import '../../../Styles/Global.css'

import { useState, useEffect } from 'react';
import { Button, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import "./events.scss"
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
    <div className="container layout justify-content-lg-start justify-content-center align-items-center">
      <h1>Próximos Eventos</h1>
      <Nav className="event-card d-flex flex-wrap w-100 justify-content-lg-between justify-content-center align-items-center">
        {events.map(event => (
          <NavItem key={event.id}>
            <img src={event.image} alt={event.name} />
            <h3>{event.name}</h3>
            <p>Data: {event.date}</p>
            <p>Acesse o evento online:</p>
            <Button className="btn-success">
              <NavItem href={event.link} target="_blank" rel="noopener noreferrer" className="m-0">Clique aqui</NavItem>
            </Button>
          </NavItem>
        ))}
      </Nav>
    </div>
  );
}

export default Events;
