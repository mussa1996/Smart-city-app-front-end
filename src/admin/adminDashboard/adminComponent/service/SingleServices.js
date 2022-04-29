import React from 'react';
import AdmDashboardWrapper from '../admin-component';
import AvailableSingleService from '../../../service/single/Single';


const SingleService = ()=>{
   return(
    <AdmDashboardWrapper className="wrapper">
        <div>
          <AvailableSingleService />
        </div>
    </AdmDashboardWrapper>
   )
}

export default SingleService;