import { Container } from './style';

export function PopupIntensive ({ isPopUpIntensiveOpen }) {
    return (
        <Container className={isPopUpIntensiveOpen ? 'popupIntensive-open' : 'popupProfile-close'}>
            <h1>Calendário</h1>
        </Container>
    )
}