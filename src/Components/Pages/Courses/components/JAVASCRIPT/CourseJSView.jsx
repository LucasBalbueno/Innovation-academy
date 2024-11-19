
import React, { useState } from 'react';
import {
    Badge, Nav, NavItem, NavLink, Row, TabContent, TabPane,
    Accordion, AccordionBody, AccordionHeader, AccordionItem
} from 'reactstrap';
import "../assets/styles/style.scss";
import { useNavigate } from 'react-router-dom';

import profile from "../../assets/profile/logo_reprograma.jpg"

const CourseJSView = () => {
    const [activeTab, setActiveTab] = useState('1');
    const [currentLesson, setCurrentLesson] = useState('https://www.youtube.com/embed/sj0p9O85AIg?si=fv017COdYUIng7vb');
    const [selectedLesson, setSelectedLesson] = useState('Aula 1 - Criando novo projeto');
    const navigate = useNavigate();
    const [open, setOpen] = useState('1');

    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    const toggleAccordion = (id) => {
        setOpen(open === id ? '' : id);
    };

    const handleLessonClick = (lesson) => {
        setCurrentLesson(lesson.url);
        setSelectedLesson(lesson.title);
    };

    const lessons = [
        { title: 'Aula 1 - Criando novo projeto', url: 'https://www.youtube.com/embed/sj0p9O85AIg?si=fv017COdYUIng7vb' },
        { title: 'Aula 2 - Estrutura Básica', url: 'https://www.youtube.com/embed/MOd8PCyEB88?si=2PHHivfdG5LxspNo' },
        { title: 'Aula 3 - Meta Tags, Cabeçalho e Parágrafo', url: 'https://www.youtube.com/embed/1ntb19o-2MI?si=tz3qfeaDxQPxEHfn' },
        { title: 'Aula 4 - Formatação de Texto', url: 'https://www.youtube.com/embed/RiGo7BN1Wps?si=odWEY1xnJfNCwHHt' },
        { title: 'Aula 5 - Elementos de Citação', url: 'https://www.youtube.com/embed/bzWtE7GFi0Y?si=Nuu4E8S5vhqzHNGb' },
        { title: 'Aula 6 - Comentários', url: 'https://www.youtube.com/embed/Sl0edqPVrGg?si=IAYSoPrMEkA-sSR5' },
        { title: 'Aula 7 - Links', url: 'https://www.youtube.com/embed/eb5tPfOeexI?si=Qwj0-2-mdVj703xu' },
    ]

    return (
        <div className='layout-courses container-fluid'>
            <Row className='bar'>
                <div className="d-flex align-items-center w-auto"
                    onClick={() => navigate('/home/cursos')}
                >
                    <i className="fa fa-arrow-left me-2"></i>
                    <p className='m-0'>Voltar</p>
                </div>

                <h3 className='my-3 text-sm-start text-center'>CURSO JAVASCRIPT - INICIANTE</h3>
                <div className="d-flex align-items-sm-start justify-content-sm-start align-items-center justify-content-center">
                    <Badge
                        className='bg-transparent rounded-pill me-lg-2 px-3 py-2'
                        style={{ border: '1px solid #94939340', fontSize: '0.7rem', cursor: "auto", color: 'var(--text-color)' }}
                    >
                        <i className='fa fa-code me-2'
                            style={{
                                color: "#00FF7E"
                            }}
                        ></i>
                        FRONTEND
                    </Badge>
                    <Badge
                        className='bg-transparent rounded-pill me-2 px-3 py-2'
                        style={{ border: '1px solid #94939340', fontSize: '0.7rem', cursor: "auto", color: 'var(--text-color)' }}
                    >
                        <i className='fa fa-play me-2'
                            style={{
                                color: "#00FF7E"
                            }}
                        ></i>
                        INICIANTE
                    </Badge>
                </div>
            </Row>
            <Row className="row">
                <div className="col-xl-9 col-lg-8 left-side">
                    <iframe
                        src={currentLesson}
                        title="Lesson"
                        allowFullScreen
                    ></iframe>

                    <div className='mobile-div d-lg-none d-block'>
                        <Nav tabs className='w-100'>
                            <NavItem>
                                <NavLink
                                    className={activeTab === '1' ? 'active cursor-pointer' : 'cursor-pointer'}
                                    onClick={() => toggleTab('1')}
                                >
                                    <i className="fa-solid fa-info"></i>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={activeTab === '2' ? 'active cursor-pointer' : 'cursor-pointer'}
                                    onClick={() => toggleTab('2')}
                                >
                                    <i className="fa-solid fa-video"></i>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={activeTab === '3' ? 'active cursor-pointer' : 'cursor-pointer'}
                                    onClick={() => toggleTab('3')}
                                >
                                    <i className="fa-solid fa-book-open"></i>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab} >
                            <TabPane tabId="1">
                                <h5 className='mb-3'>Sobre a trilha</h5>
                                <div className="lesson-description">
                                    Seja muito bem-vindo(a) ao curso de HTML, onde você aprenderá desde o básico até técnicas importantes para criar sites bem estruturados e semânticos. O curso é focado no aprendizado prático, com aulas curtas e objetivas, ideais para quem está começando na área.
                                </div>

                                <div className="profile d-flex align-items-center mt-5">
                                    <Accordion flush open={open} toggle={toggleAccordion} className='w-100'>
                                        <h4 className='my-4 mx-4'>Educador</h4>
                                        <AccordionItem className='p-2'>
                                            <AccordionHeader targetId="1">
                                                <div className='w-100'>
                                                    <div className='container-profile d-flex align-items-center '>
                                                        <div className='profile-photo me-3 d-flex justify-content-center align-items-center'><img src={profile} alt="PROFESSOR" /></div>
                                                        <p className='m-0'>
                                                            <strong>DIMITRI TEIXEIRA</strong>

                                                            <p className='description-p m-0 mt-1'>Web Fullstack Developer</p>

                                                        </p>
                                                    </div>
                                                </div>
                                            </AccordionHeader>
                                            <AccordionBody accordionId="1">
                                                Dimitri Teixeira é um desenvolvedor web Fullstack com vasta experiência no mercado de tecnologia. Ao longo dos anos, ele tem ajudado milhares de alunos a se tornarem desenvolvedores completos, dominando tanto o Frontend quanto o Backend. Além disso, seu estilo de ensino é descontraído e muito prático, com o objetivo de tornar o aprendizado de tecnologias como HTML, CSS, JavaScript, Node.js e PHP acessível e divertido para todos.
                                            </AccordionBody>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </TabPane>
                            <TabPane tabId="2" className='tab-pane'>
                                <h5 className='mb-3'>Conteúdos</h5>
                                <ul className="lesson-list">
                                    {lessons.map((lesson) => (
                                        <li
                                            key={lesson.title}
                                            className={selectedLesson === lesson.title ? 'selected' : ''}
                                            onClick={() => handleLessonClick(lesson)}
                                        >
                                            <i className="fa fa-video me-3"></i>
                                            {lesson.title}
                                        </li>
                                    ))}
                                </ul>
                            </TabPane>
                            <TabPane tabId="3" className='tab-pane'>
                                <h5 className='mb-5 align-self-start'>Materiais Extras</h5>
                                <div className='d-flex flex-column align-items-center'>
                                    <h1 className='text-white text-center'>
                                        <i className="fa-regular fa-copy"></i>
                                    </h1>
                                    <p className='text-center text-white material-text'>Não existem materiais extras relacionados a esta matéria</p>
                                </div>
                            </TabPane>
                        </TabContent>
                    </div>
                    <div className="lesson-description d-lg-block d-none">
                        <h3>Sobre a trilha</h3>
                        Seja muito bem-vindo(a) ao curso de HTML, onde você aprenderá desde o básico até técnicas importantes para criar sites bem estruturados e semânticos.
                    </div>

                    <div className="profile d-flex align-items-center mt-5 d-lg-block d-none">
                        <Accordion flush open={open} toggle={toggleAccordion} className='w-100'>
                            <h4 className='my-4 mx-4'>Educador</h4>
                            <AccordionItem className='p-2'>
                                <AccordionHeader targetId="1">
                                    <div className='w-100'>
                                        <div className='d-flex align-items-center '>
                                            <div className='profile-photo me-3 d-flex justify-content-center align-items-center'>Foto</div>
                                            <p className='m-0'>
                                                <strong>DIMITRI TEIXEIRA</strong>
                                                <p className='description-p m-0 mt-1'>Web Fullstack Developer</p>
                                            </p>
                                        </div>
                                    </div>
                                </AccordionHeader>
                                <AccordionBody accordionId="1">
                                    Dimitri Teixeira é um desenvolvedor web Fullstack com vasta experiência no mercado de tecnologia. Ao longo dos anos, ele tem ajudado milhares de alunos a se tornarem desenvolvedores completos, dominando tanto o Frontend quanto o Backend. Além disso, seu estilo de ensino é descontraído e muito prático, com o objetivo de tornar o aprendizado de tecnologias como HTML, CSS, JavaScript, Node.js e PHP acessível e divertido para todos.
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 right-side d-lg-block d-none">
                    <Nav tabs className='w-100'>
                        <NavItem>
                            <NavLink
                                className={activeTab === '1' ? 'active cursor-pointer' : 'cursor-pointer'}
                                onClick={() => toggleTab('1')}
                            >
                                <i className="fa-solid fa-video"></i>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={activeTab === '2' ? 'active cursor-pointer' : 'cursor-pointer'}
                                onClick={() => toggleTab('2')}
                            >
                                <i className="fa-solid fa-book-open"></i>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab} >
                        <TabPane tabId="1" className='tab-pane'>
                            <h5 className='mb-3'>Conteúdos</h5>
                            <ul className="lesson-list">
                                {lessons.map((lesson) => (
                                    <li
                                        key={lesson.title}
                                        className={selectedLesson === lesson.title ? 'selected' : ''}
                                        onClick={() => handleLessonClick(lesson)}
                                    >
                                        <i className="fa fa-video me-3"></i>
                                        {lesson.title}
                                    </li>
                                ))}
                            </ul>
                        </TabPane>
                        <TabPane tabId="2" className='tab-pane'>
                            <h5 className='mb-5 align-self-start'>Materiais Extras</h5>
                            <div className='d-flex flex-column align-items-center'>
                                <h1 className='text-white text-center'>
                                    <i className="fa-regular fa-copy"></i>
                                </h1>
                                <p className='text-center material-text text-white'>Não existem materiais extras relacionados a esta matéria</p>
                            </div>
                        </TabPane>
                    </TabContent>
                </div>
            </Row>
        </div>
    );
};

export default CourseJSView;
