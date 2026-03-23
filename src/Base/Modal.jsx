import React from "react";
import ReactDom from "react-dom";
import { motion } from "framer-motion";
import { closeIcon } from "./SVG";

export default function Modal({ setModal, data, setData }) {
  const closeFunc = (e) => {
    if (e.currentTarget === e.target) {
      setModal(null);
      setData(null);
    }
  };
  return ReactDom.createPortal(
    <motion.div
      className="about__modals "
      onClick={closeFunc}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        exit={{ opacity: 0, y: 20 }}
        className="aboutModal active"
      >
        <div className="aboutModal__head">
          <div className="aboutModal__icon">
            {data.icons.map((item, index) => {
              return <img key={index} src={item.icon} alt="" />;
            })}
          </div>
          <h4>{data.title}</h4>
        </div>

        <p>{data.modalText}</p>
        <div className="aboutModal__close" onClick={closeFunc}>
          {closeIcon}
        </div>
      </motion.div>
    </motion.div>,
    document.getElementById("popups")
  );
}
