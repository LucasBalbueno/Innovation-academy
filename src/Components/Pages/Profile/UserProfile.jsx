import styled from 'styled-components';
import '../../../Styles/Global.css';
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Input = styled.input`
  background: var(--background-color);
  color: var(--text-color);
  border: 0;
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  margin-top: 1rem;
`;

const BioText = styled.textarea`
  resize: none;
  background: var(--background-color);
  color: var(--text-color);
  border: 0;
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  margin-top: 1rem;
`;

const GreenBtn = styled.button` 
    background-color: var(--contrast-color);
    border: none;
    border-radius: 5px;
    padding: 1rem 3rem;
    margin-top: 3rem;
    color: var(--main-color);
    font-family: var(--font-poopins);
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
    transition: 0.3s ease;

    &:hover {
        cursor: pointer;
        background-color: var(--contrast-color-hover);
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
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put('http://localhost:8080/api/user/update', profile);
      Swal.fire({
        title: 'Sucesso!',
        text: 'Perfil atualizado com sucesso.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    } catch (error) {
      Swal.fire({
        title: 'Erro!',
        text: 'Ocorreu um erro ao atualizar o perfil.',
        icon: 'error',
        confirmButtonText: 'Tentar novamente',
      });
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/user/profile');
      setProfile(response.data);
    } catch (error) {
      Swal.fire({
        title: 'Erro!',
        text: 'Não foi possível carregar os dados do usuário.',
        icon: 'error',
        confirmButtonText: 'Tentar novamente',
      });
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      {/* INFORMAÇÃO DO USUÁRIO */}
      <div className="container-fluid layout">
        <div className="container d-flex align-items-center justify-content-center p-3 gap-3">
          <div className="mx-2">
            <CgProfile
              color="#00FF7E"
              size={200}
              style={{
                borderRadius: '50%',
                border: '2px solid #00FF7E',
              }}
            />
          </div>

          <div>
            <h1>
              {profile.name} {profile.surname}
            </h1>
            <h1 style={{ color: '#00FF7E' }}>{profile.user}</h1>
            <span style={{ color: '#00FF7E' }}>{profile.profession}</span>
            <p className="my-3">{profile.bio}</p>
            <span style={{ color: '#00FF7E' }}>{profile.tecnologies}</span>
          </div>
        </div>

        {/* FAZER ALTERAÇÕES NO USUÁRIO */}
        <form className="container-fluid layout">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mt-5">
                <label className="px-2">Nome</label>
                <Input type="text" name="name" value={profile.name} onChange={handleChange} />
              </div>
              <div className="col-lg-6 mt-5">
                <label className="px-2">Sobrenome</label>
                <Input type="text" name="surname" value={profile.surname} onChange={handleChange} />
              </div>
              <div className="col-lg-6 mt-5">
                <label className="px-2">Email de notificação</label>
                <Input type="text" name="email" value={profile.email} onChange={handleChange} />
              </div>
              <div className="col-lg-6 mt-5">
                <label className="px-2">Telefone</label>
                <Input type="text" name="number" value={profile.number} onChange={handleChange} />
              </div>
              <div className="col-lg-6 mt-5">
                <label className="px-2">Profissão</label>
                <Input type="text" name="profession" value={profile.profession} onChange={handleChange} />
              </div>
              <div className="col-lg-6 mt-5">
                <label className="px-2">Tecnologias</label>
                <Input type="text" name="tecnologies" value={profile.tecnologies} onChange={handleChange} />
              </div>
            </div>

            <div className="mt-5">
              <label className="px-2">Biografia</label>
              <BioText rows="6" name="bio" value={profile.bio} onChange={handleChange} />
            </div>

            <div className="d-flex justify-content-center">
              <GreenBtn onClick={handleSubmit}>
                SALVAR ALTERAÇÕES
              </GreenBtn>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserProfile;
