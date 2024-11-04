import {
  FaHome,
  FaLaptop,
  FaRegCalendarCheck,
  FaDiscord,
} from "react-icons/fa";
import { GrConfigure } from "react-icons/gr";
import { TfiAgenda } from "react-icons/tfi";
import { BsQuestionCircle } from "react-icons/bs";
const routes = [
  { path: "/home", name: "Home", icon: <FaHome /> },
  { path: "/home/cursos", name: "Cursos", icon: <FaLaptop /> },
  { path: "/home/eventos", name: "Eventos", icon: <FaRegCalendarCheck /> },
  { path: "/home/agenda", name: "Agenda", icon: <TfiAgenda /> },
  { href: "https://www.google.com", name: "Ajuda", icon: <BsQuestionCircle /> },
  { path: "/home/comunidade", name: "Comunidade", icon: <FaDiscord /> },
];

export default routes;
