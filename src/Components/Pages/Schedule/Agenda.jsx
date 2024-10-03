import styled from 'styled-components';
import '../../../Styles/Global.css'
import MyBigCalendar from './MyBigCalendar'

function Agenda() {
  const events = [
    {
      title: 'Inscrições do curso de React',
      start: new Date(2024, 9, 5, 10, 0), // Data e hora de início
      end: new Date(2024, 9, 5, 12, 0),   // Data e hora de término
    },
    {
      title: 'Evento Tecnopuc',
      start: new Date(2024, 9, 7, 14, 0),
      end: new Date(2024, 9, 7, 15, 0),
    },
  ];
  
  const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `


  return (
    <>
      <HeaderContainer>
        <h1>Agenda</h1>
        <button style={{backgroundColor: '#00FF7E', color: "#FFF", fontWeight: '600', padding: '10px'}}>Adicionar Evento</button>
      </HeaderContainer>

      <MyBigCalendar
        events={events}
      />
    </>
  )
}
  
  export default Agenda