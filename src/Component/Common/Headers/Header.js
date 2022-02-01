import React from 'react';
import { Link } from 'react-router-dom';
import Imgs from '../../../Images/logo_color.png'
import '../../Navbar/navbar.css'
import '../../Navbar/nav.scss'

export const Header = () => {
  return <div>
      <div className="Navbar_Container">
      <div className="navbar_logo">

        <Link to='/'>
        <img className='logo' src={Imgs} alt="" />
        </Link>
     
      </div>
      <div className="navbar_items">

        <div className="leftSide">

       
        <div className="main_items">

          <Link to="/adv" className='Links'>
            <li >Advertise with us</li>

          </Link>

          <Link to='/Product' className='Links'>
          <li>Products</li>

          </Link>
          <Link to='/buy' className='Links'>
          <li>Buy leads</li>
            
          </Link>
          <Link to='/company' className='Links'>
          <li>Companies</li>

          </Link>
          <Link to='/contact' className='Links'>
          <li>Contact</li>

          </Link>
          <Link to='/about' className='Links'>
          <li>About</li>

          </Link>
        
       
        
         
        
         
         
       
        </div>
        </div>
        <div className="right_side">

        <Link to="/createAccount" className='link'>
          <button className='right_side_btn' >

      
            Create New Account
            
         
           
            </button>
            </Link>
        <Link to="/login" className='link login_btn' >
        Login

            </Link>
            <Link to="/help" className='link login_btn' >
        Need help ?

            </Link>

        </div>
      </div>

    </div>


  </div>;
};
