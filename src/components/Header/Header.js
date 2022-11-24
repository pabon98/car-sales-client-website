import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
           <div className="py-5">
              <br /><br /><br /><br /><br /> <br /> <br />
          <div className="header-content">
          <h3 className='text-white fs-1'>Modern Classic Decorative</h3>
          <p className='text-white fs-2'>Get 20% off on selected items</p>
          </div>
           <div>
           <p className="text-white header-content fs-3">We can help you find the best car. Check our reviews, compare models and find cars for sale.</p>
           <Link to="/loginform">
           <button className="btn btn-warning p-2">Purchase Now</button>
           </Link>
           <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
           </div>
            
           </div>
        </div>
    );
};

export default Header;