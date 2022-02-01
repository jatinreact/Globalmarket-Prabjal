import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// <---------------------Styled-------------->

const UpperHeader = styled.div`
  width: 100vw;
  height: 50px;
  color: #fdfdfd;
  background-color: #f35;
  
  display: flex;

    button{
      color: #fff;
      margin-left: 10px;
      background-color: #004099;
      border-radius: 40px;
      height: 28px;
      width: max-content;
      font-size: .75rem;
      padding: 0 15px;
      border: 0;

      &:hover{
        background-color: #e83e8c;;
      }
    }
    p{
      margin: auto;
      float: none;
      width: max-content;
      font-size: .875rem;

    }

    @media only screen and (max-width: 405px){

      p{
        font-size: 0.5rem;
      }
      button{
      color: #fff;
  
      background-color: #004099;
      
      height: 24px;
      width: max-content;
      font-size: .65rem;

      }
      
      

    }
  
`
const MainHeader = styled.div`

    padding: 10px;
    background-color: #fff;
    justify-content: start;
    box-shadow: 0 0 20px rgb(0 0 0 / 7%);
    position: sticky;
    top: 0px;
    z-index: 100;

   
  

`
const MainHeaderContainer = styled.div`

    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    transition: 0.5s ease-in-out;

`
const Leftside = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

  

      li{
        list-style: none;
        padding: 8px 17px;
        line-height: 1;
        font-size: .8rem;
        color: #222831;
        cursor: pointer;

        &:hover{
          color: #fe3456;;
        }
      }

      .Links{
        text-decoration: none;
      }

      @media only screen and (max-width: 991px){

        li{
          display: none;
        }
      

    }
    
   

`
const RightDide = styled.div`

    display: flex;
    align-items: center;
    width: 25%;
    justify-content: space-evenly;
    font-size: .8rem;
    position: relative;
    transition: 0.5s;
      p{
        &:hover{
       color: #fe3456;;

      }
   
    }

    button{

      height: 38px;
      padding: 8px 15px;
      border: 1px solid blue;
      color: #222;
      border-radius: 2px;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      
      
      font-weight: 500;
      font-size: .8rem;
      transition: .3s;

      &:hover{
        background-color:#fe3456;
        color: #fff;
        border: 1px solid #fff;
      }

    }

    @media only screen and (max-width: 1086px){
      button{
       
        display: none;
      }
      p{
        display: none;
      }

    }



`


const SignIn = styled.div`

  button{
    display: none;
    background-color: #004099;
    margin-left: 80px;
    color: #fff;
    right: 0;
    position: absolute;
    margin-top: -25px;
    transition: 0.5s ease-in-out;
    
  }

  @media only screen and (max-width: 991px){
      button{
        display: block;
        
        
      }
    }

    

`
const LowerHeader = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: whitesmoke;

`
const LowerLeftSide = styled.div`
  width: 20%;
  cursor: pointer;
  margin-right: 6px;
 
    h5{
    width: 100%;
    text-transform: uppercase;
    font-weight: 600;
    padding: 12px 0;
    margin-bottom: 0;
    font-size: 1rem;
    text-align: center;

    &:hover{
      background-color: #fff;
    }
  }

  @media only screen and (max-width: 991px){
       display: none;
     }

`


const LowerMiddle = styled.div`
  width: 80%;
  display: flex;
  align-items: center;

 

 
`
const LowerRight = styled.div` 
     width: 20%;

     @media only screen and (max-width: 1091px){
       display: none;
     }
    
`
const  Content = styled.div` 
  width: 100%;
  display: flex;
  align-items: center;
  

  form{
    width: 50%;
    

    input{
    margin-right: 10px;
    height: 40px;
    width: 100%;
    border: 0;
    height: 40px;
    font-size: .8rem;
    background-color: #ffffff;
    padding: 0 0.75rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    outline: none;
    }
  }

  select{
    width: 90px;
    outline: none;
    border: 0;
  
    height: 40px;
    margin-left: 26px;
    input{
      
    }

  }

  button{
      height: 40px;
      padding: 0 30px;
      border: 0;
      cursor: pointer;
      

    }

    & :nth-child(4){
      width: 200px;
      margin-left: 15px;
      background-color: #fe3456;
      /* padding: 0 14px; */
      text-align: center;
      font-size: .8rem;
      transition: .3s;
      box-shadow: unset!important;
      font-weight: 500;
       border-radius: 2px;
       border: #004099;
       color: #fff;
       &:hover{
        
        background-color: #004099;
       
      }

    
      
      
      
      
      }
    & :nth-child(3){
      width: 110px;
      padding: 0px;
      display: inline-block;
      text-decoration: none;
      font-weight: 500;
       border-radius: 2px;
       font-size: .8rem;
      transition: .3s;
      box-shadow: unset!important;
      background-color:#004099; 
      color: #fff;

      &:hover{
        
        background-color: #fe3456;
       
      }

    
      
     
      
      
      }
      @media screen and (max-device-width: 1200px) {
        & :nth-child(3){
          width: 230px;

        }

     
      }

      @media only screen and (max-width: 991px){
    width: 80%;
     }

 `
const Button = styled.button``
    





// ---------------Styled-Components----------

const Navbar = () => {
  return(
   <>
    <UpperHeader>
          <p>Sign up today and be a part of the fastest growing B2B platform
              <Link to='/'>
                 <button class="btn">Join now</button>
      
             </Link>
             
            
          </p>    
    </UpperHeader>
    <MainHeader>
      <MainHeaderContainer>
      

      <Leftside>
      <img class="img-responsive" src="https://globaltradeplaza.com/assets/images/logo_color.png" width="220" height="40" alt="Online B2B Marketplace in India"/>
      <Link to="/adv" className='Links'>
          <li >Advertise with us</li>
          </Link>
          <Link to='/Product' className='Links'>
          <li>Products</li>
          </Link>
          <Link to='/buy' className='Links'>
          <li>Buy leads</li>            
          </Link>
          <Link to='/company' className='Links'>
          <li>Companies</li>
          </Link>
          <Link to='/contact' className='Links'>
          <li>Contact</li>
          </Link>
          <Link to='/about' className='Links'>
          <li>About</li>
          </Link>                     
      </Leftside>     
      <RightDide>
         <button>Create an account</button>
         <p>Login</p>
         <p>Need help ?</p>
         <SignIn>
           <button>SignIn</button>
         </SignIn>
       </RightDide>             
      </MainHeaderContainer>
    </MainHeader>

    <LowerHeader>
      
      <LowerLeftSide>
      <h5>ALL CATEGORIES</h5>

      </LowerLeftSide>
      <LowerMiddle>
        <Content>
        <form action="">

            <input type="text" placeholder='Type a keyword to search'/>
        </form>
        
            <select name="" id="">
                         <option value="volvo">Product</option>
                        <option value="saab">Companies</option>
                        <option value="mercedes">Buy leads</option>
                 
            </select>

            <button>Search</button>
            <button>Post buy requirement</button>
     

        </Content>


      </LowerMiddle>
    
      <LowerRight>
          <h4>Call: +91 842 908 8885</h4>

      </LowerRight>


    </LowerHeader>
  
  </>
  )
};

export default Navbar;
