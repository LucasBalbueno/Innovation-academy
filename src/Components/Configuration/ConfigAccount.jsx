import styled from 'styled-components';
import '../../Styles/Global.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import { getUserData } from '../../Services/userData';

const Input = styled.input`
  background: var(--background-color);
  color: var(--gray-color);
  border: 0;
  max-width: 634px;
  border-radius: 5px;
  padding: 10px;
`;

const Select = styled.select`
  background: var(--background-color);
  color: var(--contrast-color);
  text-align: center;
  border: 0;
  width: 100%;
  border-radius: 5px;
  padding: 1rem;
  margin-top: 1rem;
`;

const DarkContainer = styled.div`
  background: var(--main-color);
  border-radius: 5px;
  padding: 3rem;
`;

const GreenBtn = styled.button`
  background-color: var(--contrast-color);
  border: none;
  border-radius: 5px;
  height: 2.5rem;
  max-width: 10rem;
  font-family: var(--font-poopins);
  color: var(--main-color);
  font-size: calc(16px * var(--font-size-multiplier));
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  transition: 0.3s ease;

  &:hover {
    cursor: pointer;
    background-color: var(--contrast-color-hover);
    transition: all .5s;
  }
`;

function ConfigAccount() {
    const [profile, setProfile] = useState({
        email: '',
        password: '',
    });
    const [isEditingEmail, setIsEditingEmail] = useState(false);
    const [isEditingPassword, setIsEditingPassword] = useState(false);

    const navigate = useNavigate();

    const changeEmail = async () => {
        setIsEditingEmail(true);
    };

    const saveEmail = async () => {
        try {
            const userData = await getUserData();
            await axios.patch(`http://localhost:8080/api/users/${userData.userId}`, {
                email: profile.email
            });

            Swal.fire({
                icon: 'success',
                title: 'Email atualizado',
                text: 'Seu email foi alterado com sucesso! Por motivos de segurança, faça login novamente.',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/')
                    localStorage.clear();
                    window.location.reload();
                }
            });

            setIsEditingEmail(false);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Não foi possível atualizar o email.',
            });
        }
    };

    const changePassword = async () => {
        setIsEditingPassword(true);
    };

    const savePassword = async (event) => {
        try {
            const userData = await getUserData();
            await axios.patch(`http://localhost:8080/api/users/${userData.userId}`, {
                password: profile.password
            });

            Swal.fire({
                icon: 'success',
                title: 'Senha atualizada',
                text: 'Sua senha foi alterada com sucesso! Por motivos de segurança, faça login novamente.',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/')
                    localStorage.clear();
                    window.location.reload();
                }
            });

            setIsEditingPassword(false);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Não foi possível atualizar a senha.',
            });
        }
    };

    const handleThemeButton = async (event) => {
        const userData = await getUserData();

        if (event.target.value !== 'select') {
            const responseUpdate = await axios.patch(`http://localhost:8080/api/preferences/user/${userData.userId}`, {
                theme: event.target.value.toUpperCase()
            });
        }

        window.location.reload();
    };

    const handleFontChange = async (event) => {
        const userData = await getUserData();
        
        if (event.target.value !== 'select') {
            const responseUpdate = await axios.patch(`http://localhost:8080/api/preferences/user/${userData.userId}`, {
                textSize: event.target.value.toUpperCase()
            });
        }

        window.location.reload();
    };

    return (
        <div className="container-fluid layout">
            <div className="container d-grid gap-5 p-3">
                <div>
                    <h1>Dados de acesso</h1>
                    <DarkContainer>
                        <div className="row d-flex justify-content-center align-items-end gap-3">
                            <div className="col-lg-6 d-flex flex-column">
                                <label className="px-2">Email</label>
                                {isEditingEmail ? (
                                    <Input
                                        type="email"
                                        name="email"
                                        value={profile.email}
                                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                                    />
                                ) : (
                                    <Input type="email" name="email" disabled value={profile.email} />
                                )}
                            </div>
                            {isEditingEmail ? (
                                <GreenBtn className="col-lg-6" onClick={saveEmail}>Salvar</GreenBtn>
                            ) : (
                                <GreenBtn className="col-lg-6" onClick={changeEmail}>Alterar</GreenBtn>
                            )}
                        </div>
                        <div className="row d-flex justify-content-center align-items-end mt-3 gap-3">
                            <div className="col-lg-6 d-flex flex-column">
                                <label className="px-2">Senha</label>
                                {isEditingPassword ? (
                                    <Input
                                        type="password"
                                        name="password"
                                        value={profile.password}
                                        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
                                    />
                                ) : (
                                    <Input type="password" name="password" disabled value={profile.password} />
                                )}
                            </div>
                            {isEditingPassword ? (
                                <GreenBtn onClick={savePassword}>Salvar</GreenBtn>
                            ) : (
                                <GreenBtn onClick={changePassword}>Alterar</GreenBtn>
                            )}
                        </div>
                    </DarkContainer>
                </div>

                <div>
                    <h1>Preferências de página</h1>
                    <DarkContainer>
                        <div className="row d-flex justify-content-center align-items-center gap-3">
                            <div className="col-lg-3 d-flex flex-column justify-content-center align-itens-center mt-5">
                                <label className="text-center">Tema da Página</label>
                                <Select id="theme" name="theme" onChange={handleThemeButton}>
                                    <option value="select">Selecionar</option>
                                    <option value="dark">Escuro</option>
                                    <option value="light">Claro</option>
                                </Select>
                            </div>
                            <div className="col-lg-3 d-flex flex-column justify-content-center align-itens-center mt-5">
                                <label className="text-center">Tamanho do texto</label>
                                <Select
                                    id="textSize"
                                    name="textSize"
                                    onChange={handleFontChange}
                                >
                                    <option value="select">Selecionar</option>
                                    <option value="SMALL">Padrão</option>
                                    <option value="DEFAULT">120%</option>
                                    <option value="LARGE">130%</option>
                                </Select>
                            </div>
                            <div className="col-lg-3 d-flex flex-column justify-content-center align-itens-center mt-5">
                                <label className="text-center">Notificações</label>
                                <Select
                                    id="notifications"
                                    name="notifications"
                                >
                                    <option value="select">Selecionar</option>
                                    <option value="ALWAYS">Sempre</option>
                                    <option value="NEVER">Nunca</option>
                                </Select>
                            </div>
                        </div>
                    </DarkContainer>
                </div>
            </div>
        </div>
    );
}

export default ConfigAccount;
