import React from "react";
import styled from "styled-components";
import { FacebookSquare, GooglePlus, Instagram, Twitter, Youtube } from "styled-icons/boxicons-logos";
import Button from "../styled/Button";

const CardWrapper = styled.div`
    margin-bottom:30px;
    max-width:450px;
    .img{
      height:240px;
      overflow:hidden;
      position:relative;
      
      .tag{
        position:absolute;
        top:0;
        left:0;
        background:${props => props.theme.color.lightblue};
        color:#fff;
        padding:5px;
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
      img{
        width:100%;
      }
    }
    h2{
      margin:10px 0;
    }
    p{
      font-size:15px;
      margin-bottom:20px;
    }
    .links{
      width:80%;
      display:flex;
      justify-content:space-between;
      margin:20px 0;
      a{
        color: #000;;
        svg{
          height:35px;
        }
      }
    }
   

`;


function CardCat({img, tag, title, info}) {
  return (
    <CardWrapper>
      <div className="img">
        <img src={img}/>
        <p className="tag">{tag}</p>
      </div>
      
      <h2 className="title">{title}</h2>
      <p className="info">{info}</p>
      
      
      <Button>Read More</Button>
    </CardWrapper>
  );
}

export default CardCat;
