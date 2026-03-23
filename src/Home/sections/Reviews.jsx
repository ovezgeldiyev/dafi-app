import React from "react";
import Slider from "react-slick";
const reviewsList = [
  {
    id: "1",
    rate: 5,
    text: '"Incorporating DAFI into my study routine has been a real plus. I am more organized, more productive, and my notes are great. ',
    avatar: "./images/reviews/1.png",
    name: "Esther Howard",
    position: "Medical student MS3 ",
  },
  {
    id: "1",
    rate: 5,
    text: '"With all the jargon in medicine, DAFI is a lifesaver. It transcribes everything perfectly, which is super handy for my studies.😮‍💨! ',
    avatar: "./images/reviews/2.png",
    name: "Darlene Robertson",
    position: "PsyD candidate",
  },
  {
    id: "1",
    rate: 5,
    text: '"I love how DAFI highlights the important parts of my lectures. It really makes revising easier. ',
    avatar: "./images/reviews/3.png",
    name: "PhD student ",
    position: "LLB",
  },
  {
    id: "1",
    rate: 5,
    text: "Incorporating DAFI into my study routine has been a real plus. I am more organized, more productive, and my notes are great. ",
    avatar: "./images/reviews/1.png",
    name: "Esther Howard",
    position: "Freelance",
  },
];
const reviewsList2 = [
  {
    id: "1",
    rate: 5,
    text: '"I was skeptical at first, but DAFI’s ability to ignore background noise and focus on the main voice is incredible. The transcriptions are always clear. I highly recommend it! ',
    avatar: "./images/reviews/3.png",
    name: "Wade Warren",
    position: "Freelance",
  },
  {
    id: "2",
    rate: 5,
    text: "The ability of DAFI to ignore background noise and focus on the main voice is incredible. The transcriptions are always clear. ",
    avatar: "./images/reviews/4.png",
    name: "Annette Black",
    position: "LLB",
  },
  {
    id: "3",
    rate: 5,
    text: "Using DAFI in my meetings changes everything. Finding the key points in the blink of an eye saves me a lot of time. ",
    avatar: "./images/reviews/5.png",
    name: "Arlene McCoy",
    position: "PsyD candidate",
  },
  {
    id: "4",
    rate: 5,
    text: "I was skeptical at first, but DAFI’s ability to ignore background noise and focus on the main voice is incredible. The transcriptions are always clear. I highly recommend it! ",
    avatar: "./images/reviews/3.png",
    name: "Wade Warren",
    position: "Medical student MS3",
  },
];
export default function Reviews({ isActive }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "linear",
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "linear",
    autoplay: true,
    rtl: true,
    speed: 10000,
    autoplaySpeed: 0,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="reviews">
      {isActive ? (
        <div className="reviews__bg">
          <div className="reviews__shape">
            <img src="/images/dark/reviews/blur-1.png" alt="" />
            <img className="mob" src="/images/dark/reviews/blur-1-mob.png" alt="" />
          </div>
          <div className="reviews__shape right">
            <img className="mob" src="/images/dark/reviews/blur-2-mob.png" alt="" />
          </div>
        </div>
      ) : (
        <div className="reviews__bg">
          <div className="reviews__shape">
            <img src="/images/reviews/blur-1.svg" alt="" />
            <img className="mob" src="/images/reviews/blur-1-mob.svg" alt="" />
          </div>
          <div className="reviews__shape right">
            <img src="/images/reviews/blur-2.svg" alt="" />
            <img className="mob" src="/images/reviews/blur-2-mob.svg" alt="" />
          </div>
        </div>
      )}

      <div className="auto__container">
        <div className="reviews__inner">
          <div className="reviews__inner-title">
            <div>
              <h6>Testimonials</h6>
            </div>
            <div>
              <h2>What our user say</h2>
            </div>
            <div>
              <p>Loved by 50,000+ students</p>
            </div>
            {isActive ? (
              <div className="reviews__inner-logo">
                <img src="/images/dark/five_star.png" alt="" />
              </div>
            ) : (
              <div className="reviews__inner-logo">
                <img src="/images/five_star.png" alt="" />
              </div>
            )}
          </div>
          <div className="reviews__inner-content">
            <Slider {...settings} className="reviews__inner-slider">
              {reviewsList.map((item, index) => {
                return <ReviewsItem {...item} key={index} />;
              })}
            </Slider>
            <Slider {...settings2} className="reviews__inner-slider" dir="rtl">
              {reviewsList2.map((item, index) => {
                return <ReviewsItem {...item} key={index} />;
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
const ReviewsItem = (props) => {
  return (
    <div className="reviewsItem">
      <div className="reviewsItem__top">
        <div className="rate">
          <div className="rate__range">
            <img src="/images/icons/starsBg.png" alt="" />
            <div
              className="rate__range-progress"
              style={{ width: `${props.rate * 20}%` }}
            >
              <img src="/images/icons/stars.png" alt="" />
            </div>
          </div>
        </div>
        <div className="reviewsItem__text">
          <p className="ex">{props.text}</p>
        </div>
      </div>

      <div className="reviewsItem__profile">
        <div className="reviewsItem__avatar">
          <img src={props.avatar} alt="" />
        </div>
        <div className="reviewsItem__name">
          <h6 className="sm">{props.name}</h6>
          <p className="sm">{props.position}</p>
        </div>
      </div>
    </div>
  );
};
