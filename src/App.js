import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../src/components/views/Login";
import Register from "../src/components/views/Register";
import Forgot from "../src/components/views/Forgot";
import Resetpassword from "../src/components/views/Resetpassword";
import Verify from "../src/components/views/Verify";
import Index from './components/Map/index';
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import ProtectedRoute from './ProtectedRoute'
const App = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    
    <>
    <div className={darkMode ? "app dark" : "app"}></div>
    <Router>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/forgot-password' component={Forgot} />
        <Route path='/verification' component={Verify} />
        <ProtectedRoute component={Forgot} path="/forgot-password"/>
          <ProtectedRoute component={Resetpassword} path="/resetpassword"/>
        <Route path="/dashboard">
          </Route>
        <Route path='/' component={Index} />
       

      </Switch>
    </Router>
      
    </>
  );
};

export default App;
