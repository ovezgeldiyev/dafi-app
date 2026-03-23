import React from "react";
import { mailIcon, phoneIcon } from "./SVG";

export default function Footer({ isActive }) {
  return (
    <footer className="footer">
      {isActive ? (
        <div className="footer__bg">
          <div className="footer__shape">
            <img src="/images/dark/footer/blur-1.png" alt="" />
            <img
              className="mob"
              src="/images/dark/footer/blur-1-mob.png"
              alt=""
            />
          </div>
          <div className="footer__shape right">
            <img src="/images/dark/footer/blur-2.png" alt="" />
            <img
              className="mob"
              src="/images/dark/footer/blur-2-mob.png"
              alt=""
            />
          </div>
        </div>
      ) : (
        <div className="footer__bg">
          <div className="footer__shape">
            <img src="/images/footer/blur-1.png" alt="" />
            <img className="mob" src="/images/footer/blur-1-mob.svg" alt="" />
          </div>
          <div className="footer__shape right">
            <img src="/images/footer/blur-2.png" alt="" />
            <img className="mob" src="/images/footer/blur-2-mob.svg" alt="" />
          </div>
          <div className="footer__shape left">
            <img className="mob" src="/images/footer/blur-3-mob.svg" alt="" />
          </div>
        </div>
      )}
      <div className="auto__container">
        <div className="footer__inner">
          <div className="footer__inner-row">
            <div className="footer__inner-main">
              <div className="footer__inner-logo">
                {isActive ? (
                  <img src="/images/dark/footer-logo.svg" alt="" />
                ) : (
                  <img src="/images/footer-logo.svg" alt="" />
                )}
              </div>
              <p className="sm">
                There are many variations of passages of Lorem the Ipsum
                available it majority.
              </p>
              <div className="footer__inner-form">
                <input type="email" placeholder="Enter your email" />
                <button className="button dark" type="submit">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="footer__inner-links">
              <div className="footer__inner-col">
                <h5>Side menu</h5>
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">About Us</a>
                <a href="#">Contact</a>
              </div>
              <div className="footer__inner-col">
                <h5>Social</h5>
                <a href="#">Facebook</a>
                <a href="#">Youtube</a>
                <a href="#">LinkedIn</a>
                <a href="#">Instagram</a>
              </div>
              <div className="footer__inner-col">
                <h5>Contact Info</h5>
                <p className="sm">
                  455 West Orchard Street Kings Mountain, NC 280867
                </p>
                <a href="tel:+088 (246) 642-27-10">
                  <span>{phoneIcon}</span>
                  +088 (246) 642-27-10
                </a>
                <a href="mailto:example@mail.com">
                  <span className="big">{mailIcon}</span>
                  example@mail.com
                </a>
              </div>
            </div>
          </div>
          <div className="footer__inner-copy">
            <p>© 2024 Dafi All Rights Reserved</p>
            <div className="footer__inner-terms">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Condition</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
