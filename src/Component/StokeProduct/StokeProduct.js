import React from 'react';

import './Stoke.scss'

import Stoke from './data';

const StokeProduct = () => {
  return <>

        <div className="main_stoke_div">

            <div className="second_main_div">

            <div className="header_stoke">

                <div className="main_title">
                    <h4>LIVESTOCK & ANIMAL PRODUCTS</h4>
                </div>

                <div className="seeall">
                    <a href="#">View all</a>
                </div>
                </div>

                <div className="all_image_container">

                    <div className="bigImage_container">

                        <img src="https://pixboost.com/api/2/img/https://dev-admin.globaltradeplaza.com/public/storage/product_images/460/1625207864.png/resize?size=300&auth=MzA5ODU4ODUwMA__" 
                        alt="" />

                    </div>

                    <div className="other_images_container">

                    {Stoke.map((elm)=>{
                                 console.log(elm);
                                return(
                                    <>
                                         <div className="small_images_main_container"> 
                                            <div className="images_holder">
                                                <img src={elm.Imag} 
                                                alt="" />
                                            </div>
                                            <div className="title">
                                                <p>{elm.Name}</p>
                                            </div>

                                            </div>                                                                                                        
                                    </>                                   
                                )
                            })}                                                           
                     
                    </div>

                </div>


            </div>

         




        </div>


  </>;
};

export default StokeProduct;
