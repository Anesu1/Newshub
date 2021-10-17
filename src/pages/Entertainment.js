import React,{useState, useEffect} from 'react';
import Subscribe from '../components/Subscribe';
import FollowUs from '../components/FollowUs';
import PageBanner from '../components/PageBanner';
import Heading from '../styled/Heading';
import PageCard from '../components/PageCard';
import {PageWrapper} from './Politics';
import * as api from '../api/config';
import {CATEGORY} from '../api/config';




function Entertainment() {

    const category = CATEGORY = 'entertainment'
    const [newsList, setEventList] = useState([]);
    const [error, setError] = useState();
    useEffect(()=>{
        api.fetchNews().then(response=>setEventList(response?.articles)).catch(error=>setError(error))
    },[])
    return (
        <PageWrapper>
             <PageBanner text="Entertainment"
            img1="./Images/en.jpg"
            title1="18 Companies to close over tax
            audit "
            img2="./Images/Stunner.jpg"
            title2="18 Companies to close over tax
            audit "
            img3="./Images/cat1.jpg"
            title3="18 Companies to close over tax
            audit "
            />
            <hr />
             <div className="page-last">
                <Heading>
                    Entertainment
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

export default Entertainment
