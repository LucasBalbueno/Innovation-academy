import styled from 'styled-components';

export const Container = styled.div`
    width: 25rem;
    height: 20rem;
    background-color: var(--background-color);
    border-radius: 20px;

    position: absolute;
    right: 7%;
    z-index: 2;

    color: var(--text-color);
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 480px) {
        width: 22rem;
    }
    
    @media screen and (max-width: 390px) {
        width: 20rem;
    }

    @media screen and (max-width: 350px) {
        width: 18rem;
    }
`;