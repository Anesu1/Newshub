import React, { useState, useEffect } from "react";
import * as api from "../api/config";
import PageBanner from "../components/PageBanner";
import Subscribe from "../components/Subscribe";
import FollowUs from "../components/FollowUs";
import Heading from "../styled/Heading";
import PageCard from "../components/PageCard";
import { PageWrapper } from "./Politics";
import { shuffle } from "lodash";
import { CATEGORY } from "../api/config";

function Business() {
  // newsList is the full article list
  const [newsList, setEventList] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    api
      .fetchNews(CATEGORY.BUSINESS)
      .then((response) => setEventList(shuffle(response?.articles)))
      .catch((error) => setError(error));
  }, []);

  return (
    <PageWrapper>
      <Heading>Business</Heading>

      <PageBanner articles={newsList.slice(0, 3)} />

      <hr />
      <div className="page-last">
        <Heading>Business</Heading>
        {error ? "Error getting data" : null}
        {newsList.slice(2, 7).map((e, i) => {
          return (
            <PageCard
              img={e.urlToImage}
              key={i}
              cardBody={e.content}
              cardTitle={e.title}
            />
          );
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
