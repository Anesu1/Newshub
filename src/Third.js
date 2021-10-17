import React from 'react';
import styled from 'styled-components';
import Categories from './Categories';
import ThirdRight from './components/ThirdRight';

const ThirdWrapper = styled.section`
      margin: 10% 5%;
      display:flex;
      flex-wrap:wrap;
      justify-content: space-between;
  hr {
    border: none;
    height: 3px;
    background: ${(props) => props.theme.color.lightblue};
    width: 100%;
    margin: 0 auto 10px;
  }
`;

function Third() {
    return (
        <ThirdWrapper>
            <hr />
            <Categories />
            <ThirdRight />
        </ThirdWrapper>
    )
}

export default Third
