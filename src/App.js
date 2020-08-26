import React from 'react';

import AppProvider from './hooks';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import ScrollToTop from './utils/scrollToTop';

import GlobalStyle from './styles/global';

const App = () => (
  <>
    <BrowserRouter>
      <AppProvider>
        <ScrollToTop/>
        <Routes />
      </AppProvider>
      <GlobalStyle />
    </BrowserRouter>
  </>
);

export default App;
