import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CoursesView from './Pages/Courses/CoursesView';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/courses" element={<CoursesView />} />
      </Routes>
    </Router>
  );
};

export default App;
