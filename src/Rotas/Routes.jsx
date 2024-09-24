import { FaHome, FaLaptop, FaRegCalendarCheck } from 'react-icons/fa';
import { PiChatsDuotone } from "react-icons/pi";
import { TfiAgenda } from "react-icons/tfi";
import { BsQuestionCircle } from "react-icons/bs";

const routes = [
  { path: '/home', name: 'Home', icon: <FaHome /> },
  { path: '/home/cursos', name: 'Cursos', icon: <FaLaptop /> },
  { path: '/home/eventos', name: 'Eventos', icon: <FaRegCalendarCheck /> },
  { path: '/home/agenda', name: 'Agenda', icon: <TfiAgenda /> },
  { path: '/home/ajuda', name: 'Ajuda', icon: <BsQuestionCircle /> }
];

export default routes;
