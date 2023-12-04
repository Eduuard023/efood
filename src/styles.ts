import { createGlobalStyle } from 'styled-components'

export const colors = {
  vermelho: '#E66767'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Roboto', sans-serif;
  }

  body{
    background-color: red;

    .container{
      max-width: 1024;
      width: 100%;
      margin: 0 auto;
    }
  }
`
