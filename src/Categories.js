import React from "react";
import CardCat from "./components/CardCat";
import styled from 'styled-components';
import Heading from "./styled/Heading";

const CategoriesWrapper = styled.div`
  @media(min-width:768px){
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
  }
  @media(min-width:992px){
    width:60%
  }
    .category-inner{
      @media(min-width:768px){
    width:45%;
  }
  
        h2:not(.title){
            position:relative;
            margin-bottom:30px;
            &:after{
                background:${props => props.theme.color.lightblue};
            }
        }
    }
`;

function Categories() {
  return (
    <CategoriesWrapper>
      <div className="category-inner">
        <Heading>Entertainment</Heading>
        <CardCat
          img="./Images/cat1.jpg"
          tag="Entertainment"
          title="Takura Denies gay allegations"
          info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna."
          date="May 22 2021"
        />
      </div>
      <div className="category-inner">
        <Heading>Politics</Heading>
        <CardCat
          img="./Images/cat2.jpg"
          tag="Politics"
          title="Lift Ban by Elections - Youth Demands"
          info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna."
          date="May 22 2021"
        />
      </div>
      <div className="category-inner">
        <Heading>Business</Heading>
        <CardCat
          img="./Images/cat3.jpg"
          tag="Business"
          title="RBZ to reveal mid-year budget"
          info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna."
          date="May 22 2021"
        />
      </div>
      <div className="category-inner">
        <Heading>Sport</Heading>
        <CardCat
          img="./Images/cat4.jpg"
          tag="Sport"
          title="Villareal lift the Europa Cup"
          info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna."
          date="May 22 2021"
        />
      </div>
    </CategoriesWrapper>
  );
}

export default Categories;
