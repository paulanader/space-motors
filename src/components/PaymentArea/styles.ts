import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--color-black);

    h3 {
        color: var(--color-yellow);
    }
`;

interface RadioBoxProps {
    isActive: boolean;
    activeColor: string;
}

export const RadioBox = styled.button<RadioBoxProps>`
    padding: 10px;
    border: none;
    background: ${props => (props.isActive ? props.activeColor : '#e3e3e3')};

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        filter: brightness(0.9);
    }

    span {
        display: inline-block;
        font-weight: bold;
    }
`;

export const Checkbox = styled.div`
    background-color: var(--color-dark);
    border: none;
`;

export const SubTitle = styled.span`
    color: var(--color-gray);
`;

export const SubmitButton = styled.button`
    background-color: var(--color-yellow);
    border: none;
    text-decoration: none;
    color: var(--color-black);

    &:hover {
        color: var(--color-black);
        opacity: 0.8;
    }
`;
