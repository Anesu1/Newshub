import React from "react";
import styled from "styled-components";
import { FacebookSquare, GooglePlus, Instagram, Twitter, Youtube } from "styled-icons/boxicons-logos";
import Button from "../styled/Button";

const CardWrapper = styled.div`
    margin-bottom:30px;
    @media(min-width:768px){
      width:30%;
    }
    .img{
      height:300px;
      overflow:hidden;
      @media(min-width:768px){
        height:150px;
      }
      @media(min-width:992px){
        height:250px;
      }
      img{
        height:100%;
      }
    }
    h2{
      margin:10px 0;
      @media(min-width:768px){
        font-size:large;
      }
    }
    p{
      font-size:15px;
      margin-bottom:20px;
      @media(min-width:768px){
        margin-bottom:10px;
      }
    }
    .links{
      width:80%;
      display:flex;
      justify-content:space-between;
      margin:20px 0;
      @media(min-width:768px){
        margin:10px 0;
      }
      a{
        color: #000;;
        svg{
          height:40px;
          @media(min-width:768px){
        height:20px;
      }
        }
      }
    }
   
`;

function Card({ img, title, info}) {
  return (
    <CardWrapper>
      <div className="img">
        <img src={img} />
      </div>
      
      <h2>{title}</h2>
      <p className="info">{info}</p>
      <Button>Read More</Button>
    </CardWrapper>
  );
}

export default Card;
