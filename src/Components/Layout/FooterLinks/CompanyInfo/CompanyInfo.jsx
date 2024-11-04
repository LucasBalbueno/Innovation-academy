import styled from "styled-components";
import imgSrc from "./images/pexels-fauxels-3184454.jpg";

import { useNavigate } from "react-router-dom";

const Container = styled.div`
    background-color: #1e1e1e;
    color: #f5f5ff;
`;
const Div = styled.div`
    padding: 20px;
    @media (max-width: 720px) {
        margin: 0 20px;
    }
    @media (min-width: 721px) {
        margin: 0 150px;
    }
`;
const H1 = styled.h1`
    padding: 10px;
    text-align: center;
    color: #00ff7e;
`;
const H2 = styled.h2`
    padding: 100px 0 0;
    @media (max-width: 720px) {
        padding: 10px 0 0;
    }
    text-align: center;
`;
const H3 = styled.h3`
    text-align: center;
    @media (max-width: 720px) {
        font-size: 15px;
    }
`;
const Img = styled.img`
    width: 100%;
`;
const P = styled.p`
    text-indent: 50px;
    padding: 20px 0 10px;
`;
const Span = styled.span`
    color: #00ff7e;
`
const DivFlex = styled.div`
    display: flex;
    justify-content: center;
`;
const Button = styled.button`
    background-color: #00ff7e;
    background-color: #00a050;
    border-radius: 5px;
    color: #1e1e1e;
    color: #f5f5ff;
    border: none;
    padding: 15px 25px;
    margin: 50px 0;
    width: 50%;
    @media (max-width: 720px) {
        width: 60%;
    }
`;

const CompanyInfo = () => {
    const navigate = useNavigate();

    const navigateTo = () => {
        navigate("/faq");
    };

    return (
        <Container>
            <Div>
                <H1>InnovaTech</H1>
                <H3>Mais que um curso, uma jornada!</H3>
            </Div>
            <Img src={imgSrc} />
            <Div>
                <H2>Como começou...</H2>
                <P>
                    A InnovaTech nasceu da paixão e da criatividade de um grupo
                    de alunos que, após participarem de um curso inovador, se
                    uniram com um objetivo em comum: <Span> fazer o melhor aula possível. </Span> 
                    Com a convicção de que o aprendizado
                    é essencial para o crescimento pessoal e
                    profissional, decidimos criar uma plataforma acessível e
                    abrangente.
                </P>
                <P>
                    Nosso compromisso é reunir cursos de alta qualidade,
                    apresentados por especialistas em suas áreas, para que todos
                    possam encontrar o conhecimento que desejam, sem limitações.
                </P>
                <P>
                    Na InnovaTech, você encontrará uma diversidade de cursos que
                    vão desde programação e design até habilidades de vida e
                    bem-estar. Nossa missão é proporcionar uma jornada de
                    aprendizado <Span> enriquecedora e acessível </Span> a todos, transformando
                    ideias em conhecimento prático e aplicável.
                </P>
            </Div>
            <DivFlex>
                <Button onClick={navigateTo}>
                    Junte-se a nós e faça parte dessa revolução educacional!
                </Button>
            </DivFlex>
        </Container>
    );
};

export default CompanyInfo;
