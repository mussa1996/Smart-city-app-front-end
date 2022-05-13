import "./single.scss";
import List from "../list/List";
import React, {useEffect,useState} from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from "react-router-dom";
const Single = () => {
  // const queryParams = new URLSearchParams(window.location.pathname);
  // const params = window.location.pathname.split("/");
  // const id = params[params.length - 1];
  const [product,setProduct]=useState([]);
    const [search,setSearch]=useState('');
    
    const handleView = (id) => {
      const queryParams = new URLSearchParams(window.location.pathname);
      const params = window.location.pathname.split("/");
       id = params[params.length - 1];
       console.log("params",queryParams);
      axios.get(`http://localhost:4500/api/order/getPaymentById?id=${id}`)
      .then(res=>{
          
        setProduct(res.data); 
          console.log("test",res.data);
          
      })

      .catch(err=>{
          console.log(err);
      })
  };
  useEffect(()=>{
    handleView()
}
,[])
const rowData=product
console.log("user",rowData);
  return (
    <div className="single">
      {/* <Sidebar /> */}
      <div className="singleContainer">
        {/* <Navbar /> */}
        <div className="top">
          <div className="left">
          <Link to="/order">
            <div className="editButton" >Back</div>
            </Link>
            <h1 className="title">Information</h1>
            {/* <div className="item">
              <img
                src={rowData.photo}
                alt=""
                className="itemImg"
              /> */}
              <div className="details">
                <h1 className="title">Product Details</h1>
                <div className="detailItem">
                  <span className="itemKey">User Id:</span>
                  <span className="itemValue">{rowData.user}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Business Id:</span>
                  <span className="itemValue">{rowData.business}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Total Amount:</span>
                  <span className="itemValue">{rowData.total_amount}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{rowData.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">{rowData.address}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Payment Id:</span>
                  <span className="itemValue">{rowData.payment_id}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Payment Date:</span>
                  <span className="itemValue">{rowData.payment_date}</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div> */}
        </div>
        <div className="bottom">
        <h1 className="title">List of all orders</h1>
          <List/>
        </div>
      </div>
    
  );
};

export default Single;
