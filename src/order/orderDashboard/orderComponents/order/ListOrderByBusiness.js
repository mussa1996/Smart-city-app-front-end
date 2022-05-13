import React from 'react';
import AdmDashboardWrapper from '../../../../user/userDashboard/UserComponents/user-component';
import AvailableOrder from '../../../order/list/ListByBusiness';


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