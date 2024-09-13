import { FaHome, FaLaptop, FaRegCalendarCheck,

} from 'react-icons/fa';
import { GoFileDirectory } from "react-icons/go";
import { PiChatsDuotone } from "react-icons/pi";
import { TfiAgenda } from "react-icons/tfi";
import { BsPeople } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";

const routes = [
    { path: '/home', name: 'Home', icon: <FaHome /> },
    { path: '/cursos', name: 'Cursos', icon: <FaLaptop /> },
    { path: '/materiais', name: 'Materiais', icon:<GoFileDirectory /> },
    { path: '/eventos', name: 'Eventos', icon: <FaRegCalendarCheck /> },
    { path: '/forum', name: 'Forum', icon: <PiChatsDuotone />},
    { path: '/agenda', name: 'Agenda', icon: <TfiAgenda />},
    { path: '/comunidade', name: 'Comunidade', icon: <BsPeople /> },
    { path: '/ajuda', name: 'Ajuda', icon: <BsQuestionCircle /> },
  ];

export default routes