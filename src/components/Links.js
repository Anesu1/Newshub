import React from "react";
import * as boxiconsLogos from "@styled-icons/boxicons-logos";
import * as faBrands from "@styled-icons/fa-brands";
import { FacebookSquare } from "@styled-icons/boxicons-logos/FacebookSquare";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Youtube } from "@styled-icons/boxicons-logos/Youtube";
import { GooglePlus } from "@styled-icons/boxicons-logos/GooglePlus";
import { Tiktok } from "@styled-icons/fa-brands/Tiktok";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import styled from "styled-components";

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  .fBxgqm {
    display: block;
    height: 30px;
    color: #fff;
    margin: 0 5px;
  }
  @media (min-width: 768px) {
    display: block !important;
    display: flex !important;
    align-items: center;

    p {
      font-family: ${(props) => props.theme.fam.regular};
      font-size: 15px;
      line-height: 20px;
      margin: 20px 0 10px;
      color: #fff;
      width:max-content;
    }
  }
`;

function Links() {
  return (
    <LinkWrapper className="top-header-links footer-links">
      <p>Follow Us: </p>
      <a href="#">
        <FacebookSquare />
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
      <a href="#">
        <Tiktok />
      </a>
      <a href="#">
        <Twitter />
      </a>
    </LinkWrapper>
  );
}

export default Links;
