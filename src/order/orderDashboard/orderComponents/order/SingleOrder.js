import React from 'react';
import AdmDashboardWrapper from '../order-component';
import AvailableOrder from '../../../order/single/Single';


const SingleOrder = ()=>{
   return(
    <AdmDashboardWrapper className="wrapper">
        <div>
          <AvailableOrder />
        </div>
    </AdmDashboardWrapper>
   )
}

export default SingleOrder;