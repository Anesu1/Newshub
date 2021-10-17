import React from 'react';
import ReactDOM from 'react-dom';
import App, {client} from './App';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import Theme from './theme/theme';
import {ApolloProvider} from '@apollo/client'


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={Theme} >
          <GlobalStyle />
          <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

