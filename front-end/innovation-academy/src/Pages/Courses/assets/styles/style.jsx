import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #121214;
  padding: 20px;
  min-height: 100vh;
`;

export const CourseCard = styled.div`
  background-color: #29292A;
  color: #00FF7E;
  border-radius: 8px;
  width: 350px;
  height: 200px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 16px;
    margin: 0;
  }
`;
