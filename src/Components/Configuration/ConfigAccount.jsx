import styled from 'styled-components';
import '../../Styles/Global.css';
import { useState } from 'react';

const Input = styled.input`
  background: #1A1A1E;
  color: #3D3D3D;
  border: 0;
  max-width: 634px;
  border-radius: 5px;
  padding: 10px;
`

const Select = styled.select`
  background: #1A1A1E;
  color: #00FF7E;
  text-align: center;
  border: 0;
  width: 100%;
  border-radius: 5px;
  padding: 1rem;
  margin-top: 1rem;
`

const DarkContainer = styled.div`
    background: #222226;
    border-radius: 5px;
    padding: 3rem;
`

const GreenBtn = styled.button ` 
    background-color: #00FF7E;
    border: none;
    border-radius: 5px;
    height: 2.5rem;
    max-width: 10rem;
    font-family: "Poppins", sans-serif;
    color: #000;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
    transition: 0.3s ease;

    &:hover {
        cursor: pointer;
        background-color: rgb(23, 155, 87);
    } 
`



function ConfigAccount() {
    const [preferences, setPreferences] = useState({
        theme: '1',
        textSize: '1',
        notifications: '1'
    })

    const profile = ({
        email:'example@email.com',
        password:'1234'
    });


    const changeEmail = () => {

    }

    const changePassword = () => {

    }

    const handleChange = (e) => {
        const {name, value} = e.target

        setPreferences({
        ...preferences,
        [name]: value
        })

    }

    return (
        <>
        <div className='container-fluid layout'>
            <div className='container d-grid gap-5 p-3'>
                
                <div>
                    <h1>Dados de acesso</h1>
                    <DarkContainer>
                        <div className='row d-flex justify-content-center align-items-end gap-3'>
                            <div className='col-lg-6 d-flex flex-column'>
                                <label className='px-2'>Email</label>
                                <Input type="email" name='email' disabled value={profile.email}/>
                            </div>
                            <GreenBtn className='col-lg-6' onClick={changeEmail}>Alterar</GreenBtn>
                        </div>
                        <div className='row d-flex justify-content-center align-items-end mt-3 gap-3'>
                            <div className='col-lg-6 d-flex flex-column'>
                                <label className='px-2'>Senha</label>
                                <Input type="password" name='password' disabled value={profile.password}/>
                            </div>
                            <GreenBtn onClick={changePassword}>Alterar</GreenBtn>
                        </div>
                    </DarkContainer>
                </div>

                <div>
                    <h1>Preferências de página</h1>
                    <DarkContainer>
                        <div className='row d-flex justify-content-center align-items-center gap-3'>
                            
                            <div className='col-lg-3 d-flex flex-column justify-content-center align-itens-center mt-5'>
                                <label className='text-center'>Tema da Página</label>
                                <Select id='theme' name='theme' value={preferences.theme} onChange={handleChange}>
                                    <option value='1'>Escuro</option>
                                    <option value='2'>Claro</option>
                                </Select>
                            </div>
                            <div className='col-lg-3 d-flex flex-column justify-content-center align-itens-center mt-5'>
                                <label className='text-center'>Tamanho do texto</label>
                                <Select id='textSize' name='textSize' value={preferences.textSize} onChange={handleChange}>
                                    <option value='1'>Padrão</option>
                                    <option value='2'>120%</option>
                                    <option value='3'>130%</option>
                                </Select>
                            </div>
                            <div className='col-lg-3 d-flex flex-column justify-content-center align-itens-center mt-5'>
                                <label className='text-center'>Notificações</label>
                                <Select id='notifications' name='notifications' value={preferences.notifications} onChange={handleChange}>
                                    <option value='1'>Sempre</option>
                                    <option value='2'>Nunca</option>
                                </Select>
                            </div>
                        </div>
                    </DarkContainer>
                </div>

            </div>
        </div>
        </>
    )
}

export default ConfigAccount