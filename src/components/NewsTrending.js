import React from 'react';
import styled from 'styled-components';

const NewsTrendingWrapper = styled.div`
margin:20px; 

    @media(min-width:768px){
        width:44%;
    }
    @media(min-width:992px){
        width:22%;
        margin:10px;
    }
    h3{
        margin:20px 0;
        font-family:${props => props.theme.fam.semibold};
    }
    p{
        font-size:15px;
        line-height:25px;
        font-family:${props => props.theme.fam.regular};
        margin-bottom:10px;
        @media(min-width:768px){
        font-size:13px;
    }
    }
`;

function NewsTrending({title}) {
    return (
        <NewsTrendingWrapper>
            <h3>{title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, velit!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, velit!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, velit!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, velit!</p>
        </NewsTrendingWrapper>
    )
}

export default NewsTrending
