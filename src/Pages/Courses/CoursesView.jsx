import React, { useState } from 'react';
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
  const [hoveredCourse, setHoveredCourse] = useState(null);

  const courses = [
    { name: 'HTML', image: LogoHTML, description: 'Iniciante', path: '/courses/html' },
    { name: 'CSS', image: LogoCSS, description: 'Iniciante', path: '/courses/css' },
    { name: 'JavaScript', image: LogoJS, description: 'Avançado', path: '/courses/javascript' },
    { name: 'React', image: LogoReact, description: 'Iniciante', path: '/courses/reactjs' },
    { name: 'NodeJs', image: LogoNode, description: 'Iniciante', path: '/courses/nodejs' },
    { name: 'Java', image: LogoJava, description: 'Intermediário', path: '/courses/java' },
    { name: 'Python', image: LogoPython, description: 'Iniciante', path: '/courses/python' },
    { name: 'SASS', image: SASSLogo, description: 'Intermediário', path: '/courses/sass' }
  ];

  const coursesRecomended = [
    { name: 'React', image: LogoReact, description: 'Iniciante', videoUrl: 'https://www.youtube.com/embed/example1' },
    { name: 'NodeJs', image: LogoNode, description: 'Iniciante', videoUrl: 'https://www.youtube.com/embed/example2' },
    { name: 'JavaScript', image: LogoJS, description: 'Avançado', videoUrl: 'https://www.youtube.com/embed/example3' }
  ];

  const events = [
    { name: 'Aula sobre IA', data: "28 DE AGOSTO - 19 HORAS", description: 'Iniciante' },
    { name: 'Algoritmos', data: "30 DE AGOSTO - 19 HORAS", description: 'Iniciante' },
    { name: 'React Routers', data: "28 DE SETEMBRO - 19 HORAS", description: 'Avançado' },
    { name: 'Orientação a Objetos', data: "28 DE OUTUBRO - 20 HORAS", description: 'Avançado' }
  ];

  const recentAccess = [
    { name: 'JavaScript', image: LogoJS, hours: '60 HORAS', lesson: 'Aula 8 - Arrow Functions em JS', progress: '80%' },
    { name: 'HTML', image: LogoHTML, hours: '30 HORAS', lesson: 'Aula 10 - Semântica', progress: '80%' }
  ];


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
          {courses.map((course, index) => (
            <Card key={index} className='card-div d-flex align-items-center justify-content-center text-center'
              onClick={() => navigate(course.path)}
            >
              <CardBody className='card-body d-flex align-items-center justify-content-center text-center'>
                <img src={course.image} alt={`logo ${course.name}`} />
              </CardBody>
              <CardFooter className='text-white'>
                {course.name}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="recent-access">
          <h2 className='mb-5'>Acesso recente</h2>
          <div className="courses-access d-flex flex-lg-row flex-column align-items-center justify-content-between">
            {recentAccess.map((item, index) => (
              <Card key={index} className='recent-access-card d-flex align-items-stretch border-0'>
                <CardHeader className='border-0 d-flex align-items-center'>
                  <img src={item.image} alt={`Logo ${item.name}`} />
                  <h3 className='m-0'>{item.name}</h3>
                </CardHeader>
                <CardBody className='card-body'>
                  <p>CARGA {item.hours}</p>
                  <strong>{item.lesson}</strong>
                </CardBody>
                <CardFooter className='border-0 footer py-0 m-0 d-flex align-items-center'>
                  <div className="states"></div>
                  <p className='number-status m-0'>{item.progress}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="courses-recomended">
          <h2 className='mb-5'>Recomendados</h2>
          <div className='container-cards-recomended d-flex flex-lg-row flex-column align-items-center justify-content-between'>
            {coursesRecomended.map((course, index) => (
              <Card
                key={index}
                className='courses-recomended-card d-flex align-items-stretch border-0'
                onMouseEnter={() => setHoveredCourse(index)}
                onMouseLeave={() => setHoveredCourse(null)}
              >
                <div className="default-card">
                  <CardHeader className='border-0 d-flex align-items-center'>
                    <img className="header-logo" src={course.image} alt={`Logo ${course.name}`} />
                    <h3 className='m-0'>{course.name}</h3>
                  </CardHeader>
                  <CardBody className='card-body'>
                    <p>CARGA 60 HORAS</p>
                    <strong>{course.description}</strong>
                  </CardBody>
                </div>

              </Card>

            ))}
          </div>
        </div>

        <div className="events">
          <h2 className='mb-5'>Eventos online</h2>
          <div className='container-cards-events d-flex align-items-center justify-content-between'>
            {events.map((event, index) => (
              <Card className='card-event d-flex align-items-stretch border-0'>
                <CardHeader className='border-0 d-flex align-items-center justify-content-between'>
                  <div className="d-flex align-items-center">
                    <img className='header-logo' src={LogoYoutube} alt="Logo Youtube" />
                    <h3 className='m-0'>{event.name}</h3>
                  </div>
                  <img className='live-logo' src={LiveLogo} alt="Live Logo" />
                </CardHeader>
                <CardBody className='card-body'>
                  <p>{event.data}</p>
                  <div className='d-flex align-items-sm-center justify-content-between flex-sm-row flex-column'>
                    <strong>{event.description}</strong>
                    <a target='_blank' href='#'>ACESSAR</a>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesView;
