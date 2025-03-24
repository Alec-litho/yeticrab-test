import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@gravity-ui/uikit';
import "./styles/globals.css" 
import "./styles/reset.css"
import '@gravity-ui/uikit/styles/styles.css';
import { store } from './store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
    <ThemeProvider theme={'light'}>
        <App />

        </ThemeProvider>

    </Provider>

);
