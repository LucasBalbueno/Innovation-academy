import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 30rem;
    border-radius: 25px;
    background-color: var(--background-color);
    
    position: absolute;
    z-index: 2;
    right: 2rem;
    
    .popupHeader {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 2px solid var(--gray-color);
        padding: 1.5rem;
        
        .profileTitle {
            display: flex;
            align-items: center;
            gap: 1rem;
            
            h4 {
                font-size: 24px;
                text-transform: capitalize;
                color: white;
                margin: 0;
            }
            
            span {
                font-size: 20px;
                color: var(--contrast-color);
                font-weight: 400;
                margin-top: 0;
            }
        }
    }
    
    .popupOptions {
        padding: 2rem 2rem 0 2rem;

        .StyledLinkOptions {
            display: flex;
            gap: 1rem;
            align-items: center;
            padding-bottom: 2rem;
            text-decoration: none;

            img {
                width: 45px;
            }
    
            p {
                font-size: 20px;
                margin: 0;
            }

            .exitText {
                color: #FF4040;
            }
        }
    }
`;

export const StyledViewProfileLink = styled(Link)`
    background-color: var(--main-color);
    padding: 1rem;
    border-radius: 15px;

    font-size: 15px;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
`;