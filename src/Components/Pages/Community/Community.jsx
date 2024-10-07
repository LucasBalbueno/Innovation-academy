import '../../../Styles/Global.css'
import styled from 'styled-components';

const GreenBtn = styled.button ` 
    background-color: RGB(10, 189, 98);
    border: none;
    padding: 3%;
    font-family: "Poppins", sans-serif;
    margin-bottom: 5%;
    color: white;
    border-radius: 5px 5px 5px;
    font-size: 15px;
    transition: 0.3s ease;
    width: 100%;

    &:hover {
        cursor: pointer;
        background-color: rgb(23, 155, 87);
    } 
    `;

const inviteLink = (e) => {
    e.preventDefault();
    window.location.href='#'
} 



function Community() {
  

    return (
      <>
      <div className='container-fluid layout'>
        <div className="container">
            <h1>Comunidade</h1>
            <h3>Entre no nosso Discord!</h3>
            <div className='d-flex align-items-center justify-content-center'>
                <GreenBtn onClick={inviteLink}>
                    Link do nosso Discord
                </GreenBtn>
            </div>
        </div>

      </div>
      

      
      
      </>
    )
  }
  
  export default Community