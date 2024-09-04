import React from 'react';
import './assets/styles/style.scss';

import { Input, Card, CardBody, CardFooter, CardHeader } from "reactstrap"

import LogoHTML from "./assets/images/logo-html.png"
import LogoCSS from "./assets/images/logo-css.png"
import LogoJS from "./assets/images/logo-js.png"
import LogoNode from "./assets/images/logo-node.png"
import LogoReact from "./assets/images/logo-react.png"
import LogoJava from "./assets/images/logo-java.png"
import LogoPython from "./assets/images/logo-python.png"

const CoursesView = () => {
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
          <Card className='card d-flex align-items-center justify-content-center text-center'>
            <CardBody className='card-body w-100 d-flex align-items-center justify-content-center text-center'><img src={LogoHTML} alt='logo HTML' /></CardBody>
            <CardFooter className='text-white'>
              HTML
            </CardFooter>
          </Card>
          <Card className='card d-flex align-items-center justify-content-center text-center'>
            <CardBody className='card-body w-100 d-flex align-items-center justify-content-center text-center'><img src={LogoCSS} alt='logo CSS' /></CardBody>
            <CardFooter className='text-white'>
              CSS
            </CardFooter>
          </Card>
          <Card className='card d-flex align-items-center justify-content-center text-center'>
            <CardBody className='card-body w-100 d-flex align-items-center justify-content-center text-center'><img src={LogoJS} alt='logo javascript' /></CardBody>
            <CardFooter className='text-white'>
              JavaScript
            </CardFooter>
          </Card>
          <Card className='card d-flex align-items-center justify-content-center text-center'>
            <CardBody className='card-body w-100 d-flex align-items-center justify-content-center text-center'><img src={LogoReact} alt='logo React' /></CardBody>
            <CardFooter className='text-white'>
              React
            </CardFooter>
          </Card>
          <Card className='card d-flex align-items-center justify-content-center text-center'>
            <CardBody className='card-body w-100 d-flex align-items-center justify-content-center text-center'><img src={LogoNode} alt='logo Node' /></CardBody>
            <CardFooter className='text-white'>
              NodeJs
            </CardFooter>
          </Card>
          <Card className='card d-flex align-items-center justify-content-center text-center'>
            <CardBody className='card-body w-100 d-flex align-items-center justify-content-center text-center'><img src={LogoJava} alt='logo Java' /></CardBody>
            <CardFooter className='text-white'>
              Java
            </CardFooter>
          </Card>
          <Card className='card d-flex align-items-center justify-content-center text-center'>
            <CardBody className='card-body w-100 d-flex align-items-center justify-content-center text-center'><img src={LogoPython} alt='logo Python' /></CardBody>
            <CardFooter className='text-white'>
              Python
            </CardFooter>
          </Card>
        </div>

        <div className="recent-access">
          <h2>Acesso recente</h2>
          <div className="courses-access d-flex align-items-center justify-content-between">
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
          <h2>Recomendados</h2>
        </div>

        <div className="events">
          <h2>Eventos online</h2>
        </div>
      </div>
    </div>
  );
};

export default CoursesView;
