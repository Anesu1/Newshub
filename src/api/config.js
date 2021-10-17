
import queryString from 'query-string';
import {subDays} from 'date-fns';

const API_KEY = "89cb91d2244c458b90345910b0b6a745"

//business/entertainment/politics

export const url = `https://newsapi.org/v2/everything`;

// You want to dynamically build query params rather than hardcoding them.  There's a nice library for this

// https://www.npmjs.com/package/query-string

// To do date operations this is a good library
// https://date-fns.org/
// 

export const fetchNews = (category, sortBy='popularity') =>{ // this is a default parameter to functions
    const dateNow = new Date();
    return fetch(`${url}?${queryString.stringify({ // query string should end up like this ?q=${CATEGORY}&from=2021-10-13&to=2021-10-13&sortBy=popularity&apiKey=${API_KEY}
        apiKey: API_KEY,
        q: category,
        from: subDays(dateNow, 3), // 3 days before
        to: dateNow, // now
        sortBy,
    })}`)
    .then( (res) => {
        return res.json()
    })
    .catch ( (error) =>{
        return error;
    })
}


export const CATEGORY = {
    BUSINESS: 'business',
    ENTERTAINMENT: 'entertainment',
    GENDER_ADVOCACY:'gender-advocacy',
    HEALTHY:'healthy',
    HUMAN_INTEREST:'human-interest',
    POLITICS:'politics',
    SPORTS:'sports'
}