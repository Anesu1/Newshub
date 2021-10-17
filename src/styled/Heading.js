/* eslint-disable react/prop-types */
import React from 'react';
import styled,{ css }  from 'styled-components';

const HeadingText = styled.h2`
    font-family:${props => props.theme.fam.semibold};
    font-size:30px;
   
    &:after{
        content:"";
        height:3px;
        width: 135px;
        position:absolute;
        bottom:-12px;
        left:0;
    }
    ${props => props.dark && css`
        color:#000;
        &:before{
            background:#000;
        }
    `}
    
`;

function Heading({children}) {
    return (
        <HeadingText >
           {children} 
        </HeadingText>
    )
}

export default Heading