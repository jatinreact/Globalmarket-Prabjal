import React from 'react';
import './Second.scss'
// import '../Common/common.scss'
import styled from 'styled-components';

// =======================================

const MainCntainer = styled.div`
    width : 100vw;
    background-color:blur;
    max-width: 100%;
    /* height: 70px; */
    position: relative;
`
const Container = styled.div`

    background-color: #007bff;
    margin:20px 0;
    
   
`
const Header = styled.div`
padding: 10px 0;

   
   h1{
   
  text-align: center;
  width: 100%;
  color: #fff;
  font-size: 1.2rem;
  margin: 20px 0 0 0;
}

    
   
`
const List = styled.div`
    
    display  :flex ;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
    flex-wrap: wrap;
    li{
        text-transform: uppercase;
        font-weight: 500;
        margin: 10px 0 20px;
        padding: 20px 0;
        display: table-cell;
        font-size: .875rem;
        color: #fff;
        }
    
    button{
        border: 1px solid #fff;
        color: #ffff;
        border-radius: 2px;
        height: 40px;
        background-color:transparent;
        font-weight: 500;
        padding: 10px 40px;
        font-size: .8rem;
        transition: .3s;
        cursor: pointer;

        &:hover{
            background-color: #fff;
            border: 1px solid #004099;
            color: #004099;

        }
    }

    /* @media screen and (max-width: 1010px){
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
                 
    } */


`
// const Header = styled.div`
//     border: 1px solid green;
    
   
// `
// const Header = styled.div`
//     border: 1px solid green;
    
   
// `


// --------------------------------------
const Second_page_navbar = () => {
  return <>
        <MainCntainer>
            <Container>
                    <Header>
                        <h1>
                        India's Largest B2B Portal & Most Trusted B2B Marketplace
                        </h1>


                    </Header>
                    <List>
                        <li>Trade with confidence</li>
                        <li>Verified buyers </li>
                        <li>Global network</li>
                        <li> 24 / 7 help center </li>
                        
                        
                        <button>Create an account</button>
                    </List>

                 

            </Container>

        </MainCntainer>


      </>

};

export default Second_page_navbar;
