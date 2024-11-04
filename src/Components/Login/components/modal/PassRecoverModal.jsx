import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";
import axios from "axios";

const PassRecoverModal = ({ setEsqueceuSenha }) => {
  const [email, setEmail] = useState("");
  const redefinirSenha = async () => {
    try {
      await axios.post("http://localhost:8080/send-email", { email: email });
      goToLogin();
    } catch (error) {
      console.error(error);
    }
  };

  const goToLogin = () => {
    setEsqueceuSenha(false);
  };

  return (
    <Modal show={true} centered>
      <Modal.Header style={{ backgroundColor: "rgb(27, 27, 31)" }}>
        <Modal.Title
          style={{ textAlign: "center", width: "100%", color: "white" }}
        >
          Redefinição de Senha
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "rgb(27, 27, 31)" }}>
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
          }}
        >
          <Form.Group
            controlId="formTitle"
            style={{
              marginBottom: "10px",
              textAlign: "justify ",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              padding: "30px",
            }}
          >
            <Form.Label style={{ marginBottom: "10px" }}>
              Digite seu email no campo abaixo e lhe enviaremos uma nova senha:
            </Form.Label>
            <Form.Control
              type="text"
              name="title"
              style={{
                color: "var(--text-color)",
                backgroundColor: "var(--main-color)",
                border: "1px solid transparent",
                padding: "3%",
                borderRadius: "5px",
                marginBottom: "5%",
              }}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
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
            style={{ color: "white", backgroundColor: "rgb(9, 189, 96)" }}
            onClick={redefinirSenha}
          >
            Redefinir senha
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "rgb(27, 27, 31)" }}>
        <Modal.Title
          style={{
            fontSize: "14px",
            textAlign: "center",
            width: "100%",
            color: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              padding: "5px",
              gap: "5px",
            }}
          >
            Ja possui cadastro?
            <p
              style={{
                color: "rgb(9, 189, 96)",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => goToLogin()}
            >
              Faça seu login.
            </p>
          </div>
        </Modal.Title>
      </Modal.Footer>
    </Modal>
  );
};

export default PassRecoverModal;
