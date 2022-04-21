import "./single.scss";
// import Chart from "../../components/chart/Chart";
import List from "../list/List";
import React, {useEffect,useState} from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
const Single = () => {
  const [business,setBusiness]=useState([]);
    const [search,setSearch]=useState('');
    const getBusinessData=(id)=>{
        axios.get(`http://localhost:4500/api/admin/getOne?id=${id}`)
        .then(res=>{
            setBusiness(res.data.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        getBusinessData();
    }
    ,[])
    const rowData=business;
  return (
    <div className="single">
      {/* <Sidebar /> */}
      <div className="singleContainer">
        {/* <Navbar /> */}
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={rowData.photo}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Business Details</h1>
                <div className="detailItem">
                  <span className="itemKey">Business Name:</span>
                  <span className="itemValue">{rowData.business_name}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Owner Name:</span>
                  <span className="itemValue">{rowData.owners}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{rowData.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{rowData.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    {rowData.address}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Website:</span>
                  <span className="itemValue">{rowData.website}</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div> */}
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
