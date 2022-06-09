import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BackgroundCard = styled.div`
    background-color: var(--color-black);

    h4,
    h3 {
        color: var(--color-yellow);
    }

    & > div:nth-child(1) {
        @media (max-width: 575px) {
            flex-basis: 100px;
            margin-right: 30px;
        }
    }
`;

export const SubTitle = styled.span`
    color: var(--color-gray);
`;

export const LinkDecoration = styled(Link)`
    text-decoration: none;
    color: var(--color-yellow);

    &:hover {
        color: var(--color-yellow);
        opacity: 0.7;
    }
`;
