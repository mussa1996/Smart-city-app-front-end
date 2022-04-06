import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../src/components/views/Login";
import Register from "../src/components/views/Register";
import Forgot from "../src/components/views/Forgot";
import Index from './components/Map/index';

const App = () => {
 

  return (
    <>
    <Router>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/forgot-password' component={Forgot} />
        <Route path='/' component={Index} />
      </Switch>
    </Router>
      
    </>
  );
};

export default App;
