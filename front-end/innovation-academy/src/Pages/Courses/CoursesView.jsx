import React from 'react';
import { Container, CourseCard } from './assets/styles/style.jsx'; 

const courseTitles = [
  "Curso de JavaScript",
  "Curso de React",
  "Curso de Node.js",
  "Curso de Python",
  "Curso de CSS",
  "Curso de HTML",
  "Curso de TypeScript",
  "Curso de Vue.js",
  "Curso de Angular",
  "Curso de Docker",
  "Curso de Kubernetes",
  "Curso de GraphQL",
  "Curso de SQL",
  "Curso de MongoDB",
  "Curso de PHP",
  "Curso de Ruby on Rails"
];

const CoursesView = () => {
  return (
    <Container>
      {courseTitles.map((title, index) => (
        <CourseCard key={index}>
          <h2>{title}</h2>
        </CourseCard>
      ))}
    </Container>
  );
};

export default CoursesView;
