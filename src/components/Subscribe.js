import React from 'react'
import Heading from '../styled/Heading';
import styled from 'styled-components'

const SubscribeWrapper = styled.div`
  border:1px solid #000;
    border-radius:4px;
    margin:5% 0;
    .tag{
        padding:5px;
        color:#fff;
        background:${props => props.theme.color.lightblue};
        width:max-content;
        font-size:20px;
        font-family:${props => props.theme.fam.bold};
        height:40px;
        width:150px;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:4px;
        @media(min-width:992px){
            height:30px;
            width:120px;
            font-size:15px;
        }
    }
    h2{
        position:relative;
        margin:5%;
        margin-bottom:30px;
        &:after{
            background:${props => props.theme.color.lightblue};
        }
    }
    .text{
        margin:5%;
        font-size:15px;
    }
    input{
        width:80%;
        margin:5%;
        height:50px;
        border:1px solid #707070;
        border-radius:3px;
        padding:3px 10px;
        font-size:20px;
    }
    button{
        margin:3% 5%;
        color:#fff;
        border-radius:4px;
        height:40px;
        font-weight:bold;
        font-size:20px;
        border:none;
        width:150px;
        background:${props => props.theme.color.lightblue};
    }
`;

function Subscribe() {
    return (
        <SubscribeWrapper className="subscribe">
            <p className="tag">Subscribe</p>
            <Heading>Subscribe</Heading>
            <p className="text">Subscribe to our newletter</p>
            <input type="text" placeholder="Email Address" />
            <button type="submit">Submit</button>
        </SubscribeWrapper>
    )
}

export default Subscribe
