/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const PageCardContainer = styled.div`
position:relative;
margin-bottom:20px;
    @media(min-width:768px){
        display:flex;
        justify-content:space-between;
        margin-bottom:40px;
    }
    img{
        width:100%;
        object-fit:contain;
        @media(min-width:768px){
        width:40%;
    }
    @media(min-width:992px){
            width:32%;
        }
    }
    .text{
        @media(min-width:768px){
        width:57%;

    }
    @media(min-width:992px){
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        width:66%;
        p{
            font-size:18px;

        }
    }
    }
    .links{
        
        width:max-content;
        @media(min-width:768px){
            position:absolute;
        right:0;
        bottom:0;
        }
        a{
            margin-right:10px;
            svg{
                height:30px;
            }
        }
    }
`;

function PageCard({img, cardBody, cardTitle}) {
    return (
        <PageCardContainer>
            <img src={img} alt="" />
            <div className="text">
                <h3>{cardTitle}</h3>
                <p>{cardBody}</p>
                <button>Read More</button>
            </div>
           
        </PageCardContainer>
    )
}

export default PageCard
