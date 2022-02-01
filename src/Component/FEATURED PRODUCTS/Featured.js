import React from 'react';
import './feature.scss'
import AllImages from './Featuredata';

const Featured = () => {
  return <div>

      <div className="main_container_feature">

          <div className="main_holder">

          <div className="feature_header">
              <div className="feature_title">
              <h4>FEATURED PRODUCTS</h4>

              <div className="spandiv">
              <span className='span1'>
                 <hr />
              </span>
              <span className='span2'>
                  <hr />
              </span>

              </div>
            

              </div>
        
              <p>View all products</p>

              

          </div>
          <div className="container_for_images">

          {AllImages.map((i)=>{
              return(
                  <>
                     <div className="imageholder_container">

        
                    <div className="imageHolder">
                        <div className="images">
                                <img src={i.Img} alt="" />
                        </div>
                        <p>{i.name} </p>

                    </div>
                    </div>
                  
                  </>
              )
          })}

       
       

      </div>

      </div>
      
          {/* ==========header div========== */}
          {/* </div> */}
          {/* <div className="rightside_feature_container">

          <div className="empty-container">

          </div>
          
          </div> */}
      </div>

     


  </div>
};

export default Featured;
