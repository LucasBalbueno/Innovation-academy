import React from 'react';
import './assets/styles/style.scss';

import { Input, Card, CardBody, CardFooter, CardHeader } from "reactstrap"
import { useNavigate } from 'react-router-dom';

import LogoHTML from "./assets/images/logo-html.png"
import LogoCSS from "./assets/images/logo-css.png"
import LogoJS from "./assets/images/logo-js.png"
import LogoNode from "./assets/images/logo-node.png"
import LogoReact from "./assets/images/logo-react.png"
import LogoJava from "./assets/images/logo-java.png"
import LogoPython from "./assets/images/logo-python.png"
import LogoYoutube from "./assets/images/logo-youtube.png"
import LiveLogo from "./assets/images/live-icon.png"
import SASSLogo from "./assets/images/sass-logo.png"

const CoursesView = () => {
  const navigate = useNavigate();

  return (
    <div className='container-fluid layout'>
      <div className="container">
        <h1>Cursos</h1>
        <h3>Aproveite todos os nossos cursos!</h3>
        <input
          type="text"
          className='form-input'
          placeholder="Pesquisar"
        />

        <div className='container-card'>
          <Card className='card-div d-flex align-items-center justify-content-center text-center'
            onClick={() => navigate("/courses/hmtl")}
          >
            <CardBody className='card-body d-flex align-items-center justify-content-center text-center'><img src={LogoHTML} alt='logo HTML' /></CardBody>
            <CardFooter className='text-white'>
              HTML
            </CardFooter>
          </Card>
          <Card className='card-div d-flex align-items-center justify-content-center text-center'
            onClick={() => navigate("/courses/css")}
          >
            <CardBody className='card-body d-flex align-items-center justify-content-center text-center'><img src={LogoCSS} alt='logo CSS' /></CardBody>
            <CardFooter className='text-white'>
              CSS
            </CardFooter>
          </Card>
          <Card className='card-div d-flex align-items-center justify-content-center text-center'
            onClick={() => navigate("/courses/javascript")}
          >
            <CardBody className='card-body d-flex align-items-center justify-content-center text-center'><img src={LogoJS} alt='logo javascript' /></CardBody>
            <CardFooter className='text-white'>
              JavaScript
            </CardFooter>
          </Card>
          <Card className='card-div d-flex align-items-center justify-content-center text-center'
            onClick={() => navigate("/courses/reactJs")}
          >
            <CardBody className='card-body d-flex align-items-center justify-content-center text-center'><img src={LogoReact} alt='logo React' /></CardBody>
            <CardFooter className='text-white'>
              React
            </CardFooter>
          </Card>
          <Card className='card-div d-flex align-items-center justify-content-center text-center'
            onClick={() => navigate("/courses/node")}
          >
            <CardBody className='card-body d-flex align-items-center justify-content-center text-center'><img src={LogoNode} alt='logo Node' /></CardBody>
            <CardFooter className='text-white'>
              NodeJs
            </CardFooter>
          </Card>
          <Card className='card-div d-flex align-items-center justify-content-center text-center'
            onClick={() => navigate("/courses/java")}
          >
            <CardBody className='card-body d-flex align-items-center justify-content-center text-center'><img src={LogoJava} alt='logo Java' /></CardBody>
            <CardFooter className='text-white'>
              Java
            </CardFooter>
          </Card>
          <Card className='card-div d-flex align-items-center justify-content-center text-center'
            onClick={() => navigate("/courses/python")}
          >
            <CardBody className='card-body d-flex align-items-center justify-content-center text-center'><img src={LogoPython} alt='logo Python' /></CardBody>
            <CardFooter className='text-white'>
              Python
            </CardFooter>
          </Card>
          <Card className='card-div d-flex align-items-center justify-content-center text-center'
            onClick={() => navigate("/courses/sass")}
          >
            <CardBody className='card-body d-flex align-items-center justify-content-center text-center'><img src={SASSLogo} alt='logo SASS' /></CardBody>
            <CardFooter className='text-white'>
              SASS
            </CardFooter>
          </Card>
        </div>

        <div className="recent-access">
          <h2 className='mb-5'>Acesso recente</h2>
          <div className="courses-access d-flex flex-lg-row flex-column align-items-center justify-content-between">
            <Card className='recent-access-card d-flex align-items-stretch border-0'>
              <CardHeader className='border-0 d-flex align-items-center'>
                <img src={LogoJS} alt="Logo JavaScript" />
                <h3 className='m-0'>JavaScript</h3>
              </CardHeader>
              <CardBody className='card-body'>
                <p>CARGA 60 HORAS</p>
                <strong>Aula 8 - Arrow Funcions em JS</strong>
              </CardBody>
              <CardFooter className='border-0 footer py-0 m-0 d-flex align-items-center'>
                <div className="states"></div>
                <p className='number-status m-0'>80%</p>
              </CardFooter>
            </Card>
            <Card className='recent-access-card d-flex align-items-stretch border-0'>
              <CardHeader className='border-0 d-flex align-items-center'>
                <img src={LogoHTML} alt="Logo HTML" />
                <h3 className='m-0'>HTML</h3>
              </CardHeader>
              <CardBody className='card-body'>
                <p>CARGA 30 HORAS</p>
                <strong>Aula 10 - Semântica</strong>
              </CardBody>
              <CardFooter className='border-0 footer py-0 m-0 d-flex align-items-center'>
                <div className="states"></div>
                <p className='number-status m-0'>80%</p>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="courses-recomended">
          <h2 className='mb-5'>Recomendados</h2>
          <div className='container-cards-recomended d-flex flex-lg-row flex-column align-items-center justify-content-between'>
            <Card className='courses-recomended-card d-flex align-items-stretch border-0'
              onClick={() => navigate("/courses/reactJs")}
            >
              <CardHeader className='border-0 d-flex align-items-center'>
                <img src={LogoReact} alt="Logo React" />
                <h3 className='m-0'>React</h3>
              </CardHeader>
              <CardBody className='card-body'>
                <p>CARGA 60 HORAS</p>
                <strong>Iniciante</strong>
              </CardBody>
            </Card>
            <Card className='courses-recomended-card d-flex align-items-stretch border-0'
              onClick={() => navigate("/courses/node")}
            >
              <CardHeader className='border-0 d-flex align-items-center'>
                <img src={LogoNode} alt="Logo Node" />
                <h3 className='m-0'>NodeJs</h3>
              </CardHeader>
              <CardBody className='card-body'>
                <p>CARGA 80 HORAS</p>
                <strong>Iniciante</strong>
              </CardBody>
            </Card>
            <Card className='courses-recomended-card d-flex align-items-stretch border-0'
              onClick={() => navigate("/courses/javascript")}
            >
              <CardHeader className='border-0 d-flex align-items-center'>
                <img src={LogoJS} alt="Logo JavaScript" />
                <h3 className='m-0'>JavaScript</h3>
              </CardHeader>
              <CardBody className='card-body'>
                <p>CARGA 60 HORAS</p>
                <strong>Avançado</strong>
              </CardBody>
            </Card>
          </div>
        </div>

        <div className="events">
          <h2 className='mb-5'>Eventos online</h2>
          <div className='container-cards-events d-flex align-items-center justify-content-between'>
            <Card className='card-event d-flex align-items-stretch border-0'>
              <CardHeader className='border-0 d-flex align-items-center justify-content-between'>
                <div className="d-flex align-items-center">
                  <img className='header-logo' src={LogoYoutube} alt="Logo Youtube" />
                  <h3 className='m-0'>Aula sobre IA</h3>
                </div>
                <img className='live-logo' src={LiveLogo} alt="Live Logo" />
              </CardHeader>
              <CardBody className='card-body'>
                <p>28 DE AGOSTO - 19 HORAS</p>
                <div className='d-flex align-items-sm-center justify-content-between flex-sm-row flex-column'>
                  <strong>Avançado</strong>
                  <a target='_blank' href='#'>ACESSAR</a>
                </div>
              </CardBody>
            </Card>
            <Card className='card-event d-flex align-items-stretch border-0'>
              <CardHeader className='border-0 d-flex align-items-center justify-content-between'>
                <div className="d-flex align-items-center">
                  <img className='header-logo' src={LogoYoutube} alt="Logo Youtube" />
                  <h3 className='m-0'>Algoritmos</h3>
                </div>
                <img className='live-logo' src={LiveLogo} alt="Live Logo" />
              </CardHeader>
              <CardBody className='card-body'>
                <p>28 DE AGOSTO - 19 HORAS</p>
                <div className='d-flex align-items-sm-center justify-content-between flex-sm-row flex-column'>
                  <strong>Avançado</strong>
                  <a target='_blank' href='#'>ACESSAR</a>
                </div>
              </CardBody>
            </Card>
            <Card className='card-event d-flex align-items-stretch border-0'>
              <CardHeader className='border-0 d-flex align-items-center justify-content-between'>
                <div className="d-flex align-items-center">
                  <img className='header-logo' src={LogoYoutube} alt="Logo Youtube" />
                  <h3 className='m-0'>React Routers</h3>
                </div>
                <img className='live-logo' src={LiveLogo} alt="Live Logo" />
              </CardHeader>
              <CardBody className='card-body'>
                <p>28 DE AGOSTO - 19 HORAS</p>
                <div className='d-flex align-items-sm-center justify-content-between flex-sm-row flex-column'>
                  <strong>Avançado</strong>
                  <a target='_blank' href='#'>ACESSAR</a>
                </div>
              </CardBody>
            </Card>
            <Card className='card-event d-flex align-items-stretch border-0'>
              <CardHeader className='border-0 d-flex align-items-center justify-content-between'>
                <div className="d-flex align-items-center">
                  <img className='header-logo' src={LogoYoutube} alt="Logo Youtube" />
                  <h3 className='m-0'>Orientação a Objetos</h3>
                </div>
                <img className='live-logo' src={LiveLogo} alt="Live Logo" />
              </CardHeader>
              <CardBody className='card-body'>
                <p>28 DE AGOSTO - 19 HORAS</p>
                <div className='d-flex align-items-sm-center justify-content-between flex-sm-row flex-column'>
                  <strong>Avançado</strong>
                  <a target='_blank' href='#'>ACESSAR</a>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesView;
