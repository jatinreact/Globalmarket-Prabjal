import React from 'react';
import Imag from './data';
import "./Globel.scss"

const Globel = () => {
  return <div>

      <div className="globel_content_wrapper">
          <div className="globel_title">
              <h4>GLOBAL TRADE PLAZA FEATURED IN</h4>

          </div>

     

            <div className="globel_images_wrapper">
                   {Imag.map((i)=>{
                    return(
                    <>
                    <div className="small_img_wrapper">
                        <img src={i.Img} alt="" />
                    </div>
                            
                    </>
                    )
                })}
             
          </div>

            

     

          
      </div>




  </div>;
};

export default Globel;
