import React, { useState } from 'react';
import { Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import "../assets/styles/style.scss";

const CourseCSSView = () => {
    const [activeTab, setActiveTab] = useState('1');
    const [currentLesson, setCurrentLesson] = useState('https://www.youtube.com/embed/dQw4w9WgXcQ');

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
                Voltar
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
                            <h5 className='mb-3'>Materiais Extras</h5>
                            <h1 className='text-muted text-center'>
                                <i class="fa-regular fa-copy"></i>
                            </h1>

                            <p className='text-center text-muted'>Não existem materiais extras relacionados a esta matéria</p>
                        </TabPane>
                    </TabContent>
                </div>
            </Row>
        </div>
    );
};

export default CourseCSSView;
