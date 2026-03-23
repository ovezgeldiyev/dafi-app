import React from "react";

export default function Organize({ isActive }) {
  return (
    <section className="organize">
      {isActive ? (
        <div className="organize__bg">
          <div className="organize__shape">
            <img src="/images/dark/organize/blur-1.png" alt="" />
            <img
              className="mob"
              src="/images/dark/organize/blur-1-mob.svg"
              alt=""
            />
          </div>
          <div className="organize__shape right">
            <img src="/images/dark/organize/blur-2.png" alt="" />
            <img
              className="mob"
              src="/images/dark/organize/blur-2-mob.svg"
              alt=""
            />
          </div>
        </div>
      ) : (
        <div className="organize__bg">
          <div className="organize__shape">
            <img src="/images/organize/blur-1.png" alt="" />
            <img className="mob" src="/images/organize/blur-1-mob.svg" alt="" />
          </div>
          <div className="organize__shape right">
            <img src="/images/organize/blur-2.png" alt="" />
            <img className="mob" src="/images/organize/blur-2-mob.svg" alt="" />
          </div>
        </div>
      )}
      <div className="auto__container">
        <div className="organize__inner">
          {isActive ? (
            <div className="organize__inner-screen">
              <img src="/images/dark/organize/screen.png" alt="" />
              <div className="organize__inner-video">
                <video
                  src="/images/dark/screen.mp4"
                  playsInline
                  autoPlay
                  muted
                  loop
                ></video>
              </div>
            </div>
          ) : (
            <div className="organize__inner-screen">
              <img src="/images/organize/screen.png" alt="" />
              <div className="organize__inner-video">
                <video
                  src="/images/screen.mp4"
                  playsInline
                  autoPlay
                  muted
                  loop
                ></video>
              </div>
            </div>
          )}

          <div className="organize__inner-content">
            <div className="organize__inner-text">
              <div>
                <h3>
                  Your <span>Notes Organize </span>
                </h3>
              </div>
              <div>
                <p>
                  With DAFi, your notes are no longer just a jumble of
                  information. They are automatically organized for you. You can
                  also convert them into effective revision tools such as
                  flashcards and other interactive materials to maximize your
                  learning.
                </p>
              </div>
            </div>
            <div className="organize__inner-image">
              <img src="/images/organize/1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
