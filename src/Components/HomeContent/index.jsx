import "../../Styles/Global.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

import {
  Container,
  ContainerInitial,
  ContainerBanners,
  ContainerText,
  ContainerFeedback,
} from "./style";
import { RecentsCard } from "./RecentsCard";
import Banner1 from "./images/BannerPrincipal1.png";
import Banner2 from "./images/BannerPrincipal2.png";
import Banner3 from "./images/BannerPrincipal3.png";
import Banner4 from "./images/BannerNovidades1.png";
import Banner5 from "./images/BannerNovidades2.png";
import Banner6 from "./images/BannerNovidades3.png";
import { FeedbackCard } from "./FeedbackCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { decodeJwt } from "jose";
import { useNavigate } from "react-router-dom";

function HomeContent() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token == null) {
      navigate("/");
      return;
    }
    (async () => {
      try {
        const decoded = decodeJwt(token);
        const response = await axios.get(
          `http://localhost:8080/api/users/by-email?email=${decoded.sub}`
        );
        setName(response.data.username);
      } catch (error) {
        console.log(error);
        alert("Erro ao carregar os dados do usuario.");
      }
    })();
  }, []);
  return (
    <>
      <Container>
        <ContainerInitial>
          <h1>
            Olá <span>{name ? <>{name}</> : <>pessoa</>}</span>!
          </h1>
          <p>Cursos e materiais recentes</p>
          <div className="containerRecents">
            <RecentsCard />
            <RecentsCard />
            <RecentsCard />
            <RecentsCard />
          </div>
        </ContainerInitial>

        <ContainerBanners>
          <p>Novidades</p>
          <Carousel>
            <Carousel.Item interval={3000}>
              <img src={Banner1} alt="Banner novo curso de C#" />
            </Carousel.Item>

            <Carousel.Item interval={3000}>
              <img src={Banner2} alt="Banner principal" />
            </Carousel.Item>

            <Carousel.Item interval={3000}>
              <img src={Banner3} alt="Banner eventos online" />
            </Carousel.Item>
          </Carousel>
        </ContainerBanners>

        <ContainerBanners>
          <p>Ficou sabendo?</p>
          <Carousel>
            <Carousel.Item interval={3000}>
              <img src={Banner4} alt="Banner novas promoções" />
            </Carousel.Item>

            <Carousel.Item interval={3000}>
              <img src={Banner5} alt="Banner evento react" />
            </Carousel.Item>

            <Carousel.Item interval={3000}>
              <img src={Banner6} alt="Banner evento algoritmos" />
            </Carousel.Item>
          </Carousel>
        </ContainerBanners>

        <ContainerText>
          <h2>ENCONTRE O SEU FUTURO AQUI!</h2>
          <p>
            Aprenda a dominar as principais tecnologias do mercado com nossos
            cursos online voltados para desenvolvedores de todos os níveis. Do
            básico ao avançado, oferecemos uma ampla gama de conteúdos práticos
            e atualizados em linguagens como JavaScript, Python, C#, TypeScript,
            e muito mais. Tenha acesso a tutoriais detalhados, suporte de
            especialistas e certificações que impulsionarão sua carreira. Comece
            hoje mesmo a transformar suas ideias em código!
          </p>
        </ContainerText>

        <ContainerFeedback>
          <p>DEPOIMENTOS</p>

          <div className="groupCards">
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
          </div>

          <div className="styledLinkContainer">
            <Link className="styledLinkFeedback" to={"feedbacks"}>
              Avaliar a plataforma
            </Link>
          </div>
        </ContainerFeedback>

        <h2 className="font2P">Decole conosco você também!</h2>
      </Container>
    </>
  );
}

export default HomeContent;
