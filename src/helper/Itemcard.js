import React from 'react';
import { useCart } from 'react-use-cart';

const Itemcard = (props) => {
   
    const { addItem } = useCart();
    return (
        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
            <div  class="card p-0 overflow-hidden h-100 shadow" >
                <img src={props.item.photo} class="card-img-top img-fluid" alt="" style={{height : '250px', width : '320px'}}/>
                <div class="card-body text-center">
                 <h3 class="card-title" style={{color:'black',marginLeft:'20px'}}>{props.item.name}</h3>
                 <br/>
                 <br/>
                 <h5 class="card-title" style={{color:'grey',marginLeft:'20px'}}>{props.item.description}</h5>
                 
                 <br/>
                 <br/>
                 <h4 class="card-title" style={{marginLeft:'20px'}}>$ {props.item.price}</h4>
                    <br/>
                    <br/>
             <button class="btn btn-success"
              onClick={()=>addItem(props.item)}
              >Add order</button>
              </div>
       </div>
        </div>
    );
}

export default Itemcard;
