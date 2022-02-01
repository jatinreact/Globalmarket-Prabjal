import React from 'react';
import './footer.scss'
import { Link } from 'react-router-dom';
import Alllinks from './data';

const Footer = () => {
  return <div>

      <div className="footer_main_container">

          <div className="footer_content_wrapper">

              <div className="left_footer_container">

                  <div className="company_logo">
                      <img src="https://globaltradeplaza.com/assets/images/logo_mono.png" alt="" />
                  </div>
                  <h3>
                  Global Trade Plaza
                  </h3>

                  <p>
                  Global Trade Plaza is an ISO 9001:2015 certified online B2B marketplace. We provide various opportunities for businesses including manufacturers, exporters, and wholesalers to connect with other businesses and companies across the globe. We are the much-needed bridge between B2B sellers and buyers. We have clients from different industries such as textile and apparel, consumer electronics, medical supplies, agriculture and food, home supplies, heavy machinery, industrial tools, etc.
                  </p>

                  <div className="trasted_logo">

                      <img src="https://seal.godaddy.com/images/3/en/siteseal_gd_3_h_l_m.gif" alt="" />

                  </div>

              </div>

              <div className="right_footer_container">

                  <div className="left_fast">
                      <h3>Customer support</h3>

                      <ul>
                          Contact us
                      </ul>
                      <ul>
                      Privacy policy
                      </ul>
                      <ul>
                      Advertise with us
                      </ul>
                      <ul>
                      Tradeshows
                      </ul>
                      <ul>
                      Our blogs
                      </ul>
                      <ul>
                      News & events
                      </ul>

                  </div>
                  <div className="left_second">
                      <h3>About Us</h3>

                        <div className="unorderdlist">

                        <ul>
                      About GlobalTradePlaza
                      </ul>
                      <ul>
                      Success stories
                      </ul>
                      <ul>
                      FAQ
                      </ul>
                      <ul>
                      Career with us
                      </ul>

                        </div>
                
                     
                  </div>
                  <div className="right_second">

                      <h3>
                      For buyers
                      </h3>

                      <ul>
                      Exporters directory
                      </ul>
                      <ul>
                      All categories
                      </ul>
                      <ul>
                      Buy leads
                      </ul>
                      <ul>
                      Feedback
                      </ul>
                      <ul>
                      Regions
                      </ul>

                  </div>
                  <div className="right_fast">
                      <h3>For sellers</h3>

                      <ul>
                      Buyers
                      
                      </ul>
                      <ul>
                      Terms & conditions
                      
                      </ul>
                      <ul>
                      Complaint
                      
                      </ul>
                     
                  </div>

              </div>

             
          </div>
          <div className="line_">
          <hr />
          </div>
          <div className="all_links">

              {Alllinks.map((l)=>{
                  return(
                      <>

                      <Link to={l.url} className='links'  key={l.id}>
              
                            {l.name}
                    </Link>


                  
                      </>
                  )
              })}

         
  
          </div>

         
          
      </div>


  </div>;
};

export default Footer;
