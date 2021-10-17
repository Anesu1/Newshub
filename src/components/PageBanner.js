/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const PageBannerWrapper = styled.section`
  margin: 5%;

  img {
    width: 100%;
  }
  h2 {
    margin: 30px 0;
  }
  .top {
    @media (min-width: 768px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .top-inner {
      margin-bottom: 40px;

      @media (min-width: 768px) {
        .img {
          height: 250px;
          overflow: hidden;
          img {
            width: unset;
            height: 100%;
          }
        }
      }

      @media (min-width: 768px) {
        width: 30%;
      }
      h3 {
        font-family: ${(props) => props.theme.fam.semibold};
        margin-top: 20px;
        line-height: 1.3;
      }
    }
  }
`;

// eslint-disable-next-line react/prop-types
function PageBanner({ articles }) {
  return (
    <PageBannerWrapper>
      {/* now you can map as many articles as get passed */}
      {articles.map((article, i) => (
        <div className="top-inner" key={i}>
          <div className="img">
            <img src={article.urlToImage} alt="" />
          </div>

          <h3>{article.title}</h3>
        </div>
      ))}
    </PageBannerWrapper>
  );
}

export default PageBanner;
