import '../../../Styles/Global.css';
import { useState, useEffect } from 'react';
import { Button, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import "./events.scss";
import axios from "axios";

function Events({ onAddToCalendar }) {
    const [events, setEvents] = useState([]);

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

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <div className="container layout justify-content-lg-start justify-content-center align-items-center">
            <h1>Próximos Eventos</h1>
            <Nav className="event-card d-flex flex-wrap w-100 justify-content-lg-between justify-content-center align-items-center">
                {events.map(event => (
                    <NavItem key={event.id}>
                        <img src={event.image} alt={event.title} />
                        <h3>{event.title}</h3>
                        <p>Data: {new Date(event.date).toLocaleDateString()}</p>
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
