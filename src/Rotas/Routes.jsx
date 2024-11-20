import {
  FaHome,
  FaLaptop,
  FaRegUser,
  FaDiscord,
} from "react-icons/fa";
import { GrConfigure } from "react-icons/gr";
import { TfiAgenda } from "react-icons/tfi";
import { BsQuestionCircle } from "react-icons/bs";
const routes = [
  { path: "/home", name: "Home", icon: <FaHome /> },
  { path: "/home/cursos", name: "Cursos", icon: <FaLaptop /> },
  { path: "/home/profile", name: "Perfil", icon: <FaRegUser /> },
  { path: "/home/agenda", name: "Eventos", icon: <TfiAgenda /> },
  { href: "#", name: "Ajuda", icon: <BsQuestionCircle /> },
  { path: "/home/comunidade", name: "Comunidade", icon: <FaDiscord /> },
];

export default routes;
