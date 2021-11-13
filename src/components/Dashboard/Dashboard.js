import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import MyOrders from '../MyOrders/MyOrders';
import Navbar from '../Navbar/Navbar';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import './Dashboard.css'

const Dashboard = () => {
    return (
       <div>
           <Navbar></Navbar>
            <div class="container-fluid text-center">
      <div class="row content">
        <div class="col-sm-2 sidenav">
          <h2>DASHBOARD</h2>

          <Link to="/dashboard/pay">
            <button className="btn btn-outline-danger">Payment</button>
          </Link>
          <br /> <br />
          <Link to="/dashboard/review">
            <button className="btn btn-outline-warning mb-2">Review</button>
          </Link>
          <br /> <br />
          <Link to="/dashboard/myOrders">
            <button className="btn btn-outline-warning mb-2">My Orders</button>
          </Link>
        </div>
        <div class="col-sm-10 text-left">
          <Switch>
            <Route exact path="/dashboard/pay">
              <Pay></Pay>
            </Route>
            <Route exact path="/dashboard/review">
              <Review></Review>
            </Route>
            <Route exact path="/dashboard/myorders">
            <MyOrders></MyOrders>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
    <Footer></Footer> 
       </div>

    );
};

export default Dashboard;







    /* 
    <div>
            <Navbar></Navbar>
            <div className="sidebar">
                <h2>Dashboard</h2>
        <a className="" href="#home">Home</a>
        <Link to="/dashboard/pay">
        <li style={{listStyle:"none"}}>Pay</li>
        </Link>
        <Link to="/dashboard/myorders">
        <li style={{listStyle:"none"}}>My Orders</li>
        </Link>
       <Link to="/dashboard/review">
       <li style={{listStyle:"none"}}>Review</li>
       </Link>
        <button className="btn btn-outline-dark mt-2">LogOut</button>
      </div>
      
      <div className="content">
        <h2>Responsive Sidebar Example</h2>
        <p>This example use media queries to transform the sidebar to a top navigation bar when the screen size is 700px or less.</p>
        <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
        <h3>Resize the browser window to see the effect.</h3>
      </div>
      <Switch>
                    <Route exact path="dashboard/pay">
                        <Pay></Pay>
                    </Route>
                    <Route exact path="dashboard/review">
                        <Review></Review>
                    </Route>
                    <Route exact path="/dashboard/myorders">
                     <MyOrders></MyOrders>
                    </Route>
                    {/* <AdminRoute path={`${path}/addDoctor`}>
                        <AddDoctor></AddDoctor>
                    </AdminRoute> */
                    // </Switch>
                    // <Footer></Footer>
                    //   </div>
               
