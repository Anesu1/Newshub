import React, { useState } from "react";
import styled from "styled-components";

const SearchWrapper = styled.div`
  background: transparent;
  height: 40px;
  width: 0;
  position: absolute;
  display: flex;
  max-width: 400px;
  transition: 0.7s;
  right: 0%;
  @media (min-width: 992px) {
    position: unset;
    flex: 1;
    max-width: 100%;
    margin: 0 20px;
    background: #fff;
    padding: 0 10px;
  }
  input {
    flex: 1;
    border: none;
    transition: 0.7s;
    max-width: 0;
    overflow: hidden;
    background: transparent;
    font-size: 15px;
    font-family: ${(props) => props.theme.fam.monda};
    color: #000;
    transform: translateX(-15px);
    outline: none;
    &::placeholder {
      font-family: ${(props) => props.theme.fam.monda};
      color: #000;
    }
    @media (min-width: 992px) {
      max-width: 100%;
      transform: translateX(0);
    }
  }
  img {
    position: relative;
    right: 40px;
    width: 30px;
    transition: 0.7s;
    object-fit: contain;
    @media (min-width: 992px) {
      right: 0;
      width: 20px;
    }
  }
`;

function Search() {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <SearchWrapper className={openSearch ? "search-clicked" : ""}>
      <input type="text" placeholder="Search" />
      <img
        onClick={() => setOpenSearch(!openSearch)}
        src="./Images/search.png"
        alt=""
      />
    </SearchWrapper>
  );
}

export default Search;
