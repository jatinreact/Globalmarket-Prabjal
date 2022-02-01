import React from 'react';
import CardData from './Carddata';
import './Cards.scss'

const Cards = () => {
  return <>

    <div className="main_container">
        <div className="header_title">
            <p>ITS EASY TO FIND DEALS AT GLOBAL TRADE PLAZA</p>
        </div>

        <div className="card_container">
           
                {/* ======================== */}

                {CardData.map((elem)=>{
                    console.log(elem);
                  return  (

                        <>
                         <div className="card_details_holder" key={elem.id}>
                                 <div className="card_header_logo">

                                <img src={elem.Img}
                                   alt="Images" />

                                </div>
                                <div className="title_header">
                                <h3>{elem.Header}</h3>
                                </div>
                                <div className="description">
                                <p>{elem.desc}</p>
                                </div>

                                </div>

                        
                        </>
                    )

                })}

        </div>

              <div className="lower_btn">
                <button className='play_btn'>Play the video</button>
                <button className='know_btn'>Know more about us</button>
            </div>

    </div>
  
  </>;
};

export default Cards;
