import { EvaluationCard } from "./style";

import profileIcon from "../Layout/Images/Perfil-Avatar/avatar-1.jpg";
import { FaStar, FaRegStar, FaPen } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";

export function FeedbackCard({
  name,
  username,
  description,
  stars,
  myFeedback,
  updateFeedback,
  deleteFeedback,
}) {
  const starElements = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= stars) {
      starElements.push(<FaStar key={i} style={{ color: "#FFD700" }} />);
    } else {
      starElements.push(<FaRegStar key={i} />);
    }
  }

  return myFeedback ? (
    <div>
      <div
        style={{
          border: "1px solid var(--contrast-color)",
          borderRadius: "10px 10px 10px",
          backgroundColor: "var(--background-color)",
        }}
      >
        <EvaluationCard>
          <div className="profilePhoto">
            <img
              className="img-fluid rounded-circle"
              src={profileIcon}
              alt="Foto do usuário"
            />
          </div>
          <div className="feedbackContent">
            <h3>{name}</h3>
            <span>@{username}</span>
            <div>{starElements}</div>
            <p>{description}</p>
            <p
              style={{
                color: " var(--contrast-color)",
                marginTop: "5%",
                display: "flex",
                alignItems: "center",
                gap: "5%",
              }}
            >
              Sua Avaliação
              <button
                style={{
                  background: "none",
                  border: "none",
                }}
                onClick={deleteFeedback}
              >
                <MdDeleteForever style={{ fontSize: "30px" }} color="red" />
              </button>
              <button
                style={{
                  background: "none",
                  border: "none",
                }}
                onClick={updateFeedback}
              >
                <FaPen color="white" />
              </button>
            </p>
          </div>
        </EvaluationCard>
      </div>
    </div>
  ) : (
    <EvaluationCard>
      <div className="profilePhoto">
        <img
          className="img-fluid rounded-circle"
          src={profileIcon}
          alt="Foto do usuário"
        />
      </div>
      <div className="feedbackContent">
        <h3>{name}</h3>
        <span>@{username}</span>
        <div>{starElements}</div>
        <p>{description}</p>
      </div>
    </EvaluationCard>
  );
}
