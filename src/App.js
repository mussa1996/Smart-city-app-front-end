// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Login from "../src/components/views/Login";
// import Register from "../src/components/views/Register";
// import Forgot from "../src/components/views/Forgot";
// import Resetpassword from "../src/components/views/Resetpassword";
// import Verify from "../src/components/views/Verify";
// import Index from './components/Map/index';
// import "./style/dark.scss";
// import { useContext } from "react";
// import { DarkModeContext } from "./context/darkModeContext";
// import ProtectedRoute from './ProtectedRoute'
// import Dashboard from "./user/userDashboard/Dashboard" 
// import Footer from "./user/userDashboard/Footer"
// import Header from "./user/userDashboard/Header"
// import Menu from "./user/userDashboard/Menu"
// import ADashboard from "./admin/adminDashboard/Dashboard"
// import AFooter from "./admin/adminDashboard/Footer"
// import AHeader from "./admin/adminDashboard/Header"
// import AMenu from "./admin/adminDashboard/Menu"
// import List from './admin/business/list/List';
// import Single from './admin/business/single/Single';
// import AwardSingle from './admin/awards/single/Single';
// import ProductSingle from './admin/product/single/Single';
// import ServiceSingle from './admin/service/single/Single';
// import UAwardSingle from './user/awards/single/Single';
// import UProductSingle from './user/product/single/Single';
// import UServiceSingle from './user/service/single/Single';
// import AwardList from './admin/awards/list/List';
// import ServiceList from './admin/service/list/List';
// import ProductList from './admin/product/list/List';
// import UList from './user/business/list/List';
// import USingle from './user/business/single/Single';
// import UAwardList from './user/awards/list/List';
// import UServiceList from './user/service/list/List';
// import UProductList from './user/product/list/List';
// import AwardUpdate from './user/awards/update/Update';
// import ProductUpdate from './user/product/update/Update';
// import ServiceUpdate from './user/service/update/Update';
// import BusinessUpdate from './user/business/update/Update';
// import New from './user/product/new/New';
// import AwardNew from './user/awards/new/New';
// import ServiceNew from './user/service/new/New';
// import { productInputs, userInputs } from "./user/product/formSource";
// import './App.css';
// const App = () => {
//   const { darkMode } = useContext(DarkModeContext);

//   return (
    
//     <>
//     <div class="wrapper">
//     <div className={darkMode ? "app dark" : "app"}></div>
//     <Router>
//       <Switch>
//         <Route path='/login' component={Login} />
//         <Route path='/register' component={Register} />
//         <Route path='/forgot-password' component={Forgot} />
//         <Route path='/verification' component={Verify} />
//         <Route path='/list' component={List} />
//         <Route path='/single' component={Single} />
//         <Route path='/award/single' component={AwardSingle} />
//         <Route path='/product/single' component={ProductSingle} />
//         <Route path='/service/single' component={ServiceSingle} />
//         <Route path='/user/award/single' component={UAwardSingle} />
//         <Route path='/user/product/single' component={UProductSingle} />
//         <Route path='/user/service/single' component={UServiceSingle} />
//         <Route path='/award/list' component={AwardList} />
//         <Route path='/service/list' component={ServiceList} />
//         <Route path='/product/list' component={ProductList} />
//         <Route path='/user/list' component={UList} />
//         <Route path='/user/single' component={USingle} />
//         <Route path='/user/award/list' component={UAwardList} />
//         <Route path='/user/service/list' component={UServiceList} />
//         <Route path='/user/product/list' component={UProductList} />
//         <Route path='/user/award/update' component={AwardUpdate} />
//         <Route path='/user/product/update' component={ProductUpdate} />
//         <Route path='/user/service/update' component={ServiceUpdate} />
//         <Route path='/user/business/update' component={BusinessUpdate} />
//         <Route path='/award/new' component={AwardNew} />
//         <Route path='/service/new' component={ServiceNew} />
//         <Route path='/product/new' render={()=>{
//           return <New inputs={productInputs}/>
//         }} />
       
//         <ProtectedRoute component={Forgot} path="/forgot-password"/>
//           <ProtectedRoute component={Resetpassword} path="/resetpassword"/>
//         <Route path="/user-dashboard">
//           <Dashboard />
//           <Footer />
//           <Header />
//           <Menu/>
//           </Route>
//           <Route path="/admin-dashboard">
//           <ADashboard />
//           <AFooter />
//           <AHeader />
//           <AMenu/>
//           </Route>
//         <Route path='/' component={Index} />
       

//       </Switch>
//     </Router>
//     </div>
      
//     </>
//   );
// };

// export default App;


import React, { Component } from "react";
import Routers from './routers/Router'
import { Router } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createBrowserHistory } from "history";
import store from './reducers/store';
import { Provider } from "react-redux";
const history = createBrowserHistory();

const theme = createTheme();
class App extends Component {
    render() {
        return (
          <ThemeProvider theme={theme}>
              <Provider store={store}>
                <Router history={history}>
                    <Routers />
                </Router>
            </Provider>
          </ThemeProvider>
          
        )
    }
}
export default App;
