import React, { useState } from 'react';
import {
    Badge, Nav, NavItem, NavLink, Row, TabContent, TabPane,
    Accordion, AccordionBody, AccordionHeader, AccordionItem
} from 'reactstrap';
import "../assets/styles/style.scss";
import { useNavigate } from 'react-router-dom';

import profile from "../../assets/profile/hashitag_treinamentos_profile.jpg"

const CoursePythonView = () => {
    const [activeTab, setActiveTab] = useState('1');
    const [currentLesson, setCurrentLesson] = useState('https://www.youtube.com/embed/g_R_Asf6Co0?si=QsZuGXoltUvnpHBg');
    const [selectedLesson, setSelectedLesson] = useState('Aula 1 - Introdução ao Python');
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
        { title: 'Aula 1 - Introdução ao Python', url: 'https://www.youtube.com/embed/g_R_Asf6Co0?si=QsZuGXoltUvnpHBg' },
        { title: 'Aula 2 - Strings e Funções de Texto', url: 'https://www.youtube.com/embed/Zn9cGfSsssI?si=mhIWxqSz00TFGomZ' },
        { title: 'Aula 3 - Inputs e Listas', url: 'https://www.youtube.com/embed/nF-t3VS-Du0?si=xv4b--F5T-ZNm5rG' },
        { title: 'Aula 4 - For - Loop e Estruturas de Repetição', url: 'https://www.youtube.com/embed/Kr_N5Ihti1M?si=gzKkeJ5km8lc2IQd' },
        { title: 'Aula 5 - For - Loop e Estruturas de Repetição', url: 'https://www.youtube.com/embed/Iao4Yr1xblc?si=WH7HFf8L4bDu7qYw' },
        { title: 'Aula 6 - Dicionários e Estruturas de Dados', url: 'https://www.youtube.com/embed/fYEQ1hH87Io?si=85BGLCLnic_eRoEI' },
        { title: 'Aula 7 - Funções e Exercícios', url: 'https://www.youtube.com/embed/6dfDbg7gNIM?si=BLTuJvHD2ZZHJm5O' },
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

                <h3 className='my-3 text-sm-start text-center'>CURSO PYTHON - INICIANTE</h3>
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
                        BACKEND
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
                                    Seja muito bem-vindo(a) ao curso de Python, onde você aprenderá desde o básico da linguagem até o uso de funções e estruturas de dados. O curso é focado no aprendizado prático, com aulas objetivas e diretas, ideais para quem está começando a programar.
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
                                                            <strong>JOÃO LIRA</strong>

                                                            <p className='description-p m-0 mt-1'>Fullstack Developer | DATA ANALYST</p>
                                                        </p>
                                                    </div>
                                                </div>
                                            </AccordionHeader>
                                            <AccordionBody accordionId="1">
                                                João Lira é um desenvolvedor Fullstack com experiência em várias linguagens de programação e análise de dados. Ele tem uma abordagem prática e descontraída, que busca tornar o aprendizado de Python acessível e interessante para iniciantes.
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
                        Seja muito bem-vindo(a) ao curso de Python, onde você aprenderá desde o básico da linguagem até o uso de funções e estruturas de dados.
                    </div>

                    <div className="profile d-flex align-items-center mt-5 d-lg-block d-none">
                        <Accordion flush open={open} toggle={toggleAccordion} className='w-100'>
                            <h4 className='my-4 mx-4'>Educador</h4>
                            <AccordionItem className='p-2'>
                                <AccordionHeader targetId="1">
                                    <div className='w-100'>
                                        <div className='d-flex align-items-center '>
                                            <div className='profile-photo me-3 d-flex justify-content-center align-items-center'><img src={profile} alt="PROFESSOR" /></div>
                                            <p className='m-0'>
                                                <strong>JOÃO LIRA</strong>

                                                <p className='description-p m-0 mt-1'>Fullstack Developer | DATA ANALYST</p>
                                            </p>
                                        </div>
                                    </div>
                                </AccordionHeader>
                                <AccordionBody accordionId="1">
                                    João Lira é um desenvolvedor Fullstack com experiência em várias linguagens de programação e análise de dados. Ele tem uma abordagem prática e descontraída, que busca tornar o aprendizado de Python acessível e interessante para iniciantes.
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

export default CoursePythonView;
