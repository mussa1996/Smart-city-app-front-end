import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../components/views/Login";
import Register from "../components/views/Register";
import Forgot from "../components/views/Forgot";
import Resetpassword from "../components/views/Resetpassword";
import Verify from "../components/views/Verify";
import Index from "../components/Map/index";
import "../style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";
import Dashboard from "../user/userDashboard/UserComponents/Dashboard";
import Footer from "../user/userDashboard/Footer";
import Header from "../user/userDashboard/Header";
import Menu from "../user/userDashboard/Menu";
import ADashboard from "../admin/adminDashboard/adminComponent/Dashboard";
import AFooter from "../admin/adminDashboard/Footer";
import AHeader from "../admin/adminDashboard/Header";
import AMenu from "../admin/adminDashboard/Menu";
import List from "../admin/adminDashboard/adminComponent/business/ListBusiness";
import Single from "../admin/adminDashboard/adminComponent/business/SingleBusiness";
import AwardSingle from "../admin/adminDashboard/adminComponent/awards/SingleAward";
import ProductSingle from "../admin/adminDashboard/adminComponent/product/SingleProduct";
import ServiceSingle from "../admin/adminDashboard/adminComponent/service/SingleServices";
import UAwardSingle from "../user/userDashboard/UserComponents/awards/SingleAward";
import UProductSingle from "../user/userDashboard/UserComponents/product/SingleProduct";
import UServiceSingle from "../user/userDashboard/UserComponents/services/SingleServices";
import AwardList from "../admin/adminDashboard/adminComponent/awards/ListAwards";
import ServiceList from "../admin/adminDashboard/adminComponent/service/ListServices";
import ProductList from "../admin/adminDashboard/adminComponent/product/ListProduct";
import UList from "../user/userDashboard/UserComponents/business/ListBusiness";
import USingle from "../user/userDashboard/UserComponents/business/SingleBusiness";
import UAwardList from "../user/userDashboard/UserComponents/awards/ListAwards";
import UServiceList from "../user/userDashboard/UserComponents/services/ListServices";
import UProductList from "../user/userDashboard/UserComponents/product/ListProduct";
import AwardUpdate from "../user/userDashboard/UserComponents/awards/updateAward";
import ProductUpdate from "../user/userDashboard/UserComponents/product/updateProduct";
import ServiceUpdate from "../user/userDashboard/UserComponents/services/updateService";
import BusinessUpdate from "../user/userDashboard/UserComponents/business/updateBusiness";
import New from "../user/userDashboard/UserComponents/product/NewProduct";
import AwardNew from "../user/userDashboard/UserComponents/awards/NewAward";
import ServiceNew from "../user/userDashboard/UserComponents/services/NewService";
import { productInputs, userInputs } from "../user/product/formSource";
import "../App.css";
import ProtectedRoute from "./ProtectedRoute";
import AvailableProduct from "../components/productComponent/ProductList";
import RegisterUser from "../components/views/RegisterUser";
import Check from "../components/views/Check";
import AddToCat from "../helper/add-to-cat"
export default function Routers() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <div class="wrapper">
        <div className={darkMode ? "app dark" : "app"}></div>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/register/user" component={RegisterUser} />
            <Route exact path="/check" component={Check} />
            <Route exact path="/forgot-password" component={Forgot} />
            <Route exact path="/verification" component={Verify} />
            <Route exact component={Forgot} path="/forgot-password" />
            <Route exact component={Resetpassword} path="/resetpassword" />
            <Route exact path="/availableProduct" component={AvailableProduct}/>
            <ProtectedRoute exact path="/add-to-cat" component={AddToCat}/>
            {/* <Route path='/' component={Index} /> */}

            {/* admin routes */}
            <ProtectedRoute path="/admin-dashboard" >
              <ADashboard />
              <AFooter />
              <AHeader />
              <AMenu />

            </ProtectedRoute>

            <ProtectedRoute path="/list" component={List} />
              <ProtectedRoute path="/single" component={Single} />
              <ProtectedRoute path="/award/single" component={AwardSingle} />
              <ProtectedRoute
                path="/product/single"
                component={ProductSingle}
              />
              <ProtectedRoute
                path="/service/single"
                component={ServiceSingle}
              />
              
              <ProtectedRoute path="/service/list" component={ServiceList} />
              <ProtectedRoute path="/product/list" component={ProductList} />
            <ProtectedRoute path="/award/list" component={AwardList} />
            {/* user routes */}
            <ProtectedRoute path="/user-dashboard">
              <Dashboard />
              <Footer />
              <Header />
              <Menu />
              </ProtectedRoute>
              <ProtectedRoute
                path="/user/award/single"
                component={UAwardSingle}
              />
              <ProtectedRoute
                path="/user/product/single"
                component={UProductSingle}
              />
              <ProtectedRoute
                path="/user/service/single"
                component={UServiceSingle}
              />
              <ProtectedRoute path="/user/list" component={UList} />
              <ProtectedRoute path="/user/single" component={USingle} />
              <ProtectedRoute path="/user/award/list" component={UAwardList} />
              <ProtectedRoute
                path="/user/service/list"
                component={UServiceList}
              />
              <ProtectedRoute
                path="/user/product/list"
                component={UProductList}
              />
              <ProtectedRoute
                path="/user/award/update"
                component={AwardUpdate}
              />
              <ProtectedRoute
                path="/user/product/update"
                component={ProductUpdate}
              />
              <ProtectedRoute
                path="/user/service/update"
                component={ServiceUpdate}
              />
              <ProtectedRoute
                path="/user/business/update"
                component={BusinessUpdate}
              />
              <ProtectedRoute path="/award/new" component={AwardNew} />
              <ProtectedRoute path="/service/new" component={ServiceNew} />
              <ProtectedRoute
                path="/product/new" component={New}
              />
            
            <Route exact path="/" component={Index} />
          </Switch>
        </Router>
      </div>
    </>
  );
}
