import styled from 'styled-components';

export const ColorFooter = styled.footer`
    background-color: var(--color-black);
    padding-top: 30px;
    padding-bottom: 30px;

    @media (max-width: 576px) {
        padding-top: 25px;
        padding-bottom: 25px;
    }
`;

export const Signature = styled.div`
    span {
        color: var(--color-gray);
    }
    a {
        text-decoration: none;
        color: var(--white);

        &:hover {
            text-decoration: underline;
            color: var(--white);
        }
    }
`;

export const Img = styled.img`
    margin-bottom: 30px;
    @media (max-width: 576px) {
        margin-bottom: 10px;
    }
`;
