import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CoursesView from './Pages/Courses/CoursesView';
import "./Styles/Global.css"
import CourseReactView from './Pages/Courses/components/REACTJS/CourseReactView';
import CourseSASSView from './Pages/Courses/components/SASS/CourseSASSView';
import CourseNodeView from './Pages/Courses/components/NODEJS/CourseNodeView';
import CoursePythonView from './Pages/Courses/components/PYTHON/CoursePythonView';
import CourseJavaView from './Pages/Courses/components/JAVA/CourseJavaView';
import CourseJSView from './Pages/Courses/components/JAVASCRIPT/CourseJSView';
import CourseCSSView from './Pages/Courses/components/CSS/CourseCSSView';
import CourseHTMLView from './Pages/Courses/components/HTML/CourseHTMLView';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/courses" element={<CoursesView />} />
        <Route path="/courses/html" element={<CourseHTMLView />} />
        <Route path="/courses/css" element={<CourseCSSView />} />
        <Route path="/courses/javascript" element={<CourseJSView />} />
        <Route path="/courses/java" element={<CourseJavaView />} />
        <Route path="/courses/python" element={<CoursePythonView />} />
        <Route path="/courses/nodejs" element={<CourseNodeView />} />
        <Route path="/courses/sass" element={<CourseSASSView />} />
        <Route path="/courses/reactjs" element={<CourseReactView />} />
      </Routes>
    </Router>
  );
};

export default App;
