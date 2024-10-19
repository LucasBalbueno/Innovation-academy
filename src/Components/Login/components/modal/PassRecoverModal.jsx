import React,{useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap'
import { Link } from 'react-bootstrap-icons';

const PassRecoverModal = ({setEsqueceuSenha}) =>{
    
    const redefinirSenha = () => {
        
    }
    
    const goToLogin = () => {
        setEsqueceuSenha(false)
    } 

    return(
        <Modal show={true} centered>
            <Modal.Header style={{backgroundColor: 'rgb(27, 27, 31)'}}>
            <Modal.Title style={{ textAlign: 'center', width: '100%', color: "white" }}>      
                Redefinição de Senha</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: 'rgb(27, 27, 31)'}}>
            <Form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: "white"  }}>
                <Form.Group
                    controlId="formTitle"
                    style={{
                    marginBottom: '10px',
                    textAlign: 'justify ',
                    justifyContent: "center",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', // Centraliza verticalmente
                    width: '100%',
                    padding: '30px'
                }}
                >
                    <Form.Label style={{ marginBottom: '10px' }}>
                    Digite seu email no campo abaixo e lhe enviaremos uma nova senha: 
                    </Form.Label>
                    <Form.Control
                    type="text"
                    name="title"
                    style={{backgroundColor: "rgb(27, 27, 31)"}}/>
                </Form.Group>
                <Button style={{color: "white", backgroundColor: 'rgb(9, 189, 96)'}} onClick={() => goToLogin()}>
                    Redefinir senha
                </Button>
            </Form>
            </Modal.Body>
            <Modal.Footer style={{backgroundColor: "rgb(27, 27, 31)"}}>
                <Modal.Title style={{ fontSize: '14px', textAlign: 'center', width: '100%', color: 'white' }}>
                    <div style={{display: 'flex', flexDirection: "row", justifyContent: 'center', padding: "5px"}}>
                        Ja possui cadastro? 
                        <p style={{color: 'rgb(9, 189, 96)', textDecoration: "underline"}}>Faça seu login.</p>

                    </div>
                </Modal.Title>
            </Modal.Footer>
        </Modal>
    )
}

export default PassRecoverModal;