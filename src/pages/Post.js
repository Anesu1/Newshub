import React from "react";
import styled from "styled-components";
import FollowUs from "../components/FollowUs";
import NewsCard from "../components/NewsCard";
import Reply from "../components/Reply";
import Subscribe from "../components/Subscribe";
import Text from "../components/Text";
import Heading from "../styled/Heading";

const PostWrapper = styled.section`
  img{
    width:100%;
  }
  @media(min-width:768px){
      display:flex;
      justify-content:space-between;
      flex-wrap:wrap;
    }
  .post-inner{
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

function Post() {
  return (
    <PostWrapper>
      <div className="post-inner">
          <Text />
          <Reply />
      </div>
      <div className="news-right">
        <div className="top">
          <Heading>Related News</Heading>
          <a href="#">View All</a>
        </div>
        <NewsCard
          img="./Images/mn.jpg"
          headingText="Lift Ban by Elections - Youth Demands"
        />
        <NewsCard
          img="./Images/reuters.jpg"
          headingText="Lift Ban by Elections - Youth Demands"
        />

        <Subscribe />
        <FollowUs />
      </div>
    </PostWrapper>
  );
}

export default Post;
