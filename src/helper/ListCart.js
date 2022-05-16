import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Cart from './Cart';
import { CartProvider } from 'react-use-cart';
function App() {
  return (
    <>
    <CartProvider>
        <Navbar />
      <Cart />
      </CartProvider>
    </>  
  ); 
}

export default App;