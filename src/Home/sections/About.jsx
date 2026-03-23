import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { closeIcon, plusIcon } from "../../Base/SVG";
import { AnimatePresence } from "framer-motion";
import Modal from "../../Base/Modal";
const aboutList = [
  {
    id: "1",
    icons: [
      {
        icon: "./images/about/1.svg",
      },
      {
        icon: "./images/about/2.svg",
      },
      {
        icon: "./images/about/3.svg",
      },
    ],
    title: "Disabilities/ Inclusivity",
    modalText: (
      <>
        At DAFi, we believe in a world where education is accessible to
        everyone. Our mission is to provide inclusive solutions for students who
        are deaf, have physical disabilities, or face invisible challenges like
        attention deficit disorders. DAFi is more than just a technology; it's a
        promise of equality, ensuring that everyone, regardless of their
        difficulties, has the same opportunities to learn and succeed. We are
        building a more equitable and educated future for all. DAFi provides
        real solutions: automatic transcriptions for the deaf, audiobook
        generation, and customizable study tools for students with physical or
        cognitive challenges.
      </>
    ),
    text: (
      <>
        We believe in inclusion to make education accessible to everyone,
        regardless of the challenges they face. press the <span>+</span> to
        learn more.
      </>
    ),
  },
  {
    id: "2",
    icons: [
      {
        icon: "./images/about/4.svg",
      },
    ],
    title: "Environment",
    modalText: (
      <>
        At DAFi, our commitment to sustainability is at the core of our vision
        for a more durable future. We explore the use of emerging technologies,
        such as quantum computing and sparse neural networks, to significantly
        reduce the energy consumption of our servers and AI processes.
        <br /> <br />
        By adopting these innovations, DAFi aims to optimize its performance
        while actively contributing to the fight against climate change. Aware
        of the environmental impact of digital waste, we have implemented clear
        guidelines for its reduction, including the secure deletion of obsolete
        notes. DAFi is more than just a technological solution, it is a
        commitment to a more sustainable world, ensuring that every user
        contributes to a future that respects the environment.
      </>
    ),
    text: (
      <>
        We place sustainability at the heart of our approach. Want to learn how
        we actively contribute to protecting the environment while
        revolutionizing education? Click the <span>+</span> to learn more{" "}
      </>
    ),
  },
  {
    id: "3",
    icons: [
      {
        icon: "./images/about/5.svg",
      },
    ],
    modalText: (
      <>
        With DAFi, your learning reaches a new level. Our AI automatically
        transforms your courses, videos, and documents into clear and structured
        notes, ready for revision. Create flashcards, personalized exams, and
        listen to your notes as audiobooks. DAFi provides you with the necessary
        tools to review efficiently and succeed, all while saving you valuable
        time.
      </>
    ),
    title: "Maximize your learning with DAFi",
    text: (
      <>
        DAFi revolutionizes your learning by automatically creating your
        revision materials, such as flashcards and quizzes. <span>+</span> to
        learn more{" "}
      </>
    ),
  },
  {
    id: "4",
    icons: [
      {
        icon: "./images/about/6.svg",
      },
    ],
    modalText: (
      <>
        Our artificial intelligence is designed to deeply analyze the entirety
        of your courses. It starts by isolating the professor's voice while
        ignoring background noise and distractions. Every word and sentence is
        processed to understand the overall context of the course, allowing our
        AI to capture important information. It then automatically structures
        this information into clear and organized notes. If the professor
        emphasizes key concepts, DAFi highlights them so you can easily find
        them. Additionally, our AI is able to identify relevant sections for
        revision and transform your notes into flashcards, quizzes, or
        audiobooks for optimal review.
      </>
    ),
    title: "How our AI works",
    text: (
      <>
        Discover how our AI deeply analyzes your courses to create perfect
        notes. Press <span>+</span> to learn more.
      </>
    ),
  },
  {
    id: "5",
    icons: [
      {
        icon: "./images/about/7.svg",
      },
      {
        icon: "./images/about/8.svg",
      },
    ],
    modalText: (
      <>
        At DAFi, data security is a top priority, especially for educational
        institutions. All your notes are protected by advanced encryption
        protocols, ensuring that your information remains confidential and
        accessible only to you. We do not store audio recordings of lectures;
        they are instantly converted into text and securely stored in our
        system. <br />
        Your notes are automatically saved in the cloud, providing full
        accessibility on any device while ensuring maximum protection against
        data loss or cybersecurity threats. With DAFi, you have peace of mind,
        knowing that your educational content is protected by the highest
        standards of digital security.
      </>
    ),
    title: "Your notes stored in the cloud",
    text: (
      <>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document{" "}
        <span>+</span> to learn more{" "}
      </>
    ),
  },
];
export default function About() {
  const [modal, setModal] = useState(null);
  const [data, setData] = useState(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 4.3,
    slidesToScroll: 1,
    arrows: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1640,
        settings: {
          slidesToShow: 3.6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2.6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    if (modal) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [modal]);
  return (
    <>
      <section className="about">
        <div className="auto__container">
          <div className="about__inner">
            <div className="about__inner-title">
              <h3>About us</h3>
            </div>
            <div className="about__inner-wrapper">
              <Slider {...settings} className="about__inner-slider">
                {aboutList.map((item, index) => {
                  return (
                    <AboutItem
                      setModal={setModal}
                      itemData={item}
                      key={index}
                      setData={setData}
                    />
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <AnimatePresence>
        {modal && <Modal setData={setData} setModal={setModal} data={data} />}
      </AnimatePresence>
    </>
  );
}
const AboutItem = ({ itemData, setModal, setData }) => {
  return (
    <div className="aboutItem">
      <div className="aboutItem__icon">
        {itemData.icons.map((item, index) => {
          return <img key={index} src={item.icon} alt="" />;
        })}
      </div>
      <h4>{itemData.title}</h4>
      <p>{itemData.text}</p>
      <div
        className="aboutItem__plus"
        onClick={() => {
          setData(itemData);
          setModal(itemData.id);
        }}
      >
        {plusIcon}
      </div>
    </div>
  );
};
