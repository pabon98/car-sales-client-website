import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/vehica-logo.webp';
import useAuth from '../hooks/useAuth/useAuth';
import './Navbar.css'

const Navbar = () => {
  const{user,logOut} = useAuth()
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#home">
        <img className="w-50" src={logo} alt="" />
       </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item">
        <NavLink
         
         className="Nav_link"
         to="/home"
         activeClassName="selected"
       >
         
         Home
       </NavLink>
        </li>
        <li class="nav-item">
        <NavLink
            className="Nav_link"
            to="/explore"
            activeClassName="selected"
          >
            Explore
          </NavLink>
        </li>
        
        <li class="nav-item">
        <NavLink
          
            className="Nav_link"
            to="/about"
            activeClassName="selected"
          >
            About
          </NavLink>
        </li>
        <li class="nav-item">
        <NavLink
          
            className="Nav_link"
            to="/contact"
            activeClassName="selected"
          >
            Contact
          </NavLink>
        </li>
        <li className="nav-item mx-3 text-white">
          
          Signin as: { 
          user?.email
          }
          </li>
        
      </ul>
      <form className="d-flex flex-fill mx-2">
          {
            user.email&&
            <Link to="/dashboard">
              <button className="btn  btn-outline-warning me-3">Dashboard</button>
            </Link>
          }
          {/* {
            user.email&&
            <Link to="/managerOrders">
              <button className="btn btn btn-outline-warning me-3">Manage All Orders</button>
            </Link>
          }
          {
            user.email&&
            <Link to="/newservice">
              <button className="btn btn btn-outline-warning">Add a new service</button>
            </Link>
          } */}

          {
            user.email?
            <button
            onClick={logOut}
            className="btn btn btn-outline-danger position-absolute top-50 end-0 translate-middle-y mx-5"
            type=""
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
          
          >
           Logout
          </button>
          :
         <NavLink to='/login'>
            <button
            className="btn btn btn-outline-light position-absolute top-50 end-0 translate-middle-y mx-5"
            type=""
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
          
          >
           Login
          </button>
           </NavLink>}
        </form>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;