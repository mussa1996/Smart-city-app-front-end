import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from '../src/App';
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'
// import 'bootstrap/dist/css/bootstrap.min.css';
const store=createStore(rootReducer,applyMiddleware(thunk));
ReactDOM.render(
    <React.StrictMode>
  <Provider store={store}><App /></Provider>
</React.StrictMode>,
  document.getElementById('root')); 
