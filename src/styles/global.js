import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --white: #FFF;
    --black: #1B2437;
    --gray-1: #F6F6F6;
    --gray-2: #EFEFF4;
    --gray-3: #E5E5EA;
    --gray-4: #D1D1D6;
    --gray-5: #C7C7CC;
    --gray-6: #8E8E93;
    --gray-7: #48484A;
    --pink: #EDA3B5;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-style: normal;
  }

  #root, html, body {
    height: 100%;
    width: 100%;
  }

  body {
    position: relative;
    background:	var(--white);
    color: var(--white);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 16px;
    outline: 0 !important;
  }

  h1, h2,h3,h4,h5,h6,strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
