import React from 'react';
import AdmDashboardWrapper from '../admin-component';
import AvailableProduct from '../../../product/list/List';


const ListProduct = ()=>{
   return(
    <AdmDashboardWrapper className="wrapper">
        <div>
          <AvailableProduct />
        </div>
    </AdmDashboardWrapper>
   )
}

export default ListProduct;