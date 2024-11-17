import { Container, StyledViewProfileLink } from "./style";
import profileIcon from "../Images/Perfil-Avatar/avatar-1.jpg";
import LeaveIcon from "../Images/Perfil-Avatar/LeaveIcon.png";
import ConfigIcon from "../Images/Perfil-Avatar/ConfigIcon.png";
import { useState, useEffect } from "react";
import { decodeJwt } from "jose";
import axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

export function PopupProfile({ isPopUpProfileOpen, setIsPopupProfileOpen }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleClosePopUp = () => {
    setIsPopupProfileOpen(false);
  };

  const sair = () => {
    navigate("/");
    localStorage.clear();
  };

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("jwt");
        const decoded = decodeJwt(token);
        const response = await axios.get(
          `http://localhost:8080/api/users/by-email?email=${decoded.sub}`
        );
        setUsername(response.data.username);
        setName(response.data.name);
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Erro!',
          text: 'Erro ao carregar os dados do usuario.',
          confirmButtonText: 'OK'
        });
      }
    })();
  }, []);

  return (
    <Container
      className={
        isPopUpProfileOpen ? "popupProfile-open" : "popupProfile-close"
      }
    >
      <div className="popupHeader">
        <div className="profileTitle">
          <img
            src={profileIcon}
            alt="Profile"
            style={{
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              border: "5px solid #00FF7E",
            }}
          />

          <div>
            <h4>{name ? <>{name}</> : <>Nome Completo</>}</h4>
            <span>{username ? <>@{username}</> : <>@usuario123</>}</span>
          </div>
        </div>

        <div>
          <StyledViewProfileLink to={"profile"} onClick={handleClosePopUp}>
            Ver Perfil
          </StyledViewProfileLink>
        </div>
      </div>

      <div className="popupOptions">
        <Link
          className="StyledLinkOptions"
          to={"config"}
          onClick={handleClosePopUp}
        >
          <img src={ConfigIcon} alt="Icone de configurações" />
          <p>Configurações e Preferências</p>
        </Link>

        <button
          style={{ background: "none", border: "none" }}
          className="StyledLinkOptions"
          onClick={sair}
        >
          <img src={LeaveIcon} alt="Icone de Sair" />
          <p className="exitText">Sair da conta</p>
        </button>
      </div>
    </Container>
  );
}
