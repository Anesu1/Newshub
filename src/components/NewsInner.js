/* eslint-disable react/prop-types */
import React from 'react'
import Heading from '../styled/Heading'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NewInnerWrapper = styled.div`
    margin-bottom: 20px;
    h2{
        position:relative;
        margin-bottom:30px;
        &:after{
            background: #000;
        }
    }
    h3{
        margin:10px 0;
        font-family:${props => props.theme.fam.semibold};
        line-height:1.3;
    }
    p{
        font-size:15px;
        line-height:25px;
        font-family:${props => props.theme.fam.regular};
        margin-bottom:20px;
    }
    button{
        width:150px;
        height:40px;
        background:${props => props.theme.color.lightblue};
        color: #fff;
        font-family:${props => props.theme.fam.semibold};
        border:none;
        border-radius:4px;
    }

`;

function NewsInner({img, headingText, text, header}) {
    return (
        <NewInnerWrapper>
            <Heading>{header}</Heading>
            <img src={img} alt="" />
            <h3>{headingText}</h3>
            <p>{text}</p>
           <Link to="/post"> <button>Read more</button></Link>
            
        </NewInnerWrapper>
    )
}

export default NewsInner
