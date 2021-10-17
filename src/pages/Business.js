import React, {useState, useEffect} from "react";
import styled from "styled-components";
import * as api from '../api/config'
import PageBanner from "../components/PageBanner";
import Subscribe from "../components/Subscribe";
import FollowUs from "../components/FollowUs";
import Heading from "../styled/Heading";
import PageCard from "../components/PageCard";
import { PageWrapper } from "./Politics";
import {CATEGORY} from '../api/config';
import {shuffle} from 'lodash';


function Business() {
  
  

  const [newsList, setEventList] = useState([]);
    const [error, setError] = useState();
    useEffect(()=>{
        api.fetchNews(CATEGORY.BUSINESS).then(response=>setEventList(shuffle(response?.articles))).catch(error=>setError(error))
        
      },[])
  return (
    <PageWrapper>
      <Heading>Business</Heading>
      <PageBanner
        
        img="./Images/news.jpg"
        title="18 Companies to close over tax"
        
      />
    <hr />
      <div className="page-last">
        <Heading>Business</Heading>
        {error ? "Error getting data":null}
            {newsList.map((e, i)=>{
                return <PageCard img={e.urlToImage} key={i} cardBody={e.content} cardTitle={e.title}/>
            })}
      </div>
      <div className="bottom">
        <FollowUs />
        <Subscribe />
      </div>
    </PageWrapper>
  );
}

export default Business;
