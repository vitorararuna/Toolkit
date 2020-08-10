import { createGlobalStyle } from 'styled-components';
// import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  *{
    margin: 0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }
  body{
    background: #d6e4d6;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font:14px Roboto, sans-serif;
  }
  #root{
    max-width: 1185px;
    margin: 0 auto;
    padding: 0 5px 10px; /* cima lateral baixo */
  }

  button {
    cursor: pointer;
  }
`;