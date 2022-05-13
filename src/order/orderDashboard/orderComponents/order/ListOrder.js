import React from 'react';
import AdmDashboardWrapper from '../order-component';
import AvailableOrder from '../../../order/list/List';


const ListOrder = ()=>{
   return(
    <AdmDashboardWrapper className="wrapper">
        <div>
          <AvailableOrder />
        </div>
    </AdmDashboardWrapper>
   )
}

export default ListOrder;