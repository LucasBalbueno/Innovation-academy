import styled from "styled-components";

const Container = styled.div`
    background-color: #1e1e1e;
    color: #f5f5ff;
`;
const Div = styled.div`
    background-color: #1e1e1e;
    color: #f5f5ff;
    padding: 10px 0 80px;
    @media (max-width: 800px) {
        margin: 0 50px;
    }
    @media (min-width: 801px) {
        margin: 0 200px;
    }
`;
const H1 = styled.h1`
    text-align: center;
    color: #00ff7e;
    padding: 50px 0 0;
    font-size: 40px;
`;
const H2 = styled.h2`
    font-size: 25px;
    margin: 0 20px;
    color: #00ff7e;
`;
const Details = styled.details`
    padding: 15px 0;
    border-bottom: solid 1px #00ff7e;
`;
const Summary = styled.summary`
    padding: 5px;
    background-color: #1e1e1e;
    cursor: pointer;
`;
const P = styled.p`
    text-indent: 50px;
    padding: 20px 0 10px;
`;

const FAQ = () => {
    return (
        <Container>
            <H1>FAQ</H1>

            <Div>
                <H2>Cursos Premium</H2>
                <Details>
                    <Summary>Quais cursos premium vocês oferecem?</Summary>
                    <P>
                        Nós oferecemos aulas da melhor qualidade nas áreas de
                        programação, gestão emocional, como se comportar em
                        entrevistas de emprego e muito mais que estão por vir,
                        fique por dentro da nossa aba de novidades.
                    </P>
                </Details>
                <Details>
                    <Summary>Como é estruturado os certificados?</Summary>
                    <P>
                        Terminando qualquer jornada com mais de 90% de
                        frequência e com notas maiores de 80% você estará
                        habilitado a solicitar seu comprovante de conclusão.
                    </P>
                </Details>
                <Details>
                    <Summary>
                        Preciso de algum conhecimento prévio para me inscrever?
                    </Summary>
                    <P>
                        Todos nossos cursos e métodos são desenvolvidos para
                        aqueles que estão começando do absoluto zero, ou se
                        preferir, pode avançar para o tópico que considera mais
                        importante se for um aluno mais avançado.
                    </P>
                </Details>
            </Div>

            <Div>
                <H2>Pagamentos</H2>
                <Details>
                    <Summary>Quais formas de pagamento são aceitas?</Summary>
                    <P>Aceitamos cartão de crédito, pix e boleto.</P>
                </Details>
                <Details>
                    <Summary>Posso parcelar o pagamento dos cursos?</Summary>
                    <P>
                        Todos nossas jornadas premium tem um valor específico de
                        R$ 39,99/mês no plano anual. Isso inclui um acesso
                        ilimitado a todas aulas disponibilizadas na plataforma
                        sem custo adicional nenhum.
                    </P>
                </Details>
                <Details>
                    <Summary>
                        Tive um problema com o pagamento, o que fazer?
                    </Summary>
                    <P>
                        Pode ligar para nossas equipe de suporte disponível das
                        8h até as 17h de segunda a sexta.
                    </P>
                </Details>
                <Details>
                    <Summary>
                        Posso pedir reembolso se eu não gostar do curso?
                    </Summary>
                    <P>
                        Sim, nossa plataforma sempre valoriza o cliente,
                        portanto você pode pedir reembolso após 7 dias da
                        aquisição do mesmo, sendo assim, pode ficar tranquilo
                        pois se não achar que a plataforma atendeu suas
                        expectativas, pode cancelar a qualquer hora.
                    </P>
                </Details>
            </Div>

            <Div>
                <H2>Dúvidas Frequentes</H2>
                <Details>
                    <Summary>
                        Há um prazo para começar ou terminar os cursos?
                    </Summary>
                    <P>
                        Todos nossos cursos estão disponíveis enquanto o seu
                        plano estiver ativo.
                    </P>
                </Details>
                <Details>
                    <Summary>Posso assistir às aulas no meu celular?</Summary>
                    <P>
                        Sim, todas nossas aulas estão disponíveis para acesso
                        tanto no computador quanto em celulares.
                    </P>
                </Details>
                <Details>
                    <Summary>
                        E se eu tiver problemas de acesso ao curso?
                    </Summary>
                    <P>
                        Você pode tentar deslogar e logar no seu aplicativo ou
                        website. Caso o problema persista mande um email para
                        nossa equipe de suporte que irá atender rapidamente.
                    </P>
                </Details>
            </Div>
        </Container>
    );
};

export default FAQ;
