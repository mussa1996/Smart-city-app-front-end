
import React from 'react';
import AdmDashboardWrapper from './admin/admin-component';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';


const Dashboard = ()=>{
   return(
    //    <div class="wrapper">
         
    //        <Main />
    //    </div>
    <AdmDashboardWrapper className="wrapper">
       
        <Menu />
       
    </AdmDashboardWrapper>
   )
}

export default Dashboard;