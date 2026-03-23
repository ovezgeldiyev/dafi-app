import React from "react";

export default function Hero({ isActive }) {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img
          style={{ display: isActive ? "none" : "block" }}
          src="/images/hero-bg.png"
          alt=""
        />
        <img
          style={{ display: isActive ? "block" : "none" }}
          src="/images/dark/hero-bg.png"
          alt=""
        />
        <div
          className="hero__shape"
          style={{ display: isActive ? "none" : "block" }}
        >
          <img src="/images/hero/blur-1.svg" alt="" />
        </div>
        <div
          className="hero__shape right"
          style={{ display: isActive ? "none" : "block" }}
        >
          <img src="/images/hero/blur-2.svg" alt="" />
        </div>
      </div>
      <div className="auto__container">
        <div className="hero__inner">
          <div className="hero__inner-title">
            <div>
              <h1>
                Revolutionize your study <br /> methods <br className="mob" />{" "}
                with {""}
                <span>
                  <video
                    src="/images/ai.mp4"
                    playsInline
                    autoPlay
                    muted
                    loop
                  ></video>
                </span>{" "}
                DAFi.
              </h1>
              <p className="big">
                automatique notes taking, flashcards, and more.
              </p>
            </div>
            <div>
              <a href="#" className="button uniq">
                <span>Start Your Free Trial</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__devices">
        <div className="heroItem mob">
          <img
            style={{ display: isActive ? "block" : "none" }}
            src="/images/dark/hero/phone.png"
            alt=""
          />
          <img
            style={{ display: isActive ? "none" : "block" }}
            src="/images/hero/phone.png"
            alt=""
          />
        </div>
        <div className="heroItem tab">
          <img
            style={{ display: isActive ? "block" : "none" }}
            src="/images/dark/hero/tablet.png"
            alt=""
          />
          <img
            style={{ display: isActive ? "none" : "block" }}
            src="/images/hero/tablet.png"
            alt=""
          />
        </div>
        <div className="heroItem">
          <img
            style={{ display: isActive ? "block" : "none" }}
            src="/images/dark/hero/laptop.png"
            alt=""
          />
          <img
            style={{ display: isActive ? "none" : "block" }}
            src="/images/hero/laptop.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
