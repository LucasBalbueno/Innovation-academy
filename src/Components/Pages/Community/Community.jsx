import '../../../Styles/Global.css'
import styled from 'styled-components';

const GreenBtn = styled.a` 
    background-color: var(--contrast-color);
    border: none;
    padding: 3%;
    font-family: var(--font-poopins);
    margin-bottom: 5%;
    color: var(--text-color);
    border-radius: 5px 5px 5px;
    font-size: 15px;
    transition: 0.3s ease;
    width: 100%;
    text-align: center;
    font-size: 25px;
    color: var(--main-color);
    cursor: pointer;
    text-decoration: none;
    `;

function Community() {
  
    return (
      <>
      <div className='container-fluid layout'>
        <div className="container">
            <h1>Comunidade</h1>
            <h3>Entre no nosso Discord!</h3>
            <div className='d-flex align-items-center justify-content-center'>
                <GreenBtn href='https://discord.gg/aJAE8jk8' target='_blank'>
                    Link do nosso Discord
                </GreenBtn>
            </div>
        </div>

      </div>
      
      </>
    )
  }
  
  export default Community