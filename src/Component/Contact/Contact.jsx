import React from 'react';
import styled from 'styled-components';
// import './content.scss'


// -------------------------styling part============================
const ImageComtainer = styled.div`
width: 100vw;
height: 300px;

position: relative;

img{
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(.3);
}

  
   
       
   


`
const Heading = styled.div`

    
position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;

  color: #fff;
  line-height: 20px;
  
  h1{
      margin-bottom: 20px;
  }
    
   
 
   

`
const OverLayer = styled.div`

position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 1;
background: hsl(349deg 1% 22% / 53%);

`
const Card = styled.div`
    margin: 0 130px;

    position: relative;
    top: -30px;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 0.25rem;
    z-index: 3;
    padding: 25px 20px 15px;
    margin-bottom: 20px;

  
    


    h4{
        margin-bottom: 0.5rem;
          margin-top: 0;
         line-height: 1.2;
    }
    p{
        margin-bottom: 10px;
        font-style: italic!important;
        font-size: .875rem;
    }

    hr{
    margin-top: 1rem;
    margin-bottom: 1rem;
   
    border: 0;
    border-top: 1px solid rgba(0,0,0,.1);
   
    

  
    }

    @media only screen and (max-width: 991px){
      margin: 0 80px;
    }
`
const HeaderCard2 = styled.div`


        h2{
            font-size: 1.25rem;
            text-transform: uppercase;
            margin-bottom: 15px;
            position: relative;
            font-weight: 600;
            width: max-content;
            display: inline-block;
        }
h2:after {
    content: "";
    width: 100%;
    height: 4px;
    bottom: -11px;
    left: 0;
    position: absolute;
    background: linear-gradient(
                    135deg
                    ,#fe3456 0,#fe3456 51%,#004099 51%,#004099 51%,#004099 99%);
}





`
const LowerMainContainer = styled.div`

    width: 100%;
    
    /* border: 1px solid red; */
    height: 500px;
    margin-bottom:  20px;

`
const ContentHolder = styled.div`
    /* border: 1px solid yellow; */
    margin: 0 150px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;

    @media only screen and (max-width: 991px){
      margin: 0 100px;
    }

`
const LowerLeftContainer = styled.div`
    
    width: 40%;
    /* height: 100%; */
    /* margin-left: 30px;
    margin-right: 10px; */

        h1{
            /* border: 1px solid ; */
            font-size: 1.6rem;
            width: max-content;
            line-height: 1.4;
            margin-bottom: 20px;
            position: relative;
            font-weight: 600;
            color: #233;
        }
        p{
            font-size: .8rem;
            line-height: 19px;

        }

        @media only screen and (max-width: 991px){
                width: 100%;
    }


`
const LowerRightContainer = styled.div`
    width: 60%;
    /* border: 1px solid red; */
    height: 120px;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 991px){
                width: 100%;
    }
`
const LowerImageContainer = styled.div`
    width: 120px;
    height: 100px;
    /* border: 1px solid pink; */
   
    display: flex;
    padding: 5px;
    

    img{

   
    width: 100%;
    height: 100%;
    
    border-radius: 4px;
    box-shadow: 0 0 35px rgb(0 0 0 / 6%);
    

    }
    
`

const LowerRighrHeader = styled.div`
    background-color: #fff;
    padding-left: 15px;
    h4{
        font-weight: 600;
        margin-bottom: 5px;
    }

    p{
        font-size: .8rem;
    line-height: 19px;
        
    }

`
const RightMainWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

  
`
const CardContainer = styled.div`
     width: 100vw;
    height: 500px;
    

    position: relative;
    img{
         width: 100%;
         height: 100%;
            background-repeat: no-repeat;
         background-size: cover;
            filter: brightness(.3);
}


`
const CardWrapper = styled.div`
   
    /* border: 1px solid blue; */
    width: 100vw;
    /* height: 300px; */
    flex-wrap: wrap;
    
   
    display: flex;
    /* justify-content: space-around; */
    align-items: center;
    justify-content: center;

    

