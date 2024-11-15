import React from "react";
import { Spinner, Container } from "react-bootstrap";

const Loading = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Spinner
        animation="border"
        role="status"
        style={{ color: "rgb(9, 189, 96)" }}
      >
        <span className="visually-hidden">Carregando...</span>
      </Spinner>
    </Container>
  );
};

export default Loading;
