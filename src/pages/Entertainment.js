import React,{useState, useEffect} from 'react';
import Subscribe from '../components/Subscribe';
import FollowUs from '../components/FollowUs';
import PageBanner from '../components/PageBanner';
import Heading from '../styled/Heading';
import PageCard from '../components/PageCard';
import {PageWrapper} from './Politics';
import * as api from '../api/config';
import {shuffle} from 'lodash';
import {CATEGORY} from '../api/config';



function Entertainment() {

    const [newsList, setEventList] = useState([]);
    const [error, setError] = useState();
    useEffect(()=>{
        api.fetchNews(CATEGORY.ENTERTAINMENT).then(response=>setEventList(shuffle(response?.articles))).catch(error=>setError(error))
    },[])
    return (
        <PageWrapper>
            <PageBanner
        
        
        articles={newsList.slice(0,3)}
      />
     
            <hr />
             <div className="page-last">
                <Heading>
                    Entertainment
                </Heading>
                {error ? "Error getting data":null}
            {newsList.slice(3,8).map((e, i)=>{
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

export default Entertainment
