import React from "react";
export default function Benefits({ isActive }) {
  return (
    <section className="benefits">
      <div className="auto__container">
        <div className="benefits__inner">
          <div className="benefits__inner-chat">
            <div className="benefits__inner-title">
              <h3>Chat GPT 4-o</h3>
              <span>
                <img
                  style={{ display: isActive ? "none" : "block" }}
                  src="/images/benefits/gpt.svg"
                  alt=""
                />
                <img
                  style={{ display: isActive ? "block" : "none" }}
                  src="/images/dark/benefits/gpt.svg"
                  alt=""
                />
              </span>
            </div>
            <div className="benefits__inner-text">
              <p className="ex">
                All students should have access to the best technologies to
                succeed. That's why we offer <span>Chat GPT Premium</span>, one
                of the most powerful AI tools in the world.
              </p>
              <p className="ex">
                With DAFi, you can access these features for four times less
                than the standard price.
              </p>
            </div>
            <div className="benefits__inner-image">
              <img src="/images/benefits/1.png" alt="" />
            </div>
          </div>
          <div className="benefits__inner-record">
            <h4 className="big">
              Live Record = studie notes
              <span>
                <img src="/images/benefits/microphone.svg" alt="" />
              </span>
            </h4>
            <p className="ex">
              DAFi analyzes your course audio to create structured notes. Every
              word is taken into account. The AI highlights key points
              emphasized by the professor. It ignores background noise and{" "}
              <br />{" "}
              <span>
                provides notes that are more precise and relevant than a human
                could.
              </span>
            </p>
            <div className="benefits__inner-image big">
              <img src="/images/benefits/2.png" alt="" />
              <div className="benefits__inner-sphere">
                <img src="/images/benefits/sphere.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
