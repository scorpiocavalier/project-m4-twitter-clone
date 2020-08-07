import { createGlobalStyle } from 'styled-components'

export const COLORS = {
  primary: 'hsl(258deg, 100%, 50%)', // Bright purple
  primary_hover: 'hsl(258deg, 100%, 90%)', // Translucent purple
}

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&family=Work+Sans:wght@700&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
  }

  .titleFont {
    font-family: 'Work Sans', sans-serif;
  }
  
  * {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    &:visited { color: black }
    &:hover { color: ${COLORS.primary} }
  }

  button {
    border: none;
    background: none;
  }

  .btn-with-shadow {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  }
`
