import React, { Component } from 'react'
import {Nav,Navbar,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import logout from '../../actions/LogoutActions';
import { useHistory } from "react-router-dom";
export default class Menu extends Component {
  

    render() {
        return (
          <div>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a href="/dashboard" className="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt="Smart city Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">Smart City</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="../../images/image.png" className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
          <a href="#" className="d-block">Mussa</a>
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
                <a href="./dashboard" className="nav-link active">
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
                <a href="/user/list" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Business</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/user/product/list" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Product</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/user/award/list" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Awards</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/user/service/list" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Internal_service</p>
                </a>
              </li>
            </ul>
          </li>
         
        </ul>
        <div>
        
         

        </div>
      </nav>
      <Nav>
        <NavDropdown title="User" >
       <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>

        )
    }
}