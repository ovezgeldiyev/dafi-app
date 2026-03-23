import React from "react";
import Hero from "./sections/Hero";
import Universities from "./sections/Universities";
import Info from "./sections/Info";
import Organize from "./sections/Organize";
import Benefits from "./sections/Benefits";
import Community from "./sections/Community";
import About from "./sections/About";
import Reviews from "./sections/Reviews";
import Pricing from "./sections/Pricing";
import Faq from "./sections/Faq";
import Join from "./sections/Join";

export default function Home({ isActive }) {
  return (
    <>
      <Hero isActive={isActive} />
      <Universities />
      <div className="anchor" id="feature"></div>
      <Info isActive={isActive} />
      <Organize isActive={isActive} />
      <Benefits isActive={isActive} />
      <Community isActive={isActive} />
      <div className="anchor" id="about"></div>
      <About />
      <Reviews isActive={isActive} />
      <div className="anchor" id="pricing"></div>
      <Pricing isActive={isActive} />
      <Faq isActive={isActive} />
      <div className="anchor" id="contact"></div>

      <Join />
    </>
  );
}
