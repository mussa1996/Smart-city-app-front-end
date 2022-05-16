import React from 'react';
import Itemcard from './Itemcard';
import { useState,useEffect } from "react";
import axios from 'axios';
import ButtonAppBar from './Navbar';
const Home = ({place}) => {
    console.log("place data",place);
    // console.warn(data.productData);
    const [product,setProduct]=useState([]);
    
   
    const getProductData=()=>{
        const params = window.location.pathname.split("/");
    const userId = params[params.length - 1];
        axios.get(`http://localhost:4500/api/product/getProductById?business_id=${userId}`)
        .then(res=>{
            setProduct(res.data.product);
            console.log(res.data.product);
        })
        .catch(err=>{
            console.log(err);   
        })
      
    }
    useEffect(()=>{
      getProductData();
    }
    ,[])
   
    console.log("product",product);
    return (
        <>
        <ButtonAppBar />
            <h1 className='text-center mt-3'> All Items</h1>
            <section className='py-4 containter'>
                <div className='row justify-content-center'>
                    {product.map((item, index) => {
                        return (
                        <Itemcard 
                        key={index}
                         title={item.name} 
                         img={item.photo} 
                         desc={item.description}
                         item={item}
                         price={item.price} />
                        
                    )})}
                    
                    </div>

            </section>
        </>
    );
}

export default Home;