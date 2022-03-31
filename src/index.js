import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import rootReducer from './reducers'
import App from './App';
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

root.render(
  <React.StrictMode>
    <Provider store={store} >
    <App />
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals