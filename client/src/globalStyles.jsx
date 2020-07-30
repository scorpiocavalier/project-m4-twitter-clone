import { createGlobalStyle } from 'styled-components'

export const COLORS = {
  primary: 'hsl(258deg, 100%, 50%)',        // Bright purple
  primary_hover: 'hsl(258deg, 100%, 90%)',  // Translucent purple
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'sans-serif';
  }

  body {
    margin: 0 20px;
  }

  p {
    margin: 20px 0;
  }

  li {
    padding-left: 30px;
    height: 100%;
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    &:visited { color: black }
    &:hover { color: ${COLORS.primary} }
  }

  button {
    border: none;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    &:hover {
    }
  }
`