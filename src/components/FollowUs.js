import React from "react";
import Heading from "../styled/Heading";
import styled from "styled-components";
import {
  FacebookSquare,
  GooglePlus,
  Instagram,
  Tiktok,
  Twitter,
  Youtube,
} from "styled-icons/boxicons-logos";
import { Email } from "@styled-icons/entypo/Email";

const FollowUsWrapper = styled.div`
    border:1px solid #000;
    border-radius:4px;
    margin:5% 0;
    .tag{
        padding:5px;
        color:#fff;
        background:${props => props.theme.color.lightblue};
        width:max-content;
        font-size:20px;
        font-family:${props => props.theme.fam.bold};
        height:40px;
        width:150px;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:4px;
        @media(min-width:992px){
            height:30px;
            width:120px;
            font-size:15px;
        }
    }
    h2{
        position:relative;
        margin:5%;
        margin-bottom:30px;
        &:after{
            background:${props => props.theme.color.lightblue};
        }
    }
    .img{
        position:relative;
        width:max-content;
        margin:0 auto;
        margin-bottom:10px;
        
        img{
            width:100%;
        }
        svg{
            color:#fff;
            height:40px;
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%, -50%);
        }
    }
    .follow-inner{
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
        p{
            text-align:center;
            margin:0 auto 10px auto;
        }
        .icon{
            margin:0 17px;
            &:nth-child(4){
                margin:0;
            }
            &:last-child{
                margin-left:10px;
            }
        }
    }
    
`;

function FollowUs() {
  return (
    <FollowUsWrapper className="followus">
      <p className="tag">Follow Us</p>
      <Heading>Follow Us</Heading>
      <div className="follow-inner">
        <div className="icon">
          <div className="img">
            <img src="./Images/icons/icon1.png" alt="" />
            <Instagram />
          </div>
          <p>Instagram</p>
        </div>
        <div className="icon">
          <div className="img">
            <img src="./Images/icons/icon2.png" alt="" />
            <FacebookSquare />
          </div>
          <p>Facebook</p>
        </div>
        <div className="icon">
          <div className="img">
            <img src="./Images/icons/icon3.png" alt="" />
            <Tiktok />
          </div>
          <p>Tiktok</p>
        </div>
        <div className="icon">
          <div className="img">
            <img src="./Images/icons/icon4.png" alt="" />
            <Email />
          </div>
          <p>@newshub.co.za</p>
        </div>
        <div className="icon">
          <div className="img">
            <img src="./Images/icons/icon5.png" alt="" />
            <Youtube />
          </div>
          <p>Youtube</p>
        </div>
        <div className="icon">
          <div className="img">
            <img src="./Images/icons/icon6.png" alt="" />
            <Twitter />
          </div>
          <p>Twitter</p>
        </div>
        <div className="icon">
          <div className="img">
            <img src="./Images/icons/icon7.png" alt="" />
            <GooglePlus />
          </div>
          <p>Google plus+</p>
        </div>
      </div>
    </FollowUsWrapper>
  );
}

export default FollowUs;
