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
import Dashboard from "./user/userDashboard/Dashboard" 
import Footer from "./user/userDashboard/Footer"
import Header from "./user/userDashboard/Header"
import Menu from "./user/userDashboard/Menu"
import ADashboard from "./admin/adminDashboard/Dashboard"
import AFooter from "./admin/adminDashboard/Footer"
import AHeader from "./admin/adminDashboard/Header"
import AMenu from "./admin/adminDashboard/Menu"
import List from './admin/business/list/List';
import Single from './admin/business/single/Single';
import AwardList from './admin/awards/list/List';
import ServiceList from './admin/service/list/List';
import ProductList from './admin/product/list/List';
import UList from './user/business/list/List';
import USingle from './user/business/single/Single';
import UAwardList from './user/awards/list/List';
import UServiceList from './user/service/list/List';
import UProductList from './user/product/list/List';
import New from './user/product/new/New';
import './App.css';
const App = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    
    <>
    <div class="wrapper">
    <div className={darkMode ? "app dark" : "app"}></div>
    <Router>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/forgot-password' component={Forgot} />
        <Route path='/verification' component={Verify} />
        <Route path='/list' component={List} />
        <Route path='/single' component={Single} />
        <Route path='/awardlist' component={AwardList} />
        <Route path='/servicelist' component={ServiceList} />
        <Route path='/productlist' component={ProductList} />
        <Route path='/user/list' component={UList} />
        <Route path='/user/single' component={USingle} />
        <Route path='/user/awardlist' component={UAwardList} />
        <Route path='/user/servicelist' component={UServiceList} />
        <Route path='/user/productlist' component={UProductList} />
        <ProtectedRoute component={Forgot} path="/forgot-password"/>
          <ProtectedRoute component={Resetpassword} path="/resetpassword"/>
        <Route path="/user-dashboard">
          <Dashboard />
          <Footer />
          <Header />
          <Menu/>
          </Route>
          <Route path="/admin-dashboard">
          <ADashboard />
          <AFooter />
          <AHeader />
          <AMenu/>
          </Route>
        <Route path='/' component={Index} />
       

      </Switch>
    </Router>
    </div>
      
    </>
  );
};

export default App;
