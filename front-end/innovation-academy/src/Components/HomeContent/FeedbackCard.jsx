import { EvaluationCard } from "./style";

import profileIcon from './images/profileIcon.png';
import starsFeedback from './images/starsFeedback.png';

export function FeedbackCard () {
    return (
        <EvaluationCard>
            <div className="profilePhoto">
                <img src={profileIcon} alt="Foto do usuário" />
            </div>
            <div className="feedbackContent">
                <h3>Nome cliente</h3>
                <span>@user</span>
                <img src={starsFeedback} alt="5 estrelas" />
                <p>O curso é maravilhoso e tem muitas...</p>
            </div>
        </EvaluationCard>
    )
}