import React from "react";
import Links from "./Links";
import styled from "styled-components";
import Heading from "../styled/Heading";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const FooterWrapper = styled.footer`
  background: ${(props) => props.theme.color.lightblue};
  color: #ffffff;
  .top {
    @media (min-width: 992px) {
      display: flex;
      justify-content: space-between;
    }
    .footer-about {
      padding: 5%;
      border-bottom: 1px solid #fff;
      @media (min-width: 992px) {
        padding: 3%;
        width: 30%;
        border-right: 1px solid #fff;
      }
      @media (min-width: 1200px) {
        padding: 3% 2% 3% 5%;
      }
      p {
        font-family: ${(props) => props.theme.fam.regular};
        font-size: 15px;
        line-height: 20px;
        margin: 20px 0 10px;
      }
      .sc-gtsrHT { 
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        @media (min-width: 768px) {
          width: 50%;
        }
        @media (min-width: 992px) {
          width: max-content;
        }
        p {
          width: 100%;
          @media (min-width: 768px) {
            width: max-content;
          }
        }
      }
      .sc-eCApnc{
        p{
          width:max-content;
        }
      }
    }
    .footer-categories {
      border-bottom: 1px solid #fff;

      padding: 5%;
      @media(min-width:768px){
        .top-sm{
          display:none;
        }
      }
      @media (min-width: 992px) {
        padding: 3%;
        width: 70%;
      }
      @media (min-width: 1200px) {
        padding: 3% 5% 3% 3%;
      }
      h2 {
        margin-bottom: 30px;
      }
      .fBxgqm {
    display: none;
  }

      ul:not(.bottom-links) {
        @media (min-width: 768px) {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }
        @media (min-width: 992px) {
          margin-bottom: 30px;
        }
        @media (min-width: 1200px) {
          width: max-content;
        }
        li {
          a {
            display: block;
            padding: 20px;
            padding-left: 0;
            width: max-content;
            text-decoration: none;
            color: #fff;
            font-family: ${(props) => props.theme.fam.regular};
            font-size: 18px;
            @media (min-width: 992px) {
              padding: 20px 10px 20px 0;
              font-size: 16px;
            }
            svg{
              display:none;
            }
          }
        }
      }
      hr {
        width: 100%;
        height: 2px;
        border: none;
        background: #fff;
        margin-bottom: 20px;
      }
      .bottom-links {
        @media (min-width: 768px) {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        @media (min-width: 992px) {
          justify-content: flex-start;
        }
        li {
          a {
            display: block;
            padding: 20px;
            padding-left: 0;
            width: max-content;
            text-decoration: none;
            color: #fff;
            font-family: ${(props) => props.theme.fam.regular};
            font-size: 15px;
            @media (min-width: 992px) {
              font-size: 13px;
            }
          }
        }
      }
    }
  }
  .bottom {
    text-align: center;
    p {
      padding: 5%;
      @media (min-width: 992px) {
        padding: 3%;
      }
    }
  }
  img {
    width: 150px;
  }
  h2 {
    color: #ffffff;
    position: relative;
    &:after {
      background: #ffffff;
    }
  }
 
  .footer-links{
    display: flex;
    align-items: center;
    .fBxgqm {
      display: block;
      height: 30px;
      color: #fff;
    }
  }
   
`;

function Footer() {
  return (
    <FooterWrapper>
      <div className="top">
        <div className="footer-about">
          <Link to="/">
                    <img src="./images/logo.jpg" alt="" />

          </Link>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna.
          </p>
          <Links />
        </div>
        <div className="footer-categories">
          <Heading light>Categories</Heading>
          <Menu />
          <hr />
          <ul className="bottom-links">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Privacy & Policy</a>
            </li>
            <li>
              <a href="#">Comments</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Advertise with us</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <p>NewsHub©2021</p>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
