import React, { Component } from 'react'
import Button from '@mui/material/Button';

import jwt_decode from "jwt-decode";
let user;
let decoded;
let photo;
let logout;
export default class Menu extends Component {
           
            constructor(props) {
              super(props);
              this.state = {logout: '',
            user: '',
            decoded: '',
            photo: ''};

            
            }
           
            async componentDidMount() {
              user = localStorage.getItem('userToken');
              decoded = jwt_decode(user);
              console.log(decoded.name);
              console.log(decoded.photo);
              this.setState({
                user: decoded.name,
                decoded: decoded,
                photo: decoded.photo,
              });
            }
           
           

    render() {
        return (
          <div>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a href="/admin-dashboard" className="brand-link">
    
      <span className="brand-text font-weight-light">Smart City</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src={this.state.photo} className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
          <a href="#" className="d-block">{this.state.user}</a>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
          <li className="nav-item has-treeview menu-open">
            <a href="#" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Dashboard
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="/admin-dashboard" className="nav-link active">
                  <i className="far fa-circle nav-icon" />
                  <p>Dashboard</p>
                </a>
              </li>
             
              
            </ul>
          </li>
         
          
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-table" />
              <p>
                Models
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
            <li className="nav-item">
                <a href="/list" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Business</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/product/list" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Product</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/award/list" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Awards</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/service/list" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Internal_service</p>
                </a>
              </li>
            </ul>
          </li>
         
        </ul>
       
      </nav>
      <div className="mt-3 p-3">
      <Button variant="contained" className="d-block" onClick={()=>{
 logout = localStorage.removeItem('userToken');
 this.setState({logout: logout});
 window.location.href = '/login';
      }}>Log Out</Button>
      </div>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>

        )
    }
}