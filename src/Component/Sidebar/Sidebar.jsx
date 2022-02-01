import React from 'react';
import './sidebar.scss'
import Images from '../../Images/resize.png'
import Slider from '../Slider/Slider'
// import '../Common/common.scss'

const SideBar = () => {
  return <div>

      <div className="sidebar_container">
          <div className="allContainer">

         
          <div className="sidebar_menu">
              <div className="menu_details">
   

                  <li>
                      <a href="">Agriculture</a>
                  </li>
                  <li>
                      <a href="">Apparel And Fashion Accessories</a>
                  </li>
                  <li>
                      <a href="">Construction & Real Estate</a>
                  </li>
                  <li>
                      <a href="">Electronic & Electrical</a>
                  </li>
                  <li>
                      <a href=""> Food & Beverages</a>
                  </li>
                  <li>
                      <a href="">Home Furnishing & Supplies</a>
                  </li>
                  <li>
                      <a href="">Industrial Goods & Chemical</a>
                  </li>
                  <li>
                      <a href="">Minerals & Metals</a>
                  </li>
                  <li>
                      <a href=""> Miscellaneous</a>
                  </li>

              </div>
          </div>
          <div className="slider">
          <div className="slider_content">
              {/* <img src="https://pixboost.com/api/2/img/https://admin.globaltradeplaza.com/public/storage/product_images/2021/12/20/1639980832.png/resize?size=2078x1040&auth=MzA5ODU4ODUwMA__" 
              alt="" className='slider_images'/> */}

              <Slider/>
          </div>
      </div>

      {/* <div className="rightside_main_container"> */}

      
      <div className="RightSide_container">
          <div className="right_side_logo"></div>
         
          <input type="text" placeholder='Full Name' />
          <input type="text" placeholder='Email Address' />
          <input type="text" placeholder='Select Country' />
          <input type="text" placeholder='State' />
        {/* //Need to add dropdown menu */}
        <div className="phonenmbr">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" 
            alt="" />
            <div className="country_code">
                
                +91</div>
        <input type="text" placeholder='Phone Number'  />

        </div>
        
          <input type="text" placeholder='Company Name' />
          <input type="password" placeholder='Password' />
          <input type="password" placeholder='Confirm Password' />

          <button className='submit_btn'>Submit</button>
      </div>

      {/* </div> */}

      {/* <div className="stick_logo">

         
                    Let's Chats
        
         

      </div> */}
      </div>

      </div>
    


  </div>;
};

export default SideBar;
