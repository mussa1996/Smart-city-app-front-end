import React, { Component } from 'react'
// import Counts from '../../../helper/userCount/business'
import {useState,useEffect} from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
let counts;
let product;
let award;
let service;
let user;
let decoded;
let data
export default class Dashboard extends Component {
  
  constructor(props) {
    super(props);
    this.state = {message: '',
  message1: '',
  message2: '',
  message3: ''
  };
  }
  

 
  async componentDidMount() {
    try {
       data=localStorage.getItem('react-use-cart');
        product = JSON.parse(data);
      // user = localStorage.getItem('react-use-cart');
      console.log("data",product);
      console.log("total",product.totalItems)
        this.setState({
          message: product.cartTotal,
          message1: product.totalItems,
          message2: product.totalUniqueItems,
          // message3: product.cartTotal
        });
        console.log("message",this.state.message);
    } catch (err) {
      console.log(err);
    }
  }
           
 
    render() {
     

        return (
            <div>
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0 text-dark">Dashboard</h1>
          </div>{/* /.col */}
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </div>
    {/* /.content-header */}
    {/* Main content */}
    <section className="content">
      <div className="container-fluid">
        {/* Small boxes (Stat box) */}
        <div className="row">
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-info">
              <div className="inner">
                
                <p>Total Amount</p>
                <h3>$ {this.state.message}</h3>
              </div>
              <div className="icon">
                <i className="ion ion-bag" />
              </div>
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-success">
              <div className="inner">
              <p>Total Items(Quantity)</p>
                <h3>{this.state.message1}<sup style={{fontSize: 20}}></sup></h3>
                
              </div>
              <div className="icon">
                <i className="ion ion-stats-bars" />
              </div>
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-warning">
              <div className="inner">
              <p>Total Unique Items</p>
                <h3> { this.state.message2 } </h3>
                
              </div>
              <div className="icon">
                <i className="ion ion-person-add" />
              </div>
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
            </div>
          </div>
           </div>
      </div>
    </section>
  </div>
</div>

        )
    }
}