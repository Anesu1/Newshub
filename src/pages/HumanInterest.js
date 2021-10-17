import React,{useState, useEffect} from 'react';
import Subscribe from '../components/Subscribe';
import FollowUs from '../components/FollowUs';
import PageBanner from '../components/PageBanner';
import Heading from '../styled/Heading';
import PageCard from '../components/PageCard';
import {PageWrapper} from './Politics';
import * as api from '../api/config';
import {CATEGORY} from '../api/config';




function HumanInterest() {

    const category = CATEGORY = 'human-interest'

    const [newsList, setEventList] = useState([]);
    const [error, setError] = useState();
    useEffect(()=>{
        api.fetchNews().then(response=>setEventList(response?.articles)).catch(error=>setError(error))
    },[])
    return (
        <PageWrapper>
             <PageBanner text="Human Interest"
            img1="./Images/hi.jpg"
            title1="18 Companies to close over tax
            audit "
            img2="./Images/hi1.jpg"
            title2="18 Companies to close over tax
            audit "
            img3="./Images/1583968961933.jpg"
            title3="18 Companies to close over tax
            audit "
            />
             <div className="page-last">
                <Heading>
                    Human Interests
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

export default HumanInterest
