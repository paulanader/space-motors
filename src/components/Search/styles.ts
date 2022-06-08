import styled from 'styled-components';

export const MainContainer = styled.div`
    background-color: var(--color-black);
    display: grid;
    margin-top: -5%;
    padding: 50px;
    @media (max-width: 576px) {
        padding: 20px;
    }
`;

export const SeachButton = styled.button`
    background-color: var(--color-yellow);
    border: none;
    font-size: 1.5rem;
`;

export const Input = styled.input`
    border: none;
    @media (max-width: 576px) {
    }
`;
