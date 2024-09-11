import React, { useState } from 'react';
import { Badge, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import "../assets/styles/style.scss";
import { useNavigate } from 'react-router-dom';

const CourseCSSView = () => {
    const [activeTab, setActiveTab] = useState('1');
    const [currentLesson, setCurrentLesson] = useState('https://www.youtube.com/embed/yjmhSn0j8ac');
    const navigate = useNavigate();

    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    const handleLessonClick = (lessonUrl) => {
        setCurrentLesson(lessonUrl);
    };

    return (
        <div className='layout-courses container-fluid'>
            <Row className='bar'>
                <div className="d-flex align-items-center w-auto"
                    onClick={() => navigate('/courses')}
                >
                    <i className="fa fa-arrow-left me-2"></i>
                    <p className='m-0'>Voltar</p>
                </div>

                <h3 className='my-3 text-white'>CURSO CSS - INICIANTE</h3>
                <div className="d-flex">
                    <Badge
                        className='bg-transparent rounded-pill me-2 px-3 py-2'
                        style={{ border: '1px solid #94939340', fontSize: '0.7rem' }}
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
                        style={{ border: '1px solid #94939340', fontSize: '0.7rem' }}
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
                <div className="col-md-9 left-side">
                    <iframe
                        src={currentLesson}
                        title="Lesson"
                        width="100%"
                        height="700px"
                        allowFullScreen
                    ></iframe>
                    <div className="lesson-description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, asperiores. Facere iusto nulla dolorum fugit in architecto similique culpa perferendis neque officiis id labore molestias fuga nemo debitis odit consectetur atque adipisci, explicabo temporibus praesentium quia nihil soluta? Recusandae quas ad, dolores incidunt molestias laborum! Ab aliquam cumque blanditiis beatae. Natus asperiores libero quasi possimus ea deleniti at, illum assumenda soluta minima nulla facilis obcaecati saepe, magnam enim ex omnis delectus, iure in modi ad! Deleniti, a minima assumenda vitae dolor beatae ad blanditiis nulla laborum temporibus id quo officia, rem consequatur ipsa, commodi atque ullam expedita quam nisi excepturi.
                    </div>
                </div>

                <div className="col-md-3 right-side">
                    <Nav tabs className='w-100'>
                        <NavItem>
                            <NavLink
                                className={activeTab === '1' ? 'active cursor-pointer' : 'cursor-pointer'}
                                onClick={() => toggleTab('1')}
                            >
                                <i class="fa-solid fa-video"></i>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={activeTab === '2' ? 'active cursor-pointer' : 'cursor-pointer'}
                                onClick={() => toggleTab('2')}
                            >
                                <i class="fa-solid fa-book-open"></i>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab} >
                        <TabPane tabId="1" className='tab-pane'>
                            <h5 className='mb-3'>Conteúdos</h5>
                            <ul className="lesson-list">
                                <li onClick={() => handleLessonClick('https://www.youtube.com/embed/dQw4w9WgXcQ')}>Aula 1</li>
                                <li onClick={() => handleLessonClick('https://www.youtube.com/embed/oHg5SJYRHA0')}>Aula 2</li>
                                <li onClick={() => handleLessonClick('https://www.youtube.com/embed/tVj0ZTS4WF4')}>Aula 3</li>
                                <li onClick={() => handleLessonClick('https://www.youtube.com/embed/tVj0ZTS4WF4')}>Aula 4</li>
                                <li onClick={() => handleLessonClick('https://www.youtube.com/embed/tVj0ZTS4WF4')}>Aula 5</li>
                                <li onClick={() => handleLessonClick('https://www.youtube.com/embed/tVj0ZTS4WF4')}>Aula 6</li>
                            </ul>
                        </TabPane>
                        <TabPane tabId="2" className='tab-pane'>
                            <h5 className='mb-5 align-self-start'>Materiais Extras</h5>
                            <div className='d-flex flex-column align-items-center'>
                                <h1 className='text-muted text-center'>
                                    <i class="fa-regular fa-copy"></i>
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

export default CourseCSSView;
