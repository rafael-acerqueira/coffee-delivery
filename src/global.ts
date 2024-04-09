import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root {
    --base-title: #272221;
    --base-subtitle: #403937;
    --base-text: #574F4D;
    --base-label: #8D8686;
    --base-hover: "#D7D5D5";
    --base-button: "#E6E5E5";
    --base-input: "#EDEDED";
    --base-card: "#F3F2F2";
    --background: "FAFAFA"
    --white: "#FFFFFF"

    --yellow-dark: "#C47F17";
    --yellow: "#DBAC2C";
    --yellow: "#F1E9C9";
    --purple-dark: "#4B2995";
    --purple: "#8047F8";
    --purple-light: "#EBE5F9"
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px;
  }

  body, input-security, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`