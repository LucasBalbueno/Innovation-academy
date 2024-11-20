import '../../../Styles/Global.css';
import { useState, useEffect } from 'react';
import { Button, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import "./events.scss";
import axios from "axios";

function Events({ onAddToCalendar, events }) {

    return (
        <div className="container layout justify-content-lg-start justify-content-center align-items-center">
            <h1>Próximos Eventos</h1>
            <Nav className="event-card d-flex flex-wrap w-100 justify-content-lg-between justify-content-center align-items-center">
                
                
                {events && events.map(event => (
                    (console.log(event)),
                    <NavItem key={event.eventId}>
                        <img src={event.eventImage} alt={event.eventName} />
                        <h3>{event.eventName}</h3>
                        <p>Inicio: {new Date(event.eventDateStart).toLocaleDateString()}</p>
                        <p>Fim: {new Date(event.eventDateEnd).toLocaleDateString()}</p>
                        <p>Acesse o evento online:</p>
                        <Button style={{ backgroundColor: 'var(--contrast-color)', color: 'var(--text-color)' }}>
                            <a href={event.eventURL} target='_blank' rel="noopener noreferrer" className="m-0" style={{textDecoration: "none"}}>Clique aqui</a>
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