`
const SmallCard = styled.div`
/* border: 1px solid yellow; */
width: 270px;

height: 250px;
margin-right: 20px;
background-color: #fff;
border-radius: 5px;

    img{
        width: 80px;
        height: 100px;
        
    }
    p{
        color: #000;
        text-align: center;
        padding: 10px;
    }
`
const WhatMakeUs = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    padding: 30px 150px;
    text-align: center;
    p{
        margin: 20px 0;
        font-size: .8rem;
        line-height: 19px;
    }


`
// const ImageComtainer = styled.div``


// ----------------------styled-compinents---------------------------
const Contact = () => {
  return <>
  
        <ImageComtainer>
            <img src="https://globaltradeplaza.com/assets/images/banner/about.jpg" alt="" />

            <Heading>
                <h1>GLOBAL TRADE PLAZA</h1>
                <p>The Future of International Trade and Worldwide Network
                    <br />

                    Top B2B Companies in India & B2B Marketplace</p>

                    

            </Heading>
            <OverLayer>

            </OverLayer>


        </ImageComtainer>

        <Card>
            <h4>What We Are?</h4>
          <p>  “We are a global B2B Marketplace specializing in international trade as well as solving the difficulties faced by Indian companies involved in import and export.”</p>
          <hr />
          <h4>
          Understanding Our Work As A B2B Portal
          </h4>
          <p>Global Trade Plaza connects manufacturers, exporters, suppliers, or any business-to- business seller with an enormous base of national and international buyers. We provide an interactive B2B marketplace platform for sellers to exhibit their products and reach potential buyers.

                Our journey as a B2B marketplace in India commenced with the aim of addressing the problems in the B2B sector, especially the ones concerning small scale and medium scale businesses and Indian exporters. In B2B, the export sector is highly competitive and small scale exporters have been struggling for a long time to overcome the same. But various obstacles such as the language barrier and understanding of the supply chain make it difficult for them (especially Indian exporters) to thrive.</p>
       
            <p>
            " We at Global Trade Plaza understand this and offer a one-stop solution that will help such companies make a profitable business."

                We offer a feature-rich B2B marketplace in India and numerous other countries for sellers to attract and reach a diverse customer base while also avoiding the competitive nature of a traditional online B2B portal. Simultaneously, we assure the buyers on our platform have access to a comprehensive and reliable seller base.

                In our journey from being a B2B marketplace in India to becoming a global name in the B2B ecosystem, we have assisted several companies in achieving their business objectives and establishing themselves in the overseas market.
            </p>

            
        </Card>
        <Card>
            <HeaderCard2>
                <h2>OUR VISION</h2>
            </HeaderCard2>
   
            <p>"Our vision is to be the ultimate solution to every complication faced by exporters and importers and make international trading simple, safe and quick."
            Indian exporters are an integral part of the entire supply chain and through our online B2B portal, we want to make sure that their problems are addressed and solved in the best possible manner. We want to open the doors to safe international trade and make it as transparent, timely and easy as possible.</p>

        </Card>
        
        <LowerMainContainer>
                <ContentHolder>
                    <LowerLeftContainer>
                        <h1>WHAT WE OFFER <br />
                        AT GLOBAL TRADE PLAZA</h1>
                        <p>We believe our growth is in the accomplishments of our customers. Therefore, we go
                                above and beyond to offer services that are unique and effective. As one of the fastest-
                                growing B2B companies in India, we also have a dedicated team of professionals who
                                have years of expertise in digital marketing, advertising, SEO, and more.</p>

                    </LowerLeftContainer>
                    <LowerRightContainer>
                        <RightMainWrapper>

                            
                            <LowerImageContainer>
                                <img src="https://globaltradeplaza.com/assets/images/world.svg" width="80" height="80" alt="" />

                            </LowerImageContainer>
                            <LowerRighrHeader>
                                <h4>Global Exposure</h4>
                                <p>We concentrate on providing global exposure by getting you multiple business opportunities through our international B2B marketplace. Our team performs strong research and analysis before making any decision and the same reflects in the trust that our clients place in us.</p>

                            </LowerRighrHeader>

                        </RightMainWrapper>
                        <RightMainWrapper>

                            
                            <LowerImageContainer>
                                <img src="https://globaltradeplaza.com/assets/images/world.svg" width="80" height="80" alt="" />

                            </LowerImageContainer>
                            <LowerRighrHeader>
                                <h4>Global Exposure</h4>
                                <p>We concentrate on providing global exposure by getting you multiple business opportunities through our international B2B marketplace. Our team performs strong research and analysis before making any decision and the same reflects in the trust that our clients place in us.</p>

                            </LowerRighrHeader>

                        </RightMainWrapper>
                        <RightMainWrapper>

                            
                            <LowerImageContainer>
                                <img src="https://globaltradeplaza.com/assets/images/world.svg" width="80" height="80" alt="" />

                            </LowerImageContainer>
                            <LowerRighrHeader>
                                <h4>Global Exposure</h4>
                                <p>We concentrate on providing global exposure by getting you multiple business opportunities through our international B2B marketplace. Our team performs strong research and analysis before making any decision and the same reflects in the trust that our clients place in us.</p>

                            </LowerRighrHeader>

                        </RightMainWrapper>
                        <RightMainWrapper>

                            
                            <LowerImageContainer>
                                <img src="https://globaltradeplaza.com/assets/images/world.svg" width="80" height="80" alt="" />

                            </LowerImageContainer>
                            <LowerRighrHeader>
                                <h4>Global Exposure</h4>
                                <p>We concentrate on providing global exposure by getting you multiple business opportunities through our international B2B marketplace. Our team performs strong research and analysis before making any decision and the same reflects in the trust that our clients place in us.</p>

                            </LowerRighrHeader>

                        </RightMainWrapper>

                    </LowerRightContainer>

                </ContentHolder>


        </LowerMainContainer>

        <CardContainer>
            
                <img src="https://globaltradeplaza.com/assets/images/vision-banner.png" alt="" />

                <Heading>

                    <h1>GOALS WE WORK WITH</h1>

                <CardWrapper>

                    <SmallCard>
                            <img src="https://globaltradeplaza.com/assets/images/secureTrade.svg" alt="" />
                            <p>
                            To solve the difficulties faced by Indian exporters and importers and help them conduct secure and profitable business transactions
                            </p>
                    </SmallCard>
                    <SmallCard>
                            <img src="https://globaltradeplaza.com/assets/images/transaprent.svg" alt="" />
                            <p>
                            To solve the difficulties faced by Indian exporters and importers and help them conduct secure and profitable business transactions
                            </p>
                    </SmallCard>
                    <SmallCard>
                            <img src="https://globaltradeplaza.com/assets/images/secureTrade.svg" alt="" />
                            <p>
                            To solve the difficulties faced by Indian exporters and importers and help them conduct secure and profitable business transactions
                            </p>
                    </SmallCard>
                    <SmallCard>
                            <img src="https://globaltradeplaza.com/assets/images/FreeTrade.svg" alt="" />
                            <p>
                            To solve the difficulties faced by Indian exporters and importers and help them conduct secure and profitable business transactions
                            </p>
                    </SmallCard>
                    
                 
                    


                </CardWrapper>
                    

                        

                </Heading>
            


            
            

        </CardContainer>

        <WhatMakeUs>
                <h3>WHAT MAKES US ONE OF A KIND</h3>

                <p>Although we started as a B2B marketplace in India, our unique services aided us in becoming an international platform. Here's a glance at some <br /> of those exceptional services-</p>

        </WhatMakeUs>
   
    



  </>;
};

export default Contact;
