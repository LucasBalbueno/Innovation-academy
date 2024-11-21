import { EvaluationCard } from "./style";

import profileIcon from "../Layout/Images/Perfil-Avatar/avatar-1.jpg";
import { FaStar, FaRegStar, FaPen } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function FeedbackCard({
  name,
  username,
  description,
  stars,
  myFeedback,
  updateFeedback,
  deleteFeedback,
}) {
  const location = useLocation();
  const starElements = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= stars) {
      starElements.push(<FaStar key={i} style={{ color: "#FFD700" }} />);
    } else {
      starElements.push(<FaRegStar key={i} />);
    }
  }
  const shouldShowButtons =
    myFeedback && location.pathname === "/home/feedbacks";

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
          <div className="feedbackContent">
            <h3>{name}</h3>
            <span>@{username}</span>
            <div>{starElements}</div>
            <p>{description}</p>
            {shouldShowButtons && (
              <div>
                {" "}
                <button
                  style={{ background: "none", border: "none" }}
                  onClick={deleteFeedback}
                >
                  <MdDeleteForever style={{ fontSize: "30px" }} color="red" />
                </button>
                <button
                  style={{ background: "none", border: "none" }}
                  onClick={updateFeedback}
                >
                  <FaPen color="white" />
                </button>
              </div>
            )}
          </div>
        </EvaluationCard>
      </div>
    </div>
  ) : (
    <EvaluationCard>
      <div className="feedbackContent">
        <h3>{name}</h3>
        <span>@{username}</span>
        <div>{starElements}</div>
        <p>{description}</p>
      </div>
    </EvaluationCard>
  );
}
