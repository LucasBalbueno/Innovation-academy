import { EvaluationCard } from "./style";

import profileIcon from "./images/profileIcon.png";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

export function FeedbackCard({
  name,
  username,
  description,
  stars,
  myFeedback,
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
        }}
      >
        <EvaluationCard>
          <div className="profilePhoto">
            <img src={profileIcon} alt="Foto do usuário" />
          </div>
          <div className="feedbackContent">
            <h3>{name}</h3>
            <span>@{username}</span>
            <div>{starElements}</div>
            <p>{description}</p>
            <p style={{ color: " var(--contrast-color)", marginTop: "5%" }}>
              Sua Avaliação
            </p>
          </div>
        </EvaluationCard>
      </div>
    </div>
  ) : (
    <EvaluationCard>
      <div className="profilePhoto">
        <img src={profileIcon} alt="Foto do usuário" />
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
