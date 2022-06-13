import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
    --color-black: #000000;
    --color-white: #ffffff;
    --color-yellow: #f4e427;
    --color-dark-gray: #282a36;
    --color-gray: #666666;
    --color-light-gray: #e3e3e3;
    --color-red: #c0392b;
    }

    html, body, #root {
        min-height: 100vh;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background-color: var(--color-dark-gray);
    }

    body,input, textarea, button {
        font-family: 'Lato';
    }   

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    input.form-control,input.form-control, input.form-control:focus {
        background-color: var(--color-dark-gray);
        border: 2px solid var(--color-dark-gray);
        color: var(--color-white);
    }

    label {
        font-size: 0.7rem;
    }

    .error {
        position: absolute;
        color: var(--color-red);
        font-size: 0.9rem;
        font-weight: bold;
    }

    .text-light-gray {
        color: var(--color-light-gray);
    }

    .cursor-pointer { cursor: pointer; }
`;
