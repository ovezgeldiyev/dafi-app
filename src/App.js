import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Base/Header";
import Home from "./Home/Home";
import Footer from "./Base/Footer";
import Lenis from "lenis";

export default function App() {
  const [isActive, setIsActive] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  useEffect(() => {
    if (isActive) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [isActive]);
  return (
    <>
      <Header isActive={isActive} setIsActive={setIsActive} />
      <main className="main">
        <Routes>
          <Route path="" element={<Home isActive={isActive} />} />
        </Routes>
        <Footer isActive={isActive} />
      </main>
    </>
  );
}
