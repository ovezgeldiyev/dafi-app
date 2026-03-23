import React, { useState } from "react";
import { chevronBottom } from "../../Base/SVG";
export default function Community({ isActive }) {
  const [tab, setTab] = useState("1");
  const communityList = [
    {
      id: "1",
      active: true,
      title: "Chat with your group",
      text: "Boost your productivity and collaboration by annotating your notes, discussing directly within them, and creating collaborative documents.",
    },
    {
      id: "2",
      active: false,

      title: "Flash card",
      text: "Turn your notes into interactive flashcards with one click, or create your own flashcards from scratch. Review efficiently and memorize key concepts more easily.",
    },
    {
      id: "3",
      active: false,

      title: "Play the live Quiz",
      text: "Test your knowledge in real time with our interactive quizzes. Learn and instantly see your results.",
    },
  ];

  return (
    <section className="community">
      <div
        className="community__bg"
        style={{ display: isActive ? "block" : "none" }}
      >
        <div className="community__shape">
          <img src="/images/dark/community/blur-1.png" alt="" />
          <img
            className="mob"
            src="/images/dark/community/blur-1-mob.png"
            alt=""
          />
        </div>
        <div className="community__shape right">
          <img src="/images/dark/community/blur-2.png" alt="" />
          <img
            className="mob"
            src="/images/dark/community/blur-2-mob.png"
            alt=""
          />
        </div>
      </div>
      <div
        className="community__bg"
        style={{ display: isActive ? "block" : "none" }}
      >
        <div className="community__shape">
          <img src="/images/community/blur-1.png" alt="" />
          <img className="mob" src="/images/community/blur-1-mob.svg" alt="" />
        </div>
        <div className="community__shape right">
          <img src="/images/community/blur-2.png" alt="" />
          <img className="mob" src="/images/community/blur-2-mob.svg" alt="" />
        </div>
      </div>

      <div className="auto__container">
        <div className="community__inner">
          <div className="community__inner-title">
            <h3>DAFi Community</h3>
          </div>
          <div className="community__inner-row">
            <div className="community__inner-content">
              {communityList.map((item, index) => {
                return (
                  <CommunityItem
                    {...item}
                    key={index}
                    setTab={setTab}
                    tab={tab}
                  />
                );
              })}
              <div className="community__inner-bg">
                <img
                  style={{ display: isActive ? "none" : "block" }}
                  src="/images/community.png"
                  alt=""
                />
                <img
                  style={{ display: isActive ? "block" : "none" }}
                  src="/images/dark/community.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const CommunityItem = (props) => {
  return (
    <div className="communityItem">
      <div
        className={
          "communityItem__head " + (props.tab === props.id ? "active" : "")
        }
        onClick={() => {
          if (props.tab !== props.id) {
            props.setTab(props.id);
          } else {
            props.setTab(null);
          }
        }}
      >
        <h4 className="sm">{props.title}</h4>
        {chevronBottom}
      </div>
      <div
        className={
          "communityItem__body " + (props.tab === props.id ? "active" : "")
        }
      >
        <p>{props.text}</p>
      </div>
    </div>
  );
};
