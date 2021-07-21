import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        overflow: hidden;
    };

    :root{
        --white: #F6F4EA;
        --vanilla: #D74850;
        --gray: #323441;
        --ligthGray: rgb(0, 0, 0, 25%);
        --black: #000000;
        --orange: #FF7A00;
        --place: #676767;
        --red: #d74850
    };

    body{
        background-color: var(--gray);
        color: var(--white);
    };

    body, input {
        font-family: 'Rokkitt', serif
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: 'Roboto Mono', monospace;
        font-weight: 700;
    }

    button {
        font-family: 'Rokkitt', serif;
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;
