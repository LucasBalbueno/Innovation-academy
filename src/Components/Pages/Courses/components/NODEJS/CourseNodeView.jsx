import React, { useState } from 'react';
import {
    Badge, Nav, NavItem, NavLink, Row, TabContent, TabPane,
    Accordion, AccordionBody, AccordionHeader, AccordionItem
} from 'reactstrap';
import "../assets/styles/style.scss";
import { useNavigate } from 'react-router-dom';

import profile from "../../assets/profile/edson_maia_profile.jpg"

const CourseNodeView = () => {
    const [activeTab, setActiveTab] = useState('1');
    const [currentLesson, setCurrentLesson] = useState('https://www.youtube.com/embed/05WeJCU8CJ4?si=r3wT2sOeRjXDhCNQ');
    const [selectedLesson, setSelectedLesson] = useState('Aula 1 - Baixar e instalar o Node JS. Testar e instalar ferramentas extras');
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
        { title: 'Aula 1 - Baixar e instalar o Node JS. Testar e instalar ferramentas extras', url: 'https://www.youtube.com/embed/05WeJCU8CJ4?si=r3wT2sOeRjXDhCNQ' },
        { title: 'Aula 2 - Criar projeto. API REST. Express. Rotas. Nodemon', url: 'https://www.youtube.com/embed/V3PUGubaSQo?si=Q6EK62RptDdTtXgm' },
        { title: 'Aula 3 - Criar Rotas GET com Express, Refatorar Código, Extensão JSON Viewer', url: 'https://www.youtube.com/embed/4GdHVfqWxOw?si=5lNHgIxewTV9RZXK' },
        { title: 'Aula 4 - Criar Rotas POST com Express, Como usar o Insomnia', url: 'https://www.youtube.com/embed/67GVpULYJ3k?si=U1_niIf1y4LCnD_1' },
        { title: 'Aula 5 - Criar Rotas GET com parâmetro no Express, Criar rota DELETE no Express', url: 'https://www.youtube.com/embed/IsomhYdkg_0?si=4NfqVtfuTT5YClsR' },
        { title: 'Aula 6 - Criar Rota PUT com parâmetro no Express para atualizar dados', url: 'https://www.youtube.com/embed/mp2aP5KoXcY?si=txJW7N8zZTfSbOGC' },
        { title: 'Aula 7 - Persistência de Dados com o MySQL, baixar, instalar e conectar', url: 'https://www.youtube.com/embed/f-hBybIPl8A?si=kfxSrxiZTiJw5o4_' },
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

                <h3 className='my-3 text-sm-start text-center'>CURSO NODE - INICIANTE</h3>
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
                                    Seja muito bem-vindo(a) ao curso de Node.js, onde você aprenderá a criar APIs RESTful com o Node.js e Express, além de integrar com bancos de dados como MySQL. O curso é voltado para iniciantes e segue uma abordagem prática, focando em resultados rápidos e eficientes.
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
                                                            <strong>EDSON MAIA</strong>
                                                            <p className='description-p m-0 mt-1'>Professor de Geografia e Informática | Desenvolvedor Web, Mobile e de Jogos | Designer</p>
                                                        </p>
                                                    </div>
                                                </div>
                                            </AccordionHeader>
                                            <AccordionBody accordionId="1">
                                                Edson Maia é um professor experiente nas áreas de Geografia e Informática, com vasta experiência como desenvolvedor web, mobile e de jogos. Além disso, é designer e tem um estilo de ensino focado na prática e na aplicação de conhecimentos em projetos reais.
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
                        Seja muito bem-vindo(a) ao curso de Node.js, onde você aprenderá a criar APIs RESTful com Node.js e Express.
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
                                                <strong>EDSON MAIA</strong>
                                                <p className='description-p m-0 mt-1'>Professor de Geografia e Informática | Desenvolvedor Web, Mobile e de Jogos | Designer</p>
                                            </p>
                                        </div>
                                    </div>
                                </AccordionHeader>
                                <AccordionBody accordionId="1">
                                    Edson Maia é um professor experiente nas áreas de Geografia e Informática, além de ser desenvolvedor web, mobile e de jogos, e também designer. Ele adota um estilo de ensino prático e voltado para o mercado.
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

export default CourseNodeView;
