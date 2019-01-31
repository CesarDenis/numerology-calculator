import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './utils/theme';
import GlobalStyle from './styles/global';

import Home from './pages/Home';

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Home />
    </>
  </ThemeProvider>
);

export default App;
