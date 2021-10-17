import React from 'react';
import styled from 'styled-components'
import { FacebookSquare, GooglePlus, Instagram, Twitter, Youtube } from 'styled-icons/boxicons-logos';

const SocialIconsWrapper = styled.div`
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
    
`;

function SocialIcons() {
    return (
        <SocialIconsWrapper className="links">
        <a href="#">
          <FacebookSquare />
        </a>
        <a href="#">
          <Twitter />
        </a>
        <a href="#">
          <Instagram />
        </a>
        <a href="#">
          <Youtube />
        </a>
        <a href="#">
          <GooglePlus />
        </a>
      </SocialIconsWrapper>
    )
}

export default SocialIcons
