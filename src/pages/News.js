import React from "react";
import styled from "styled-components";
import FollowUs from "../components/FollowUs";
import NewsCard from "../components/NewsCard";
import NewsInner from "../components/NewsInner";
import NewsTrending from "../components/NewsTrending";
import Subscribe from "../components/Subscribe";
import Heading from "../styled/Heading";

const NewsWrapper = styled.section`
  img{
    width:100%;
  }
  @media(min-width:768px){
      display:flex;
      justify-content:space-between;
      flex-wrap:wrap;
    }
  .news-left{
    margin:5%;
    @media(min-width:768px){
      width:42%;
      margin:3%;
    }
    @media(min-width:992px){
      width:55%;
    }
  }
  .links{
    width:max-content;
    a{
      margin-right:10px;
    }
  }
  .news-right{
    margin:5%;
    @media(min-width:768px){
      width:42%;
      margin:3%;
    }
    @media(min-width:992px){
      width:30%;
    }
    .top{
      display:flex;
      margin:40px 0 30px;
      justify-content:space-between;
      align-items:flex-end;
      h2{
        font-family:${props => props.theme.fam.bold};
      }
      a{
        font-family:${props => props.theme.fam.medium};
        text-decoration:none;
        color:#000;
      }
    }
  }
  .trending-news{
    margin:3%;
    padding:2%;
    border:1px solid #707070;
    @media(min-width:768px){
      display:flex;
      justify-content:space-between;
      flex-wrap:wrap;
    }
    h2{
      width:100%;
      position:relative;
      margin-bottom:30px;
      &:after{
        background:#000;
      }
    }
  }
`;

function News() {
  return (
    <NewsWrapper>
      <div className="news-left">
        <NewsInner
          header="World News"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero"
          headingText="Zim expects another Lockdown ahead   of the 3rd wave. "
          img="./Images/feat2.jpg"
        />
        <NewsInner
          header="Popular News"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero"
          headingText="Zim expects another Lockdown ahead   of the 3rd wave. "
          img="./Images/news.jpg"
        />
      </div>
      <div className="news-right">
        <div className="top">
          <Heading>Related News</Heading>
          <a href="#">View All</a>
        </div>
        <NewsCard img="./Images/mn.jpg" headingText="Lift Ban by Elections - Youth Demands" />
        <NewsCard img="./Images/reuters.jpg" headingText="Lift Ban by Elections - Youth Demands" />

        <Subscribe />
        <FollowUs />
      </div>
      <div className="trending-news">
          <Heading>Trending News</Heading>
          <NewsTrending title="Politics"/>
          <NewsTrending title="Gender & Advocacy" />
          <NewsTrending title="Healthy" />
          <NewsTrending title="Entertainment" />
      </div>
    </NewsWrapper>
  );
}

export default News;
