import styled from 'styled-components';
import '../../../Styles/Global.css';
import { CgProfile } from "react-icons/cg";
import { useState } from 'react';

const Input = styled.input`
  background: #222226;
  color: #fff;
  border: 0;
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  margin-top: 1rem;
`

const BioText = styled.textarea`
  resize: none;
  background: #222226;
  color: #fff;
  border: 0;
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  margin-top: 1rem;
`

const GreenBtn = styled.button ` 
    background-color: #00FF7E;
    border: none;
    border-radius: 5px;
    padding: 1rem 3rem;
    margin-top: 3rem;
    color: #000;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
    transition: 0.3s ease;
    

    &:hover {
        cursor: pointer;
        background-color: rgb(23, 155, 87);
    } 
    `;

const profileExample = {
  name: 'Fulano', 
  surname: 'Silva',
  user: '@usuario123', 
  email: 'exemplo@email.com',
  number: '(51) 123456789',
  profession: 'Engenheiro de Software', 
  bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime eos vitae sed, aspernatur soluta placeat quidem expedita in iusto dolore praesentium nostrum adipisci minus! Sequi eveniet cumque necessitatibus assumenda accusantium veritatis repudiandae aspernatur unde sit officia minus cupiditate quasi at, corporis odio eligendi nihil saepe, labore, distinctio aperiam modi in.',
  tecnologies: 'JavaScript, Java, Python, HTML, CSS, C#' 
};

function UserProfile() {
  const [profile, setProfile] = useState(profileExample);

  const handleChange = (e) => {
    const {name, value} = e.target

    setProfile({
      ...profile,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()


    console.log('Dados atualizados do formulário:', profile);
  }

  return (
    <>
      {/* INFORMAÇÃO DO USUÁRIO */}
      <div className='container-fluid layout'>
        <div className="container d-flex align-items-center justify-content-center p-3 gap-3">
          
          <div className='mx-2'>
            <CgProfile color='#00FF7E' size={200} style={{
            borderRadius: '50%',
            border: '2px solid #00FF7E'
            }}/>
          </div>

          <div>
            <h1>{profileExample.name} {profileExample.surname}</h1>
            <h1 style={{color: '#00FF7E'}}>{profileExample.user}</h1>
            <span style={{color: '#00FF7E'}}>{profileExample.profession}</span>
            <p className='my-3'>{profileExample.bio}</p>
            <span style={{color: '#00FF7E'}}>{profileExample.tecnologies}</span>
          </div>
          
        </div>

        {/* FAZER ALTERAÇÕES NO USUÁRIO */}
        <form className='container-fluid layout'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 mt-5'>
                <label className='px-2'>Nome</label>
                <Input type="text" name='name' value={profile.name} onChange={handleChange}/>
              </div>
              <div className='col-lg-6 mt-5'>
                <label className='px-2'>Sobrenome</label>
                <Input type="text" name='surname' value={profile.surname} onChange={handleChange}/>
              </div>
              <div className='col-lg-6 mt-5'>
                <label className='px-2'>Email de notificação</label>
                <Input type="text" name='email' value={profile.email} onChange={handleChange}/>
              </div>
              <div className='col-lg-6 mt-5'>
                <label className='px-2'>Telefone</label>
                <Input type="text" name='number' value={profile.number} onChange={handleChange}/>
              </div>
              <div className='col-lg-6 mt-5'>
                <label className='px-2'>Profissão</label>
                <Input type="text" name='profession' value={profile.profession} onChange={handleChange}/>
              </div>
              <div className='col-lg-6 mt-5'>
                <label className='px-2'>Tecnologias</label>
                <Input type="text" name='tecnologies' value={profile.tecnologies} onChange={handleChange}/>
              </div>
            </div>

            <div className='mt-5'>
              <label className='px-2'>Biografia</label>
              <BioText rows="6" name='bio' value={profile.bio} onChange={handleChange}/>
            </div>

            <div className='d-flex justify-content-center'>
              <GreenBtn onClick={handleSubmit}>
                SALVAR ALTERAÇÕES
              </GreenBtn>
            </div>
          </div>
        </form>
      </div>
      </>
    )
  }
  
  export default UserProfile