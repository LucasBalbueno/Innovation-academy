import styled from 'styled-components';
import '../../../Styles/Global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CgProfile } from "react-icons/cg";
import { useState } from 'react';

const Input = styled.input`
  background: #222226;
  color: #fff;
  border: 0;
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  margin-top: 1.5rem;
`

const profileExample = [
  { name: 'Nome', 
    surname: 'Completo',
    user: '@usuario123', 
    profession: 'Engenheiro de Software', 
    bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime eos vitae sed, aspernatur soluta placeat quidem expedita in iusto dolore praesentium nostrum adipisci minus! Sequi eveniet cumque necessitatibus assumenda accusantium veritatis repudiandae aspernatur unde sit officia minus cupiditate quasi at, corporis odio eligendi nihil saepe, labore, distinctio aperiam modi in.',
    knownTecs: 'JavaScript, Java, Python, HTML, CSS, C#' }
  
];

function UserProfile() {
  const [profile, setProfile] = useState(0);

  return (
    <>
      {/* INFORMAÇÃO DO USUÁRIO */}
      <div className='container-fluid layout'>
        <div className="container d-flex align-items-center justify-content-center p-3 gap-3">
          <div style={{
            borderRadius: '50%',
            border: '2px solid #00FF7E'
            }}>
            <CgProfile color='#00FF7E' size={200} />
          </div>

          <div>
            {profileExample.map((profile, i) => {return (
              <div key={i}>
                <h1>{profile.name} {profile.surname}</h1>
                <h3>{profile.user}</h3>
                <span>{profile.profession}</span>
                <p>{profile.bio}</p>
                <span>{profile.knownTecs}</span>

              </div>
            )})}
            
          </div>
          
        </div>

        {/* FAZER ALTERAÇÕES NO USUÁRIO */}
        <form className='container-fluid layout'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 bg-danger d-flex flex-column'>
                <label className='bg-success flex-fill'>Nome</label>
                <Input className='bg-warning flex-fill' type="text" placeholder='Nome'/>
              </div>
              <div className='col-lg-6'>
                <label>Sobrenome</label>
                <Input type="text" placeholder='Sobrenome'/>
              </div>
              <div className='col-lg-6'>
                <label>Email de notificação</label>
                <Input type="text" placeholder='exemplo@email.com'/>
              </div>
              <div className='col-lg-6'>
                <label>Telefone</label>
                <Input type="text" placeholder='(51) 123456789'/>
              </div>
              <div className='col-lg-6'>
                <label>Profissão</label>
                <Input type="text" placeholder='Engenheiro de Software'/>
              </div>
              <div className='col-lg-6'>
                <label>Tecnologias</label>
                <Input type="text" placeholder='JavaScript, Java, Python...'/>
              </div>
              

            </div>

            <label>Biografia</label>
            <Input type="text" placeholder='Escreva sua biografia =)' />
            

          </div>

          

        </form>



      </div>
      
      
      </>
    )
  }
  
  export default UserProfile