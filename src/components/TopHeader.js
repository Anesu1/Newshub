import React from "react";
import styled from "styled-components";
import Date from "./Date";
import Links from "./Links";
import Search from "./Search";

function TopHeader() {
  return (
    <TopWrapper>
      <Date />
      <Search />
      <Links />
    </TopWrapper>
  );
}

const TopWrapper = styled.section`
  background: ${(props) => props.theme.color.lightblue};
  padding: 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 992px) {
    padding: 20px 5%;
  }
  .search-clicked {
    width: 100%;
    background: #fff;
    input {
      max-width: 400px;
      transform: translateX(0);
      @media (min-width: 992px) {
        max-width: 100%;
      }
    }
    img {
      right: 10px;
      @media (min-width: 992px) {
        right: 0;
      }
    }
  }
  .top-header-links{
    display:none;
    @media(min-width:768px){
      display:flex;
    }
  }
`;

export default TopHeader;
