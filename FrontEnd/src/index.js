import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducer';

const store = createStore(reducers,compose(
    applyMiddleware(thunk)
  ));

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
