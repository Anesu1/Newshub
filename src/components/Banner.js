import React from "react";
import BannerCarousel from "./BannerCarousel";
import styled from "styled-components";
import Heading from "../styled/Heading";
import Button from "../styled/Button";

const BannerWrapper = styled.section`
  padding: 5%;
  @media(min-width:992px){
    padding:0;
    display:flex;
  }
  .banner-bottom {
    margin-top: 30px;
    @media(min-width:992px){
      width:45%;
    padding:0 3%;
    }
    >h2 {
      margin: 30px 0;
      position:relative;
       &:after{
          background:#000;
        }
    }
    hr{
      background:${props => props.theme.color.lightblue};
      border:none;
      height:3px;
      width:100%;
    }
    .latest-news{
      display:flex;
      flex-wrap:wrap;
      justify-content:space-between;
      @media(min-width:768px){
     margin-bottom:30px;
   }
   .text{
     display:flex;
     flex-direction:column;
     justify-content: space-between;
   }
      h2{
        margin:10px 0;
        font-family:${props => props.theme.fam.semibold};


      }
      p{
        font-size:15px;
        font-family:${props => props.theme.fam.regular};
        line-height:15px;
        margin-bottom:20px;
      }
      img{
        width:100%;
        object-fit: contain;
        font-family:${props => props.theme.fam.semibold};
        @media(min-width:768px){
     width:35%;
   }
   @media(min-width:992px){
     width:40%;
   }
      }
      .text{
        width:100%;
        margin-bottom:30px;
        @media(min-width:768px){
     width:63%
        }
        @media(min-width:992px){
     width:57%;
   }
        h2{
          @media(min-width:992px){
     font-size:larger;
   }
        }
        span{
          margin-top:20px;
          font-size:18px;
          font-family:${props => props.theme.fam.semibold};
        }
      }
    }
  }
`;

function Banner() {
  return (
    <BannerWrapper>
      <BannerCarousel />
      <div className="banner-bottom">
        <hr />
        <Heading>Latest News</Heading>
        <div className="latest-news">
          <img src="./Images/Stunner.jpg" alt="" />
          <div className="text">
            <h2>Stunner hits back at Ti-Gonzi</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod.
            </p>
            <Button>Read More</Button>
          </div>
        </div>

        <div className="latest-news">
          <img src="./Images/reuters.jpg" alt="" />
          <div className="text">
            <h2>Zim enpmxpects another lockdown ahead of the 3rd wave. </h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod.
            </p>
            <Button>Read More</Button>
          </div>
        </div>
      </div>
    </BannerWrapper>
  );
}

export default Banner;
