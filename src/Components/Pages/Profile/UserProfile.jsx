import styled from "styled-components";
import "../../../Styles/Global.css";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";
import axios from "axios";
import { decodeJwt } from "jose";
import Swal from "sweetalert2";
import Loading from "../../assets/Loading";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";

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

function UserProfile() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [biography, setBiography] = useState("");
  const [job, setJob] = useState("");
  const [phone, setPhone] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const alterar = await axios.patch(
        `http://localhost:8080/api/users/${id}`,
        {
          biography: biography,
          job: job,
          name: name,
          numberPhone: phone,
          technologies: technologies,
          username: username,
        }
      );
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Erro!",
        text: "Ocorreu um erro ao atualizar o perfil.",
        icon: "error",
        confirmButtonText: "Tentar novamente",
      });
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("jwt");
        const decoded = decodeJwt(token);
        const response = await axios.get(
          `http://localhost:8080/api/users/by-email?email=${decoded.sub}`
        );
        console.log(response.data);
        setId(response.data.userId);
        setTechnologies(response.data.technologies);
        setPhone(response.data.numberPhone);
        setJob(response.data.job);
        setBiography(response.data.biography);
        setEmail(response.data.email);
        setUsername(response.data.username);
        setName(response.data.name);
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: "Erro!",
          text: "Ocorreu um erro ao atualizar o perfil.",
          icon: "error",
          confirmButtonText: "Tentar novamente",
        });
      }
    })();
  }, []);

  const formatarTelefone = (value) => {
    const apenasNumeros = value.replace(/\D/g, "");
    if (apenasNumeros.length <= 10) {
      return apenasNumeros.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else {
      return apenasNumeros.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    }
  };

  return (
    <>
      {/* INFORMAÇÃO DO USUÁRIO */}
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className="container-fluid layout">
            <div className="container d-flex align-items-center justify-content-center p-3 gap-3">
              <div className="mx-2">
                <CgProfile
                  color="#00FF7E"
                  size={200}
                  style={{
                    borderRadius: "50%",
                    border: "2px solid #00FF7E",
                  }}
                />
              </div>

              <div>
                <h1>{name}</h1>
                <h1 style={{ color: "#00FF7E" }}>@{username}</h1>
                <span style={{ color: "#00FF7E" }}>{job}</span>
                <p className="my-3">{biography}</p>
                <span style={{ color: "#00FF7E" }}>{technologies}</span>
              </div>
            </div>

            {/* FAZER ALTERAÇÕES NO USUÁRIO */}
            <form className="container-fluid layout">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 mt-5">
                    <label className="px-2">Nome Completo</label>
                    <Input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-lg-6 mt-5">
                    <label className="px-2">Nome de Usuário</label>
                    <Input
                      type="text"
                      name="surname"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-lg-6 mt-5">
                    <label className="px-2">Email de notificação</label>
                    <Input type="text" name="email" value={email} readOnly />
                  </div>
                  <div className="col-lg-6 mt-5">
                    <label className="px-2">Telefone</label>
                    <Input
                      type="tel"
                      name="number"
                      placeholder="Telefone com (DDD)"
                      maxLength={15}
                      value={phone}
                      onChange={(e) => {
                        setPhone(formatarTelefone(e.target.value));
                      }}
                    />
                  </div>
                  <div className="col-lg-6 mt-5">
                    <label className="px-2">Profissão</label>
                    <Input
                      type="text"
                      name="profession"
                      placeholder="Com o que você trabalha?"
                      value={job}
                      onChange={(e) => {
                        setJob(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-lg-6 mt-5">
                    <label className="px-2">Tecnologias</label>
                    <Input
                      type="text"
                      name="tecnologies"
                      placeholder="Quais tecnologias você domina?"
                      value={technologies}
                      onChange={(e) => {
                        setTechnologies(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label className="px-2">Biografia</label>
                  <BioText
                    rows="6"
                    name="bio"
                    placeholder="Conte um pouco sobre você"
                    value={biography}
                    onChange={(e) => {
                      setBiography(e.target.value);
                    }}
                  />
                </div>

                <div className="d-flex justify-content-center">
                  <GreenBtn onClick={handleSubmit}>SALVAR ALTERAÇÕES</GreenBtn>
                </div>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}

export default UserProfile;
