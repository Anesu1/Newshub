import React,{useState, useEffect} from 'react';
import Subscribe from '../components/Subscribe';
import FollowUs from '../components/FollowUs';
import PageBanner from '../components/PageBanner';
import Heading from '../styled/Heading';
import PageCard from '../components/PageCard';
import {PageWrapper} from './Politics';
import * as api from '../api/config';
import {CATEGORY} from '../api/config';




function Sport() {
    const category = CATEGORY = 'sports'
    const [newsList, setEventList] = useState([]);
    const [error, setError] = useState();
    useEffect(()=>{
        api.fetchNews().then(response=>setEventList(response?.articles)).catch(error=>setError(error))
    },[])
    return (
        <PageWrapper>
             <PageBanner text="Sport"
            img1="./Images/cat4.jpg"
            title1="18 Companies to close over tax
            audit "
            img2="./Images/sp1.jpg"
            title2="18 Companies to close over tax
            audit "
            img3="./Images/sp2.jpeg"
            title3="18 Companies to close over tax
            audit "
            />
             <div className="page-last">
                <Heading>
                    Sports
                </Heading>
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
    )
}

export default Sport
