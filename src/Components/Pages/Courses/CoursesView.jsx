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
    { name: 'HTML', image: LogoHTML, description: 'Iniciante', path: '/home/cursos/html' },
    { name: 'CSS', image: LogoCSS, description: 'Iniciante', path: '/home/cursos/css' },
    { name: 'JavaScript', image: LogoJS, description: 'Avançado', path: '/home/cursos/javascript' },
    { name: 'React', image: LogoReact, description: 'Iniciante', path: '/home/cursos/reactjs' },
    { name: 'NodeJs', image: LogoNode, description: 'Iniciante', path: '/home/cursos/nodejs' },
    { name: 'Java', image: LogoJava, description: 'Intermediário', path: '/home/cursos/java' },
    { name: 'Python', image: LogoPython, description: 'Iniciante', path: '/home/cursos/python' },
    { name: 'SASS', image: SASSLogo, description: 'Intermediário', path: '/home/cursos/sass' }
  ];

  const coursesRecomended = [
    { name: 'React', image: LogoReact, description: 'Iniciante', path: '/home/cursos/reactjs' },
    { name: 'NodeJs', image: LogoNode, description: 'Iniciante', path: '/home/cursos/nodejs' },
    { name: 'JavaScript', image: LogoJS, description: 'Avançado', path: '/home/cursos/javascript' }
  ];

  const events = [
    { name: 'Aula sobre IA', data: "28 DE AGOSTO - 19 HORAS", description: 'Iniciante', link: 'https://www.youtube.com/watch?v=jQMbuK6URws&list=PLHz_AreHm4dm24MhlWJYiR_Rm7TFtvs6S&ab_channel=CursoemV%C3%ADdeo' },
    { name: 'Algoritmos', data: "30 DE AGOSTO - 19 HORAS", description: 'Iniciante', link: 'https://www.youtube.com/watch?v=JaTf3dhx464&ab_channel=Sharpax' },
    { name: 'React Routers', data: "28 DE SETEMBRO - 19 HORAS", description: 'Avançado', link: 'https://www.youtube.com/watch?v=7b42lVMdEjE&ab_channel=MatheusBattisti-HoradeCodar' },
    { name: 'Orientação a Objetos', data: "28 DE OUTUBRO - 20 HORAS", description: 'Avançado', link: 'https://www.youtube.com/watch?v=f-aDDLRmugU&ab_channel=Sharpax' }
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

        <div className='container-card'>
          {courses.map((course, index) => (
            <Card key={index} className='card-div d-flex align-items-center justify-content-center text-center'
              onClick={() => navigate(course.path)}
            >
              <CardBody className='card-body d-flex align-items-center justify-content-center text-center'>
                <img src={course.image} alt={`logo ${course.name}`} />
              </CardBody>
              <CardFooter className='cardFooter-text'>
                {course.name}
              </CardFooter>
            </Card>
          ))}
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
                onClick={() => navigate(course.path)}
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
          <h2 className='mb-5'>Complementos online</h2>
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
                    <a target='_blank' href={event.link}>ACESSAR</a>
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
