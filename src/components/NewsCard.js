import React from 'react'
import Heading from '../styled/Heading'
import SocialIcons from '../styled/SocialIcons';
import styled from 'styled-components';
import Button from '../styled/Button';

const CardWrapper = styled.div`
    margin-bottom:20px;
    h3{
        font-family:${props => props.theme.fam.semibold};
        margin:10px 0;
        line-height:1.3;
    }
`;

function NewsCard({img, headingText}) {
    return (
        <CardWrapper>
            <img src={img} alt="" />
            <h3>{headingText}</h3>
            <Button>Read More</Button>
        </CardWrapper>
    )
}

export default NewsCard
