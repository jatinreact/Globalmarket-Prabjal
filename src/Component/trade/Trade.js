import React from 'react';
import './trade.scss'
import tradeData from './tradeData';

const Trade = () => {
  return <>

  <div className="trade_wrapper">
      <div className="trade_content_wrapper">

          <div className="trade_header_title">
              <h2>
              TRADE SHOWS
              </h2>
          </div>
          <div className="trade_image_holder">

          {tradeData.map((r)=>{
              return(
                  <>
            
              <div className="Images_container">

                  <div className="images_">
                      <img src={r.Imgs}
                      
                      alt="" />

                  </div>
                  <div className="date_holder">
                      <p>{r.date}</p>

                  </div>
                  <div className="heading">
                      <p>{r.title} </p>

                  </div>
                  <div className="location_">
                      <p>Akola Maharastra, India </p>

                  </div>


              </div>

         


                  </>
              )
          })}
           </div>


           <div className="btns">

               <button>Explore More</button>
           </div>

  


      </div>


  </div>


  </>;
};

export default Trade;
