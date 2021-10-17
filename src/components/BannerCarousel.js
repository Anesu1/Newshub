import React from "react";
import Slider from "react-slick";
import styled from 'styled-components'

const CarouselDiv = styled.div`
position:relative;
  .text{
    position:absolute;
    width:max-content;
    top:40%;
    left:5%;
    color:#ffffff;
    @media(min-width:768px){
     width:100%;
     text-align:center;
   }
   @media(min-width:992px){
     top:55%;
   }
    h1{
      margin-bottom:10px;
      font-size:larger;
      line-height:25px;
      font-family:${props => props.theme.fam.bold};
      @media(min-width:768px){
     font-size:35px;
     line-height:40px;
   }
   @media(min-width:992px){
     font-size:30px;
   }
    }
    p{
      color: #fff;
      font-family:${props => props.theme.fam.regular};
      line-height:25px;
      @media(min-width:768px){
     font-size:20px;
   }
    }
  }

    img{
        width:150%;
    }
`;

const CarouselWrapper = styled.div`
    height:250px;
    overflow:hidden;
    position:relative;
   @media(min-width:768px){
     height:500px;
     text-align:center;
   }
   @media(min-width:992px){
     width:50%;
   }
`;

function BannerCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
      autoplaySpeed: 2000,
    slidesToScroll: 1,
  };


  return (
    <CarouselWrapper>
      <Slider {...settings}>
        <CarouselDiv >
          <img src="./Images/banner.jpg" alt="" />
          <div className="text">
            <h1>President E.D Mnangagwa <br /> signs new mining deal</h1>
            <p className="date">21 May 2021</p>
          </div>
        </CarouselDiv >
        <CarouselDiv >
          <img src="./Images/mn.jpg" alt="" />
          <div className="text">
            <h1>President E.D Mnangagwa <br /> signs new mining deal</h1>
            <p className="date">21 May 2021</p>
          </div>
        </CarouselDiv >
        <CarouselDiv >
          <img src="./Images/banner.jpg" alt="" />
          <div className="text">
            <h1>President E.D Mnangagwa <br /> signs new mining deal</h1>
            <p className="date">21 May 2021</p>
          </div>
        </CarouselDiv >
      </Slider>
    </CarouselWrapper>
  );
}

export default BannerCarousel;
