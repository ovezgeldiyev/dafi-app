import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
export default function Faq({ isActive }) {
  const [faq, setFaq] = useState(null);
  const faqList = [
    {
      id: "1",
      question: "What is DAFi?",
      answer:
        "DAFi is an AI-powered platform that transforms your courses, videos, and documents into perfectly structured notes. It also provides revision tools like flashcards, quizzes, and audiobooks.",
    },
    {
      id: "2",
      question: "What types of revision can I do with DAFi?",
      answer:
        "With DAFi, you can turn your notes into flashcards, create personalized quizzes, or even listen to your notes as audiobooks for interactive and efficient revision.",
    },
    {
      id: "3",
      question: "How does DAFi protect the privacy of my notes and data?",
      answer:
        "Your notes and data are secured with advanced encryption protocols. DAFi ensures that all your information remains private and protected.",
    },
  ];
  const faqList2 = [
    {
      id: "4",
      question: "How does automatic note-taking work with DAFi?",
      answer: (
        <>
          Our AI analyzes the entire audio of your courses, isolates the
          professor's voice while ignoring background noise, and focuses on the
          course topic to avoid distractions from irrelevant information. <br />
          It then creates clear and complete notes, highlighting key points
          emphasized by the professor.
        </>
      ),
    },
    {
      id: "5",
      question: "Is DAFi accessible for students with specific needs?",
      answer:
        "Yes, DAFi is designed to be inclusive. It supports subtitles, audiobooks, and compatibility with screen readers, making learning accessible to everyone.",
    },
    {
      id: "6",
      question: "How much does Chat GPT Premium cost with DAFi?",
      answer:
        "Through DAFi, you get access to Chat GPT Premium at four times less than the standard price, offering you advanced technology at an affordable rate to maximize your success.",
    },
  ];
  return (
    <section className="faq">
      {isActive ? (
        <div className="faq__bg">
          <div className="faq__shape">
            <img src="/images/dark/faq/blur-1.png" alt="" />
            <img className="mob" src="/images/dark/faq/blur-1-mob.png" alt="" />
          </div>
          <div className="faq__shape right">
            <img src="/images/dark/faq/blur-2.png" alt="" />
            <img className="mob" src="/images/dark/faq/blur-2-mob.png" alt="" />
          </div>
          <div className="faq__shape center">
            <img src="/images/dark/faq/blur-3.png" alt="" />
          </div>
        </div>
      ) : (
        <div className="faq__bg">
          <div className="faq__shape">
            <img src="/images/faq/blur-1.png" alt="" />
            <img className="mob" src="/images/faq/blur-1-mob.svg" alt="" />
          </div>
          <div className="faq__shape right">
            <img src="/images/faq/blur-2.png" alt="" />
            <img className="mob" src="/images/faq/blur-2-mob.svg" alt="" />
          </div>
          <div className="faq__shape center">
            <img src="/images/faq/blur-3.png" alt="" />
          </div>
        </div>
      )}
      <div className="auto__container">
        <div className="faq__inner">
          <div className="faq__inner-title">
            <h2>Frequently asked questions</h2>
          </div>
          <div className="faq__inner-row">
            <div className="faq__inner-col">
              {faqList.map((item, index) => {
                return (
                  <FaqItem {...item} key={index} setFaq={setFaq} faq={faq} />
                );
              })}
            </div>
            <div className="faq__inner-col">
              {faqList2.map((item, index) => {
                return (
                  <FaqItem {...item} key={index} setFaq={setFaq} faq={faq} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const FaqItem = (props) => {
  return (
    <div className="faqItem">
      <div
        className={"faqItem__head " + (props.faq === props.id ? "active" : "")}
        onClick={() => {
          if (props.faq !== props.id) {
            props.setFaq(props.id);
          } else {
            props.setFaq(null);
          }
        }}
      >
        <h5>{props.question}</h5>
        <span></span>
      </div>
      <AnimatePresence>
        {props.faq === props.id && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
            className="faqItem__body"
          >
            <p>{props.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
