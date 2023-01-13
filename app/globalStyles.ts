import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &:before{
      box-sizing: border-box;
    } 
    
    &:after{
      box-sizing: border-box;
    }
  }

  html,
  body {
    height: 100%;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    overflow-y: scroll; 
    -ms-overflow-style: none;
    scrollbar-width: none;
    
    ::-webkit-scrollbar {
      display: none;
    }
    
    // to keep footer bottom of the page
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select,
  a {
    font: inherit;
    cursor: pointer;
    color: inherit;
  }

  input:focus, 
  textarea:focus, 
  select:focus{
    outline: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  a {
    text-decoration: none;
    font-weight: 700;

    &:hover {
      opacity: 0.8;
    }
  }
`;
