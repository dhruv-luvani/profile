import React from 'react';
import ReactDOM from 'react-dom/client';
import './custom.css';
import '@splidejs/react-splide/css';
import 'react-nice-scroll/dist/styles.css';
import App from './App';
import { BrowserRouter } from "react-router";
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ScrollContainer } from 'react-nice-scroll';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ScrollContainer activeSmoothScrollOnTouchDevice={false} alwaysShowTracks={true} >
          <App />
        </ScrollContainer>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
