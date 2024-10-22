import React, { useState } from 'react';
import {
    Badge, Nav, NavItem, NavLink, Row, TabContent, TabPane,
    Accordion, AccordionBody, AccordionHeader, AccordionItem
} from 'reactstrap';
import "../assets/styles/style.scss";
import { useNavigate } from 'react-router-dom';

const CourseNodeView = () => {
    const [activeTab, setActiveTab] = useState('1');
    const [currentLesson, setCurrentLesson] = useState('https://www.youtube.com/embed/yjmhSn0j8ac');
    const [selectedLesson, setSelectedLesson] = useState('Aula 1 - Introdução e Apresentação');
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
        { title: 'Aula 1 - Introdução e Apresentação', url: 'https://www.youtube.com/embed/yjmhSn0j8ac' },
        { title: 'Aula 2 - Introdução e Apresentação', url: 'https://www.youtube.com/embed/yjmhSn0j8ac' },
        { title: 'Aula 3 - Introdução e Apresentação', url: 'https://www.youtube.com/embed/yjmhSn0j8ac' },
        { title: 'Aula 4 - Introdução e Apresentação', url: 'https://www.youtube.com/embed/yjmhSn0j8ac' },
        { title: 'Aula 5 - Introdução e Apresentação', url: 'https://www.youtube.com/embed/yjmhSn0j8ac' },
        { title: 'Aula 6 - Introdução e Apresentação', url: 'https://www.youtube.com/embed/yjmhSn0j8ac' },
        { title: 'Aula 7 - Introdução e Apresentação', url: 'https://www.youtube.com/embed/yjmhSn0j8ac' },
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

                <h3 className='my-3 text-sm-start text-center'>CURSO NODEJS - INICIANTE</h3>
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
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, asperiores. Facere iusto nulla dolorum fugit in architecto similique culpa perferendis neque officiis id labore molestias fuga nemo debitis odit consectetur atque adipisci, explicabo temporibus praesentium quia nihil soluta? Recusandae quas ad, dolores incidunt molestias laborum! Ab aliquam cumque blanditiis beatae. Natus asperiores libero quasi possimus ea deleniti at, illum assumenda soluta minima nulla facilis obcaecati saepe, magnam enim ex omnis delectus, iure in modi ad! Deleniti, a minima assumenda vitae dolor beatae ad blanditiis nulla laborum temporibus id quo officia, rem consequatur ipsa, commodi atque ullam expedita quam nisi excepturi.
                                </div>

                                <div className="profile d-flex align-items-center mt-5">
                                    <Accordion flush open={open} toggle={toggleAccordion} className='w-100'>
                                        <h4 className='my-4 mx-4'>Educador</h4>
                                        <AccordionItem className='p-2'>
                                            <AccordionHeader targetId="1">
                                                <div className='w-100'>
                                                    <div className='container-profile d-flex align-items-center '>
                                                        <div className='profile-photo me-3 d-flex justify-content-center align-items-center'>Foto</div>
                                                        <p className='m-0'>
                                                            <strong>Nome do Professor</strong>

                                                            <p className='description-p m-0 mt-1'>Lorem ipsum dolor | Quas, voluptatum!</p>

                                                        </p>
                                                    </div>
                                                </div>
                                            </AccordionHeader>
                                            <AccordionBody accordionId="1">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor dicta porro ab cum odio necessitatibus, sed quisquam quos maiores eum illum sit harum a deleniti quod temporibus ipsam. Pariatur!
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
                                    <h1 className='text-muted text-center'>
                                        <i className="fa-regular fa-copy"></i>
                                    </h1>
                                    <p className='text-center text-muted material-text'>Não existem materiais extras relacionados a esta matéria</p>
                                </div>
                            </TabPane>
                        </TabContent></div>
                    <div className="lesson-description d-lg-block d-none">
                        <h3>Sobre a trilha</h3>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, asperiores. Facere iusto nulla dolorum fugit in architecto similique culpa perferendis neque officiis id labore molestias fuga nemo debitis odit consectetur atque adipisci, explicabo temporibus praesentium quia nihil soluta? Recusandae quas ad, dolores incidunt molestias laborum! Ab aliquam cumque blanditiis beatae. Natus asperiores libero quasi possimus ea deleniti at, illum assumenda soluta minima nulla facilis obcaecati saepe, magnam enim ex omnis delectus, iure in modi ad! Deleniti, a minima assumenda vitae dolor beatae ad blanditiis nulla laborum temporibus id quo officia, rem consequatur ipsa, commodi atque ullam expedita quam nisi excepturi.
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
                                                <strong>Nome do Professor</strong>
                                                <p className='description-p m-0 mt-1'>Lorem ipsum dolor | Quas, voluptatum!</p>
                                            </p>
                                        </div>
                                    </div>
                                </AccordionHeader>
                                <AccordionBody accordionId="1">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor dicta porro ab cum odio necessitatibus, sed quisquam quos maiores eum illum sit harum a deleniti quod temporibus ipsam. Pariatur!
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
                                <h1 className='text-muted text-center'>
                                    <i className="fa-regular fa-copy"></i>
                                </h1>
                                <p className='text-center text-muted material-text'>Não existem materiais extras relacionados a esta matéria</p>
                            </div>
                        </TabPane>
                    </TabContent>
                </div>
            </Row>
        </div>
    );
};

export default CourseNodeView;
