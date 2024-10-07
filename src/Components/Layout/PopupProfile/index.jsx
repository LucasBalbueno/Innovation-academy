import { Container } from './style'

export function PopupProfile ({ isPopUpOpen }) {
    return (
        <Container className={isPopUpOpen ? "popupProfile-open" : "popupProfile-close"}>
            <h1>Hello World</h1>
        </Container>
    )
}