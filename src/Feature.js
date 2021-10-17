import React from "react";
import styled from "styled-components";
import Card from './components/Card';

const FeatureWrapper = styled.section`
  margin: 5%;
  @media(min-width:768px){
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
  }
  
  hr {
    border: none;
    height: 3px;
    background: ${(props) => props.theme.color.lightblue};
    width: 100%;
    margin: 0 auto 10px;
  }
`;


function Feature() {
  return (
    <FeatureWrapper>
      <hr />
      <Card
        img="./Images/feat1.jpg"
        title="Zim expects another 
                Lockdown ahead of the
                3rd wave. "
        info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod."
       
      />
      <Card
        img="./Images/feat2.jpg"
        title="Zim expects another 
            Lockdown ahead of the
            3rd wave. "
        info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod."
     
      />
      <Card
        img="./Images/feat3.jpg"
        title="Zim expects another 
                Lockdown ahead of the
                3rd wave. "
        info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod."
    
      />
    </FeatureWrapper>
  );
}

export default Feature;
