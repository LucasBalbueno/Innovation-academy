import { Container, ContainerForm, ContainerAllFeedbacks } from "./style";
import { FeedbackCard } from "../FeedbackCard";
import axios from "axios";
import { decodeJwt } from "jose";
import Swal from "sweetalert2";
import Loading from "../../assets/Loading";
import { useState, useEffect } from "react";

export const FeedbackForms = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [stars, setStars] = useState(0);
  const [description, setDescription] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [editingFeedback, setEditingFeedback] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [feedbackId, setFeedbackId] = useState(0);

  const sendFeedback = async () => {
    setIsLoading(true);
    try {
      if (isEditing) {
        await axios.put(`http://localhost:8080/api/feedbacks/${feedbackId}`, {
          feedbackStars: stars,
          feedbackDescription: description,
          feedbackName: name,
          feedbackUsername: username,
        });
        Swal.fire({
          icon: "success",
          title: "Tudo certo!",
          text: "Avaliação atualizada com sucesso!",
        });
      } else {
        await axios.post("http://localhost:8080/api/feedbacks", {
          feedbackName: name,
          feedbackUsername: username,
          feedbackStars: stars,
          feedbackDescription: description,
        });
        Swal.fire({
          icon: "success",
          title: "Tudo certo!",
          text: "Avaliação realizada com sucesso! Muito Obrigado!",
        });
      }
      setIsEditing(false);
      setEditingFeedback(null);
      setStars(0);
      setDescription("");
      fetchFeedbacks();
      setIsLoading(false);
    } catch (error) {
      Swal.fire({
        title: "Erro!",
        text: "Ocorreu um erro ao fazer a avaliação.",
        icon: "error",
        confirmButtonText: "Tentar novamente",
      });
      setIsLoading(false);
    }
  };

  const fetchFeedbacks = async () => {
    try {
      const allFeedbacks = await axios.get(
        "http://localhost:8080/api/feedbacks"
      );
      setFeedbacks(allFeedbacks.data);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Erro!",
        text: "Ocorreu um erro ao carregar os feedbacks.",
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
        setUsername(response.data.username);
        setName(response.data.name);
        fetchFeedbacks();
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
  }, [refresh]);

  const handleRefresh = () => {
    setRefresh((prev) => !prev);
  };

  const deleteFeedback = async (id) => {
    setIsLoading(true);
    try {
      await axios.delete(`http://localhost:8080/api/feedbacks/${id}`);
      Swal.fire({
        icon: "success",
        title: "Tudo certo!",
        text: "Sua avaliação foi deletada!",
      });
      setIsLoading(false);
      fetchFeedbacks();
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Erro!",
        text: "Ocorreu um erro ao tentar deletar a avaliação!",
        icon: "error",
        confirmButtonText: "Tentar novamente",
      });
      setIsLoading(false);
    }
  };

  const updateFeedback = (feedback) => {
    if (feedback && feedback.feedback_id) {
      setIsEditing(true);
      setEditingFeedback(feedback);
      setStars(feedback.feedbackStars);
      setDescription(feedback.feedbackDescription);
      setFeedbackId(feedback.feedback_id);
    } else {
      console.error("Feedback não contém o campo 'feedback_id'.");
    }
  };

  return isLoading ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Loading />
    </div>
  ) : (
    <Container>
      <ContainerForm>
        <h1>Avalie a nossa plataforma</h1>

        <form>
          <label>
            Estrelas
            <select
              value={stars}
              onChange={(event) => setStars(Number(event.target.value))}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>

          <label>
            Comentário
            <textarea
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Deixe sua avaliação detalhada..."
              value={description}
            />
          </label>
        </form>
        <button onClick={sendFeedback}>
          {isEditing ? "Atualizar Avaliação" : "Enviar"}
        </button>
      </ContainerForm>

      <ContainerAllFeedbacks>
        <h1>Veja todas as nossas avaliações</h1>
        {feedbacks.length === 0 ? (
          <p>Ninguém realizou nenhuma avaliação até o momento.</p>
        ) : (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            {feedbacks.map((conteudo, index) => (
              <FeedbackCard
                key={index}
                name={conteudo.feedbackName}
                username={conteudo.feedbackUsername}
                description={conteudo.feedbackDescription}
                stars={conteudo.feedbackStars}
                myFeedback={conteudo.feedbackUsername === username}
                updateFeedback={() => updateFeedback(conteudo)}
                deleteFeedback={() => deleteFeedback(conteudo.feedback_id)}
              />
            ))}
          </div>
        )}
      </ContainerAllFeedbacks>
    </Container>
  );
};
