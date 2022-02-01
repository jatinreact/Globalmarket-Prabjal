import React from 'react';
import './blog.scss'
import Bolgdata from './BlogData';


const Blogs = () => {
  return <>

  <div className="trade_wrappers">
      <div className="trade_content_wrapper">

          <div className="trade_header_title">
              <h3>
              OUR LATEST BLOGS
              </h3>
          </div>
          <div className="trade_image_holder">

          {Bolgdata.map((r)=>{
              return(
                  <>
            
              <div className="Images_container">
                  <div className="images_">
                      <img src={r.Imgs}
                      
                      alt="" />

                  </div>
                  <div className="date_holders">
                      <p>{r.date}</p>

                  </div>
                  <div className="heading">
                      <p>{r.title} </p>

                  </div>
                  <div className="location_">
                      <p>{r.location} </p>

                  </div>


              </div>

         


                  </>
              )
          })}
           </div>


           <div className="btn">

               <button>Explore More</button>
           </div>

  


      </div>


  </div>


  </>;
};

export default Blogs;
