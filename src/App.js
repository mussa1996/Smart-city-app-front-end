import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../src/components/views/Login";
import Register from "../src/components/views/Register";
import Forgot from "../src/components/views/Forgot";
import Index from './components/Map/index';
import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
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
        <Route path="/dashboard">
            <Route index component={Home } />
            <Route path="login" component={Login} />
            <Route path="users">
              <Route  component={List} />
              <Route path=":userId" component={Single} />
              <Route
                path="new"
                component={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index component={List} />
              <Route path=":productId" component={Single } />
              <Route
                path="new"
                component={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        <Route path='/' component={Index} />
       

      </Switch>
    </Router>
      
    </>
  );
};

export default App;
