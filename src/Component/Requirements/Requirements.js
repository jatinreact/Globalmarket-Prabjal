import React from 'react';
import Navbar from '../Navbar/Navbar';
// import './req.css'
import './req.scss'

const Requirements = () => {
  return <div>

      {/* <Navbar/> */}
      <div className="req_main_container">
          <div className="req_second_container">

              <div className="left_req_container">

                  <div className="left_container_header">
                  <h1>POST YOUR 
                      <br />
                      BUYING REQUIREMENT</h1>

                  </div>
                  <span className='line'>
                      <hr />
                  </span>

                  <div className="paragraph">
                      <p>We will connect you with a supplier best suited to your buying requirements. We have with us the trust of hundreds of manufacturers, exporters and buyers. We make sure you receive high-quality products at a reasonable price range.</p>
                  </div>
               
               
              </div>

              <div className="right_container">
                  <div className="right_header">
                      <h3>WHAT ARE YOU LOOKING FOR?</h3>
                  </div>

                  <div className="imput_right_div">
                  <input type="text" placeholder='Product Name *'/>

                  <div className="quentity_input">
                  <input type="text" placeholder='Quentity *' className='quentity_input'/>
              

                    <select name="state" id="state-select" className='select_input'>
                        <option value="">Select *</option>
                        <option value="bags">Bags</option>
                        <option value="feet">Feet</option>
                        <option value="dorzon">Dorzen</option>
                        <option value="meter">Meter</option>
                    
                    </select>
                
                  <input type="text" placeholder='Select Shipping terms *' className='quentity_input3'/>

                  </div>
                 
                      
                  </div>
                  <div className="select_payments">
                      <p>Select Payment terms</p>

                      <div className="input_checkbox">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                        <label for="vehicle1"> T/T</label>
                        <input type="checkbox" id="vehicle3" name="vehicle2" value="Bike"/>
                        <label for="vehicle1"> D/A</label>
                        <input type="checkbox" id="vehicle3" name="vehicle2" value="Bike"/>
                        <label for="vehicle1"> L/C</label>
                        <input type="checkbox" id="vehicle3" name="vehicle2" value="Bike"/>
                        <label for="vehicle1"> D/P</label>
                        <input type="checkbox" id="vehicle3" name="vehicle2" value="Bike"/>
                        <label for="vehicle1"> Paypal</label>
                        <input type="checkbox" id="vehicle3" name="vehicle2" value="Bike"/>
                        <label for='payment4'>Western Union</label>
                        <input type="checkbox" id="vehicle3" name="vehicle2" value="Bike"/>
                        <label for='payment7'>Money Gram</label>
                      </div>

                      <div className="describe_box">
                      <input type="text" placeholder='Describe Your Requirement'/>
                  </div>
                      
                  </div>
                

                  <button className='Req_btn'>Submit Your Requirement</button>

                 
              </div>
              
          </div>
          
      </div>
  </div>;
};

export default Requirements;
