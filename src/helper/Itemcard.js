import React from 'react';
import { useCart } from 'react-use-cart';
const Itemcard = (props) => {
    const { addItem } = useCart();
    return (
        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
            <div  class="card p-0 overflow-hidden h-100 shadow" >
                <img src={props.item.photo} class="card-img-top img-fluid" alt=""/>
                <div class="card-body text-center">
                 <h5 class="card-title">{props.item.name}</h5>
                 <br/>
                 <h5 class="card-title">$ {props.item.price}</h5>
                 <br/>
                 <h5 class="card-title">{props.item.description}</h5>
                    <br/>
             <button class="btn btn-success"
              onClick={()=>addItem(props.item)}
              >Add to Cart</button>
              </div>
       </div>
        </div>
    );
}

export default Itemcard;
