import React from "react";
import FadeUp from "../../Base/FadeUp";

export default function Info({ isActive }) {
  return (
    <section className="info">
      <div
        className="info__bg"
        style={{ display: isActive ? "block" : "none" }}
      >
        <div className="info__shape">
          <img src="/images/dark/info/blur-1.png" alt="" />
          <img className="mob" src="/images/dark/info/blur-1-mob.svg" alt="" />
        </div>
        <div className="info__shape right">
          <img src="/images/dark/info/blur-2.png" alt="" />
          <img className="mob" src="/images/dark/info/blur-2-mob.svg" alt="" />
        </div>
      </div>
      <div
        className="info__bg"
        style={{ display: isActive ? "none" : "block" }}
      >
        <div className="info__shape">
          <img src="/images/info/blur-1.png" alt="" />
          <img className="mob" src="/images/info/blur-1-mob.svg" alt="" />
        </div>
        <div className="info__shape right">
          <img src="/images/info/blur-2.png" alt="" />
          <img className="mob" src="/images/info/blur-2-mob.svg" alt="" />
        </div>
      </div>
      <div className="auto__container">
        <div className="info__inner">
          <div className="info__inner-title">
            <div>
              <h2>
                Leverage AI to enhance your <br /> learning with Automatic{" "}
                <br />
                <span>Notes Taking & Revision</span>
              </h2>
            </div>
          </div>
          <div className="info__inner-row">
            <div className="info__inner-content">
              <div className="info__inner-text">
                <h3>
                  Experience <span>insant</span> <br /> study <span>notes</span>
                </h3>
                <p>
                  Get better course notes than if you took them yourself. Each
                  course is thoroughly analyzed to produce perfectly structured
                  notes. We handle lecture audio, YouTube videos, PDFs, your own
                  notes, and much more.
                </p>
              </div>
              <div className="info__inner-features">
                <FadeUp delay={0.2} className="infoItem">
                  <img
                    style={{ display: isActive ? "block" : "none" }}
                    src="/images/dark/info-features/1.svg"
                    alt=""
                  />
                  <img
                    style={{ display: isActive ? "none" : "block" }}
                    src="/images/info-features/1.svg"
                    alt=""
                  />
                </FadeUp>
                <FadeUp delay={0.3} className="infoItem">
                  <img
                    style={{ display: isActive ? "block" : "none" }}
                    src="/images/dark/info-features/2.svg"
                    alt=""
                  />
                  <img
                    style={{ display: isActive ? "none" : "block" }}
                    src="/images/info-features/2.svg"
                    alt=""
                  />
                </FadeUp>
                <FadeUp delay={0.4} className="infoItem">
                  <img
                    style={{ display: isActive ? "block" : "none" }}
                    src="/images/dark/info-features/3.svg"
                    alt=""
                  />
                  <img
                    style={{ display: isActive ? "none" : "block" }}
                    src="/images/info-features/3.svg"
                    alt=""
                  />
                </FadeUp>
                <FadeUp delay={0.5} className="infoItem">
                  <img
                    style={{ display: isActive ? "block" : "none" }}
                    src="/images/dark/info-features/4.svg"
                    alt=""
                  />
                  <img
                    style={{ display: isActive ? "none" : "block" }}
                    src="/images/info-features/4.svg"
                    alt=""
                  />
                </FadeUp>
                <FadeUp delay={0.6} className="infoItem">
                  <img
                    style={{ display: isActive ? "block" : "none" }}
                    src="/images/dark/info-features/5.svg"
                    alt=""
                  />
                  <img
                    style={{ display: isActive ? "none" : "block" }}
                    src="/images/info-features/5.svg"
                    alt=""
                  />
                </FadeUp>
              </div>
            </div>
            <div className="info__inner-image">
              <img src="/images/info.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
