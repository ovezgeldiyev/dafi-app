import React, { useEffect, useState } from "react";
import { chevronBottom } from "./SVG";

export default function Header({ setIsActive, isActive }) {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    let header = document.getElementById("header");
    if (menu) {
      document.body.classList.add("active");
      header.classList.add("active");
    } else {
      document.body.classList.remove("active");
      header.classList.remove("active");
    }
  }, [menu]);
  function scrollFunc() {
    let header = document.getElementById("header");
    if (window.scrollY >= 60) {
      header.classList.add("sticky");
    } else header.classList.remove("sticky");
  }
  const close = (e) => {
    if (e.target === e.currentTarget) setMenu(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollFunc);
  }, []);

  return (
    <header className="header" id="header">
      <div className="auto__container">
        <div className="header__inner">
          <div className="header__inner-side">
            <div className="header__inner-logo">
              <img
                style={{ display: isActive ? "none" : "block" }}
                src="/images/logo.svg"
                alt=""
              />
              <img
                style={{ display: isActive ? "block" : "none" }}
                src="/images/dark/logo.svg"
                alt=""
              />
            </div>
            <nav className={"nav " + (menu ? "active" : "")} onClick={close}>
              <div className="nav__inner">
                <ul className="nav__inner-links">
                  <li>
                    <a onClick={() => setMenu(false)} href="#feature">
                      Features
                    </a>
                  </li>{" "}
                  <li>
                    <a onClick={() => setMenu(false)} href="#about">
                      {" "}
                      About Us
                    </a>
                  </li>
                  <li>
                    <a onClick={() => setMenu(false)} href="#pricing">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a onClick={() => setMenu(false)} href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
                <a href="#" className="button dark">
                  Login
                </a>
              </div>
            </nav>
          </div>
          <div className="header__inner-buttons">
            <div className="check">
              <input
                type="checkbox"
                checked={isActive}
                onChange={(e) => {
                  setIsActive(e.target.checked);
                }}
              />
              <span>
                <img src="/images/icons/moon.svg" alt="" />
              </span>
            </div>
            <div className="lang">
              <div className="lang__btn">EN {chevronBottom}</div>
              <div className="lang__menu">
                <a href="#">Fr</a>
                <a href="#">De</a>
              </div>
            </div>
            <a href="#" className="button dark">
              Login
            </a>
            <div
              className={"burger " + (menu ? "active" : "")}
              onClick={() => {
                setMenu(!menu);
              }}
            >
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
