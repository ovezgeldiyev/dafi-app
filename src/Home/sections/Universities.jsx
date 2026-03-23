import React from "react";
import Slider from "react-slick";
const univerList = [
  {
    id: "1",
    image: "./images/universities/1.png",
  },
  {
    id: "2",
    image: "./images/universities/2.png",
  },
  {
    id: "3",
    image: "./images/universities/3.png",
  },
  {
    id: "4",
    image: "./images/universities/4.png",
  },
  {
    id: "5",
    image: "./images/universities/5.png",
  },
  {
    id: "6",
    image: "./images/universities/6.png",
  },
];
export default function Universities() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    cssEase: "linear",
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="univer">
      <div className="univer__bg">
        <div className="univer__shape">
          <img src="/images/universities/blur-1.svg" alt="" />
        </div>
        <div className="univer__shape right">
          <img src="/images/universities/blur-2.svg" alt="" />
        </div>
      </div>
      <div className="auto__container">
        <div className="univer__inner">
          <div className="univer__inner-title">
            <h4>Widely used in top universities</h4>
          </div>
          <div className="univer__inner-wrapper">
            <Slider {...settings} className="univer__inner-slider">
              {univerList.map((item, index) => {
                return <UniverItem {...item} key={index} />;
              })}
            </Slider>
            <div className="univer__inner-row">
              {univerList.map((item, index) => {
                return <UniverItem {...item} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const UniverItem = (props) => {
  return (
    <div className="univerItem">
      <div className="univerItem__inner">
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};
