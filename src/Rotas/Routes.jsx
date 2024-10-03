import { FaHome, FaLaptop, FaRegCalendarCheck } from 'react-icons/fa';
import { TfiAgenda } from "react-icons/tfi";
import { BsQuestionCircle } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

const routes = [
  { path: '/home', name: 'Home', icon: <FaHome /> },
  { path: '/home/cursos', name: 'Cursos', icon: <FaLaptop /> },
  { path: '/home/eventos', name: 'Eventos', icon: <FaRegCalendarCheck /> },
  { path: '/home/agenda', name: 'Agenda', icon: <TfiAgenda /> },
  { href: 'https://www.google.com', name: 'Ajuda', icon: <BsQuestionCircle /> },
  { href: 'https://www.google.com', name: 'Comunidade', icon: <FaDiscord /> }
];

export default routes;
