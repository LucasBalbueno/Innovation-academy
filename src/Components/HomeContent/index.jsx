import '../../Styles/Global.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

import { Container, ContainerInitial, ContainerBanners, ContainerText, ContainerFeedback } from './style';
import { RecentsCard } from './RecentsCard';
import Banner1 from './images/BannerPrincipal1.png'
import Banner2 from './images/BannerPrincipal2.png'
import Banner3 from './images/BannerPrincipal3.png'
import Banner4 from './images/BannerNovidades1.png'
import Banner5 from './images/BannerNovidades2.png'
import Banner6 from './images/BannerNovidades3.png'
import { FeedbackCard } from './FeedbackCard';

function HomeContent() {  

    return (
      <>
        <Container>
          <ContainerInitial>
            <h1>Olá <span>Pessoa</span>!</h1>
            <p>Cursos e materiais recentes</p>
            <div className='containerRecents'>
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
            <p>Aprenda a dominar as principais tecnologias do mercado com nossos cursos online voltados para desenvolvedores de todos os níveis. Do básico ao avançado, oferecemos uma ampla gama de conteúdos práticos e atualizados em linguagens como JavaScript, Python, C#, TypeScript, e muito mais. Tenha acesso a tutoriais detalhados, suporte de especialistas e certificações que impulsionarão sua carreira. Comece hoje mesmo a transformar suas ideias em código!</p>
          </ContainerText>

          <ContainerFeedback>
            <p>DEPOIMENTOS</p>

            <div className='groupCards'>
              <FeedbackCard />
              <FeedbackCard />
              <FeedbackCard />
              <FeedbackCard />
              <FeedbackCard />
              <FeedbackCard />
            </div>
          </ContainerFeedback>

            <h2 className='font2P'>Decole conosco você também!</h2>
        </Container>
      </>
    )
  }
  
  export default HomeContent