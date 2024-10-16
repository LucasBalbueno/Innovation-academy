import { Container, ContainerForm, ContainerAllFeedbacks } from './style'
import { FeedbackCard } from '../FeedbackCard'

export const FeedbackForms = () => {
    return (
        <Container>
            <ContainerForm>
                <h1>Avalie a nossa plataforma</h1>

                <form>
                    <label>
                        Nome
                        <input type="text" placeholder="Digite seu nome completo" />
                    </label>

                    <label>
                        E-mail
                        <input type="email" placeholder="Digite seu melhor e-mail" />
                    </label>

                    <label>
                        Estrelas
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>

                    <label>
                        Comentário
                        <textarea placeholder="Deixe sua avaliação detalhada..." />
                    </label>

                    <button>
                        Enviar
                    </button>
                </form>
            </ContainerForm>

            <ContainerAllFeedbacks>
                <h1>Veja todas as nossas avaliações</h1>
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
            </ContainerAllFeedbacks>
        </ Container>
    )
}