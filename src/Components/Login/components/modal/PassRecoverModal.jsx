import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { RiCloseLargeLine } from "react-icons/ri";
import axios from "axios";
import Loading from "../../../assets/Loading";
import Swal from 'sweetalert2';

const PassRecoverModal = ({ setEsqueceuSenha }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [emailEnviado, setEmailEnviado] = useState(false);

  const redefinirSenha = async () => {
    try {
      setIsLoading(true);
      await axios.post("http://localhost:8080/send-email", { email: email });
      setIsLoading(false);
      setEmailEnviado(true);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Email não enviado!',
        text: 'Ocorreu um erro ao enviar o email, tente novamente mais tarde!',
        confirmButtonText: 'OK'
      });
      setEsqueceuSenha(false);
      console.error(error);
    }
  };

  const goToLogin = () => {
    setEsqueceuSenha(false);
  };

  return (
    <Modal show={true} centered>
      {isLoading ? (
        <Modal.Body
          style={{
            backgroundColor: "rgb(27, 27, 31)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
            borderRadius: "5px",
          }}
        >
          <Loading />
        </Modal.Body>
      ) : (
        <>
          <Modal.Header style={{ backgroundColor: "rgb(27, 27, 31)" }}>
            <Modal.Title
              style={{ textAlign: "center", width: "100%", color: "white" }}
            >
              {emailEnviado ? (
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Email Enviado
                </span>
              ) : (
                <>
                  <RiCloseLargeLine
                    style={{
                      cursor: "pointer",
                      color: "white",
                      position: "absolute",
                      right: "10",
                    }}
                    onClick={goToLogin}
                  />
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Redefinição de Senha
                  </span>
                </>
              )}
            </Modal.Title>
            {emailEnviado && (
              <RiCloseLargeLine
                style={{ cursor: "pointer", color: "white" }}
                onClick={goToLogin}
              />
            )}
          </Modal.Header>

          <Modal.Body style={{ backgroundColor: "rgb(27, 27, 31)" }}>
            {!emailEnviado ? (
              <Form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <Form.Group
                  controlId="formEmail"
                  style={{
                    marginBottom: "10px",
                    textAlign: "justify",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    padding: "30px",
                  }}
                >
                  <Form.Label style={{ marginBottom: "10px" }}>
                    Digite seu email no campo abaixo e lhe enviaremos uma nova
                    senha:
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    style={{
                      color: "var(--text-color)",
                      backgroundColor: "var(--main-color)",
                      border: "1px solid transparent",
                      padding: "3%",
                      borderRadius: "5px",
                      marginBottom: "5%",
                    }}
                    onChange={(event) => setEmail(event.target.value)}
                    onFocus={(event) => {
                      event.target.style.borderColor = "var(--contrast-color)";
                      event.target.style.outline = "none";
                    }}
                    onBlur={(event) => {
                      event.target.style.borderColor = "transparent";
                    }}
                  />
                </Form.Group>
                <Button
                  style={{
                    color: "white",
                    backgroundColor: "rgb(9, 189, 96)",
                  }}
                  onClick={redefinirSenha}
                >
                  Redefinir senha
                </Button>
              </Form>
            ) : (
              <div style={{ color: "white", textAlign: "center" }}>
                <p>Por favor, verifique sua caixa de entrada.</p>
              </div>
            )}
          </Modal.Body>
        </>
      )}
    </Modal>
  );
};

export default PassRecoverModal;
