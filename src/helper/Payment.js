import './App.css';
import StripeCheckout from 'react-stripe-checkout';
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useCart } from 'react-use-cart';
import jwt_decode from 'jwt-decode';
const MySwal = withReactContent(Swal);

function App() {
const data=localStorage.getItem('react-use-cart');
const product = JSON.parse(data);
const businessId=product.items[0].business_id;
  const publishableKey =process.env.REACT_APP_STRIPE_PUBLIC_KEY
   
  const priceForStripe = product.cartTotal * 100;

  const handleSuccess = () => {
    
    MySwal.fire({
      icon: 'success',
      title: 'Payment was successful',
      time: 4000,
    });
  };
 
  const handleFailure = () => {
    MySwal.fire({
      icon: 'error',
      title: 'Payment was not successful',
      time: 4000,
    });
  };
  const payNow = async token => {
    try {
      const tokens = localStorage.getItem('userToken')
      const decoded = jwt_decode(tokens);
      const userId = decoded._id;
      
      const response = await axios({
        url: 'http://localhost:4500/api/order/createPayment',
        method: 'post',
        headers: {
          Authorization: `Bearer ${tokens}`
        },
        data: {
          userId,
          businessId,
          amount: product.cartTotal * 100,
          token,
          
        },
      });
      if (response.status === 200) {
       
        handleSuccess();
      }
    } catch (error) {
      handleFailure();
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h2>Complete React & Stripe payment integration</h2>
      <p>
        <span>Total Items: </span>
        {product.totalUniqueItems}
      </p>
      <p>
        <span>Total Quantity: </span>
        {product.totalItems}
      </p>
      <p>
        <span>Price: </span>${product.cartTotal}
      </p>
      <StripeCheckout
        stripeKey={publishableKey}
        label="Pay Now"
        name="Pay With Credit Card"
        billingAddress
        shippingAddress
        amount={priceForStripe}
        description={`Your total is $${product.cartTotal}`}
        token={payNow}
      />
    </div>
  );
}

export default App;