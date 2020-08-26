import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import ScrollToTop from './utils/scrollToTop';

import GlobalStyle from './styles/global';

const App = () => (
  <>
    <BrowserRouter>
      <ScrollToTop/>
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  </>
);

export default App;
