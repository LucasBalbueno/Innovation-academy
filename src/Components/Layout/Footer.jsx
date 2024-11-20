import styled from "styled-components";
import logo from "./Images/Logo.png";
import "../../Styles/Global.css";

import { IoLogoInstagram } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";

const Container = styled.div`
  background-color: var(--main-color);
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  padding-left: 5%;
  padding-right: 5%;

  @media (max-width: 768px) {
    padding-bottom: 45%;
  }
`;

const BoxOne = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const Logoname = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  width: 100%;
  justify-content: center;
`;

const Name = styled.p`
  color: var(--text-color);
  font-size: 1.5rem;
  font-family: var(--font-paytone-one);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
const Span = styled.span`
  color: var(--contrast-color);
`;
const BoxTwo = styled.div`
  width: 100%;
  height: 100%;
  color: var(--text-color);
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: center;
  font-size: 1rem !important;
  font-family: var(--font-poopins);
  padding: 5% 0%;
`;
const Logo = styled.img`
  width: 90px;
  height: 90px;
  @media (max-width: 1070px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 470px) {
    width: 40px;
    height: 40px;
  }
`;
const Subject = styled.p`
  color: var(--text-color);
  font-family: var(--font-poopins);
  font-weight: 600;
`;

const LinksUtillities = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Box = styled.div`
  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 1rem;
  }
`;
const Itens = styled.li`
  list-style: none;
  color: var(--text-color);
  font-family: var(--font-poopins);
  font-size: 16px;
  padding: 5px 0px;

  &:hover {
    cursor: pointer;
    color: var(--contrast-color);
  }
`;

const SocialMedias = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const Redes = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
const RedesSociais = styled.a`
  color: var(--text-color);
`;
const Button = styled.button`
  border-radius: 30px;
  background-color: var(--constrast-color);
  padding: 10px 32px;
  border: none;
  color: var(--text-color);
  font-family: var(--font-poopins);
  font-weight: 500;
`;

function Footer() {
  return (
    <>
      <Container>
        <BoxOne>
          <Logoname>
            <Logo src={logo} alt="" />
            <Name>
              I<Span>Academy Premium</Span>
            </Name>
          </Logoname>
          <LinksUtillities>
            <Box>
              <Subject>Início</Subject>
              <Itens>Home</Itens>
              <Itens>Cursos</Itens>
              <Itens>Downloads</Itens>
            </Box>

            <Box>
              <Subject>Sobre Nós</Subject>
              <Itens>Informações da Empresa</Itens>
              <Itens>Contato</Itens>
              <Itens>Blog</Itens>
            </Box>

            <Box>
              <Subject>Suporte</Subject>
              <Itens>FAQ</Itens>
              <Itens>Telefones</Itens>
              <Itens>Chats</Itens>
            </Box>
          </LinksUtillities>
          <SocialMedias>
            <Redes>
              <RedesSociais href="#">
                <IoLogoFacebook size={40} />
              </RedesSociais>
              <RedesSociais href="#">
                <IoLogoInstagram size={40} />
              </RedesSociais>
              <RedesSociais href="#">
                <IoLogoTwitter size={40} />
              </RedesSociais>
            </Redes>
            <Button>Contato</Button>
          </SocialMedias>
        </BoxOne>
        <BoxTwo>@2024 Copyright - I.Academy Premium</BoxTwo>
      </Container>
    </>
  );
}

export default Footer;
