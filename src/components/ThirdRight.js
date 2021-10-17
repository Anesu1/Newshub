import React from "react";
import styled from "styled-components";
import Button from "../styled/Button";
import Heading from "../styled/Heading";
import SocialIcons from "../styled/SocialIcons";
import FollowUs from './FollowUs'
import Subscribe from "./Subscribe";

const ThirdRightWrapper = styled.div`
 @media(min-width:768px){
         display:flex;
         justify-content: space-between;
         flex-wrap:wrap;
       }
       @media(min-width:992px){
    width:35%
  }
    h2{
       margin-bottom:30px;
       @media(min-width:768px){
         width:100%;
       }
    }
    .most-inner{
      @media(min-width:768px){
         width:55%;
         display:block;
       }
       @media(min-width:992px){
    width:100%;
  }
        .item{
            display:flex;
            margin-bottom:20px;
        }
    }
    .followus,.subscribe{
      @media(min-width:768px){
         width:49%;
       }
       @media(min-width:992px){
    width:100%;
  }
    }
`;

function ThirdRight() {
  return (
    <ThirdRightWrapper>
        <Heading>Most Popular</Heading>
        
        <div className="most-inner">
          <div className="item">
            <p>01.</p>
            <div className="text">
              <h3>Mbuya Nehanda Statue revealed</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna.
              </p>
             
            </div>
          </div>
          <div className="item">
            <p>02.</p>
            <div className="text">
              <h3>Mbuya Nehanda Statue revealed</h3>
            </div>
          </div>
        </div>
        <FollowUs />
        <Subscribe />
    </ThirdRightWrapper>
  );
}

export default ThirdRight;
