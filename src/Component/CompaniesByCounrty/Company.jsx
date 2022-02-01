import React from 'react';
import AllCountry from './allCountry';
import './company.scss'

const Company = () => {
  return <>

      <div className="company_main_wrapper">
          <div className="Country_name_header">
              <h2>COMPANIES BY COUNTRY</h2>

          </div>
                 
                    <div className="company_flages">
                    {/* <div className="container"> */}
                           {/* <===================map function========================> */}
                    {AllCountry.map((c)=>{
                        return (
                            <>
                           

                              
                                <div className="flag_holder">
                                    <div className="flag_imgs">
                                        <img src={c.Flag}
                                        
                                        alt="" />

                                    </div>
                                    <div className="country_name">
                                        <p>{c.Cname} </p>

                                    </div>
                                </div>
                         
                                
                                
                            


                            </>
                        )
                    })}
                       {/* </div> */}
                    </div>

    

          <div className="view_btn_">
              <button>View All</button>
             
          </div>
      </div>


  </>;
};

export default Company;
