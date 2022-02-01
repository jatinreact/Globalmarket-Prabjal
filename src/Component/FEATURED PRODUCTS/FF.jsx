import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
    width: 100vw;
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: #1545e2;

`
const LeftSide = styled.div`

    /* flex: 0 0 41.6666666667%; */
    max-width: 41.6666666667%;
    /* border: 1px solid red; */

    @media only screen and (max-width: 991px){
        max-width: 100%;
    }
    

      
`
const RightSide = styled.div`
    /* flex: 0 0 58.3333333333%; */
    /* border: 1px solid yellow; */
    width: 55%;
    /* height: 300px; */
    margin: 20px 0;

    h4{
        text-transform: uppercase;
        padding: 0 5px;
        font-weight: 600;
        margin-bottom: 0;
        font-size: 1.25rem;
    }


    @media only screen and (max-width: 991px){
        width: 100%;
    }

   

`

const Input = styled.div`
    max-width: 100%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: -15px;
    margin-left: -15px; 
    margin-bottom: 20px;

    input{
        height: 40px;
        outline: none;
    }

    .Product{
        padding: 0 5px;
        width: 94%;
        margin-bottom: 15px;
        height: 40px;

        @media only screen and (max-width: 991px){
        width: 90%;
    }
    }

    .quentity_input{
        width: 100%;
        display: flex;
    }

    .left{
        display: flex;
        width: 50%;
        

        .quentity_{
            width: 50%;
            height: 100%
        }
        .select_input{
            width: 50%;
            height: 100%;
        }
    }

    .quentity_input3{
        width: 40%;
        margin-left: 10px;
    }

    /* display: flex;
    flex-wrap: wrap; */
    

`
const PaymentDiv = styled.div`
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    p{
        margin-bottom: 10px;
    }

    .input_checkbox{
        input{
            margin-left: 10px;
        }
    }
`
const Textbox = styled.div`
    width: 100%;
    height: 100px;

    input{
        width: 95%;
        height: 100%;
        outline: none;
    }
`


const Content = styled.div`
    padding: 20px 60px;

    h1{
            /* padding: 20px 60px; */
            z-index: 1;

            font-size: 2rem;
            color: #fff;
            line-height: 44px;
            margin-bottom: 10px;
        }
        
        p{
            font-size: 1rem;
            margin-top: 20px;
            color: #fff;
            line-height: 25px;
            font-weight: 400;
        }

`
const RightContent = styled.div`
    width: 100%;
    background-color: #fff;
    z-index: 1;
    padding: 30px 15px 20px;

    button{
        padding: 12px 40px;
        margin-top: 10px;
        background-color: #f35;
        color: #fff;
        border: none;
        cursor: pointer;

        &:hover{
            background-color: blue;
        }    
    }

`
// const LeftSide = styled.div``

const FF = () => {
  return <div>
      <MainContainer>

          <LeftSide>

              <Content>
              <h1>POST YOUR <br />
                        BUYING REQUIREMENT</h1>

                 <p>We will connect you with a supplier best suited to your buying requirements. We have with us the trust of hundreds of manufacturers, exporters and buyers. We make sure you receive high-quality products at a reasonable price range.</p>


              </Content>
          
          </LeftSide>
          <RightSide>

            <RightContent>
                            
          <h4>WHAT ARE YOU LOOKING FOR?</h4>

          <Input>
          <input type="text" placeholder='Product Name *' className='Product'/>

             <div className="quentity_input">
                 <div className="left">
                     <input type="text" placeholder='Quentity *' className='quentity_'/>


                        <select name="state" id="state-select" className='select_input'>
                            <option value="">Select *</option>
                            <option value="bags">Bags</option>
                            <option value="feet">Feet</option>
                            <option value="dorzon">Dorzen</option>
                            <option value="meter">Meter</option>

                        </select>

                 </div>


                <input type="text" placeholder='Select Shipping terms *' className='quentity_input3'/>

                </div>
       
          </Input>
          <PaymentDiv>
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

          </PaymentDiv>

            <Textbox>
                 <input type="text" placeholder='Describe Your Requirement'/>

            </Textbox>
            <button className='Req_btn'>Submit Your Requirement</button>

            </RightContent>  

          </RightSide>



      </MainContainer>

  </div>;
};

export default FF;
