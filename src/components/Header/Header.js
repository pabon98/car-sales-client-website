import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
           <div className="py-5">
              <br /><br />
          <div className="mb-3">
          <h3  className='text-white fs-1 mt-4'>Find Your Perfect Car</h3>
          <p  className='text-white fs-3'>with thousands of car we have just te right one for you</p>
          </div>
           <div>
           {/* <p className="text-white header-content fs-3">We can help you find the best car. Check our reviews, compare models and find cars for sale.</p> */}
           <Link to="/loginform">
           <button  className="btn me-auto btn-warning p-2">Purchase Now</button>
           </Link>
           <br /> <br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
           </div>
            
           </div>
        </div>
    );
};

export default Header;