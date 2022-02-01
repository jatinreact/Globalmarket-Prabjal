import React from 'react';
import './client.scss'
import ClientData from './Clientdata';

const ClientOpenion = () => {
  return <div>

    <div className= "main_wrapper">
      <div className="wrapper">
        {ClientData.map((elm)=>{
          return(
            <>
              <div className="content_holder">
            <div className="icon_wrapper">
              <img src={elm.Img} alt="" />
            
            </div>
            <div className="title_wrapper">
              <p>{elm.Header} </p>
              </div>
              <div className="desc_wrapper">
                <p>{elm.desc} </p>
              </div>
              <button className='btn'>{elm.btn}</button>

          </div>


            </>
          )
        })}

 

      </div>


    </div>

      

  </div>;
};

export default ClientOpenion;
