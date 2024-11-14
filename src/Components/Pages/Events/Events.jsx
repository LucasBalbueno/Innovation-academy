import '../../../Styles/Global.css';
import { useState, useEffect } from 'react';
import { Button, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Agenda from '../Schedule/Agenda';
import "./events.scss";

function Events({ onAddToCalendar }) {
  const [events, setEvents] = useState([]);

  const handleAdd = (newEvent) => {
    setEvents([...events, { ...newEvent, id: events.length + 1 }]);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/events');
        if (!response.ok) {
          throw new Error('Erro ao buscar eventos');
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Erro ao buscar eventos:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="container layout justify-content-lg-start justify-content-center align-items-center">
      <h1>Próximos Eventos</h1>
      <Nav className="event-card d-flex flex-wrap w-100 justify-content-lg-between justify-content-center align-items-center">
        {events.map(event => (
          <NavItem key={event.id}>
            <img src={event.image} alt={event.name} />
            <h3>{event.title}</h3>
            <p>Data: {event.date}</p>
            <p>Acesse o evento online:</p>
            <Button style={{ backgroundColor: 'var(--contrast-color)', color: 'var(--text-color)' }}>
              <NavLink href={event.link} target="_blank" rel="noopener noreferrer" className="m-0">Clique aqui</NavLink>
            </Button>
            <Button style={{ backgroundColor: 'rgb(69, 69, 69)', color: 'var(--text-color)', marginLeft: '10px' }} onClick={() => onAddToCalendar(event)}>
              Incluir no calendário
            </Button>
          </NavItem>
        ))}
      </Nav>
    </div>
  );
}

export default Events;
