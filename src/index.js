import React from 'react';
import ReactDOM from 'react-dom';
// import {  Router } from "react-router-dom";
import App from '../src/App';
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import rootReducer from '../src/reducers/RootReducer';
// import 'bootstrap/dist/css/bootstrap.min.css';
const store=createStore(rootReducer,applyMiddleware(thunk));
ReactDOM.render(
    <React.StrictMode>
  <Provider store={store}><App /></Provider>
</React.StrictMode>,
  document.getElementById('root')); 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import loadAuthStatus from './middleware/loadAuthStatus';
// loadAuthStatus().then(() => {
//   ReactDOM.render(<App />, document.querySelector("#root"));
// });
