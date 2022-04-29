import React from 'react';
import AdmDashboardWrapper from '../admin-component';
import AvailableSingleBusiness from '../../../business/single/Single';


const SingleBusiness = ()=>{
   return(
    <AdmDashboardWrapper className="wrapper">
        <div>
          <AvailableSingleBusiness />
        </div>
    </AdmDashboardWrapper>
   )
}

export default SingleBusiness;