import React, { useState } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import {Link} from "react-router-dom"

const HeaderWrapper = styled.header`
  background: ${(props) => props.theme.color.blue};
  display: flex;
  justify-content: space-between;
  align-items: center;
.top-sm{
  background:${props => props.theme.color.lightblue};
  color:#fff;
  padding: 30px 0;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: center;
  text-align:center;
  width:100%;
  @media(min-width:768px){
    display:none;
  }
  img{
    margin-bottom:20px;
  }
  p{
    font-family:${props => props.theme.fam.regular};
    width: max-content;
  }
  .change{
    top:10px;
    right:10px;
    span{
      width:25px;
    }
  }
}
  img {
    width: 150px;
  }
  .hamburger {
    padding: 20px 53px 20px 8px;
    position: absolute;
    right: 3%;
    @media (min-width: 992px) {
      display: none;
    }
    span {
      width: 35px;
      border-radius: 10px;
      transition: 0.7s;
      height: 4px;
      background: #fff;
      position: absolute;
      border-radius:10px;
      &:before {
        width: 100%;
        height: 100%;
        position: absolute;
        transition: 0.7s;
        border-radius:10px;
        top: -13px;
        content: "";
        border-radius: 10px;
        background: #fff;
      }
      &:after {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 13px;
        content: "";
        transition: 0.7s;
        border-radius:10px;
        border-radius: 10px;
        background: #fff;
      }
    }
  }
  .change {
    span {
      background: transparent;
      &:before {
        top: 0;
        transform: rotate(495deg);
      }
      &:after {
        top: 0;
        transform: rotate(-495deg);
      }
    }
  }
  ul {
    height: 100%;
    position: absolute;
    top: 0;
    right: 0%;
    transform: translateX(100%);
    width: 100%;
    z-index: 20;
    max-width: 0;
    overflow-x: hidden;
    transition: 0.7s;
    background: #fff;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    @media (min-width: 992px) {
      max-width: unset;
      transform: unset;
      background: transparent;
      position: unset;
      justify-content: space-around;
      flex-direction: row;
    }
    li {
      a {
        text-decoration: none;
        color: #000;
        display: block;
        width: max-content;
        padding: 20px;
        font-family: ${(props) => props.theme.fam.medium};
        display: flex;
        @media (min-width: 992px) {
          padding: 20px 0;
          color: #fff;
          font-size: 13px;
        }
        @media (min-width: 1200px) {
          font-size: 15px;
        }
        svg{
          height: 20px;
          margin-left: 13px;
          transform: translateY(-3px);
          @media (min-width: 992px) {
            margin: 0 10px 0 3px;
            height: 15px;
            transform: translateY(0px);
          }
        }
      }
    }
    
  }

  .open {
    transform: translateX(0);
    max-width: 100%;
  }
`;

function Header() {
  const [click, setClick] = useState(false);

  window.onscroll = () =>{
    setClick(false)
} 

  return (
    <HeaderWrapper>
      <Link to="/">
            <img src="./Images/logo.jpg" alt="" />

      </Link>
      <div
        className={click ? "hamburger" : "hamburger"}
        onClick={() => setClick(true)}
      >
        <span></span>
      </div>
      <Menu click={click} setClick={setClick}/>
    </HeaderWrapper>
  );
}

export default Header;
