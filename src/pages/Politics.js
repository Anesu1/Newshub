import React, {useState, useEffect} from 'react';
import Subscribe from '../components/Subscribe';
import FollowUs from '../components/FollowUs';
import PageBanner from '../components/PageBanner';
import PageCard from '../components/PageCard';
import Heading from '../styled/Heading';
import styled from 'styled-components';
import * as api from '../api/config';
import {CATEGORY} from '../api/config';
import { shuffle } from "lodash";




export const PageWrapper = styled.section`

    hr{
        width:90%;
        margin:0 auto;
    }
    .page-last{
        margin:5%;
        h2{
            margin-bottom:20px;
        }
        h3{
        margin:10px 0;
        font-family:${props => props.theme.fam.semibold};
        line-height:1.3;
        @media(min-width:992px){
        font-size: 30px;
    }
    }
    p{
        font-size:15px;
        line-height:25px;
        font-family:${props => props.theme.fam.regular};
        margin-bottom:20px;
        @media(min-width:992px){
            font-size:18px;
            line-height:1.5;
        }
    }
    button{
        width:150px;
        height:40px;
        background:${props => props.theme.color.lightblue};
        color: #fff;
        font-family:${props => props.theme.fam.semibold};
        border:none;
        border-radius:4px;
        @media(min-width:992px){
            font-size:18px;
            height:50px;
            width:200px;
        }
    }

    }
    .bottom{
        margin:5%;
        @media(min-width:768px){
        display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    }
    .followus,.subscribe{
        @media(min-width:768px){
        width:49%;
    }
    }
    .followus{
        .follow-inner{
            @media(min-width:768px){
        justify-content: flex-start;
    }
        }
    }
    }
`;


function Politics() {
    const [newsList, setEventList] = useState([]);
    const [error, setError] = useState();
    useEffect(()=>{
        api
        .fetchNews(CATEGORY.POLITICS)
        .then((response) => setEventList(shuffle(response?.articles)))
        .catch((error) => setError(error));    },[])
    return (
        <PageWrapper>
                  <PageBanner articles={newsList.slice(0, 3)} />

            <hr />
            <div className="page-last">
                <Heading>
                    Politics
                </Heading>
                {error ? "Error getting data":null}
            {newsList.slice(3, 8).map((e, i)=>{
                return <PageCard img={e.urlToImage} key={i} cardBody={e.content} cardTitle={e.title}/>
            })}
            </div>
            <div className="bottom">
              <FollowUs />
              <Subscribe />
            </div>
        </PageWrapper>
    )
}

export default Politics
