import React, { useState } from "react";
import FadeIn from "../../Base/FadeIn";
import { checkIcon } from "../../Base/SVG";
const monthlyList = [
  {
    id: "1",
    title: "Essential",
    price: "2",
    period: "monthly",
    sale: "60% $5",
    list: [
      {
        text: (
          <>
            Live Lecture note-taking <b>3h</b>/month
          </>
        ),
      },
      {
        text: <>Instant note taking</>,
      },
      {
        text: <>Cloud storage for your texts</>,
      },
      {
        text: <>Flash card, quizz, exams</>,
      },
      {
        text: <>Community</>,
      },
      {
        text: (
          <>
            <b>~100 000</b> mots/mois
          </>
        ),
      },
    ],
    oldPrice: "20",
    extra: "$5",
  },
  {
    id: "2",
    title: "Avance",
    price: "8",
    period: "monthly",
    sale: "60% $5",
    popular: true,
    list: [
      {
        text: (
          <>
            Live Lecture note-taking <b>24h</b>/month
          </>
        ),
      },
      {
        text: <>Instant note taking</>,
      },
      {
        text: <>Cloud storage for your texts</>,
      },
      {
        text: <>Flash card, quizz, exams</>,
      },
      {
        text: <>Community</>,
      },
      {
        text: (
          <>
            <b>~300 000</b> mots/mois
          </>
        ),
      },
    ],
    oldPrice: "20",
    extra: "$5",
  },
  {
    id: "3",
    title: "Elite",
    price: "12",
    period: "monthly",
    sale: "60% $5",
    list: [
      {
        text: (
          <>
            Live Lecture note-taking <b>60h</b>/month
          </>
        ),
      },
      {
        text: <>Instant note taking</>,
      },
      {
        text: <>Cloud storage for your texts</>,
      },
      {
        text: <>Flash card, quizz, exams</>,
      },
      {
        text: <>Community</>,
      },
      {
        text: (
          <>
            <b>~300 000</b> mots/mois
          </>
        ),
      },
    ],
    oldPrice: "20",
    extra: "$5",
  },
];
const annualList = [
  {
    id: "1",
    title: "Essential",
    price: "20",
    period: "annual",
    sale: "60% $5",
    list: [
      {
        text: (
          <>
            Live Lecture note-taking <b>3h</b>/month
          </>
        ),
      },
      {
        text: <>Instant note taking</>,
      },
      {
        text: <>Cloud storage for your texts</>,
      },
      {
        text: <>Flash card, quizz, exams</>,
      },
      {
        text: <>Community</>,
      },
      {
        text: (
          <>
            <b>~100 000</b> mots/mois
          </>
        ),
      },
    ],
    oldPrice: "20",
    extra: "$5",
  },
  {
    id: "2",
    title: "Avance",
    price: "50",
    period: "annual",
    sale: "60% $5",
    popular: true,
    list: [
      {
        text: (
          <>
            Live Lecture note-taking <b>24h</b>/month
          </>
        ),
      },
      {
        text: <>Instant note taking</>,
      },
      {
        text: <>Cloud storage for your texts</>,
      },
      {
        text: <>Flash card, quizz, exams</>,
      },
      {
        text: <>Community</>,
      },
      {
        text: (
          <>
            <b>~300 000</b> mots/mois
          </>
        ),
      },
    ],
    oldPrice: "20",
    extra: "$5",
  },
  {
    id: "3",
    title: "Elite",
    price: "100",
    period: "annual",
    sale: "60% $5",
    list: [
      {
        text: (
          <>
            Live Lecture note-taking <b>60h</b>/month
          </>
        ),
      },
      {
        text: <>Instant note taking</>,
      },
      {
        text: <>Cloud storage for your texts</>,
      },
      {
        text: <>Flash card, quizz, exams</>,
      },
      {
        text: <>Community</>,
      },
      {
        text: (
          <>
            <b>~300 000</b> mots/mois
          </>
        ),
      },
    ],
    oldPrice: "20",
    extra: "$5",
  },
];
export default function Pricing({ isActive }) {
  const [type, setType] = useState("month");

  return (
    <section className="pricing">
      {isActive ? (
        <div className="pricing__bg">
          <div className="pricing__shape">
            <img src="/images/dark/pricing/blur-1.png" alt="" />
            <img className="mob" src="/images/dark/pricing/blur-1-mob.png" alt="" />
          </div>
          <div className="pricing__shape right">
            <img src="/images/dark/pricing/blur-2.png" alt="" />
            <img className="mob" src="/images/dark/pricing/blur-2-mob.png" alt="" />
          </div>
          <div className="pricing__shape center">
            <img src="/images/dark/pricing/blur-3.png" alt="" />
            <img className="mob" src="/images/dark/pricing/blur-3-mob.png" alt="" />
          </div>
        </div>
      ) : (
        <div className="pricing__bg">
          <div className="pricing__shape">
            <img src="/images/pricing/blur-1.png" alt="" />
            <img className="mob" src="/images/pricing/blur-1-mob.svg" alt="" />
          </div>
          <div className="pricing__shape right">
            <img src="/images/pricing/blur-2.png" alt="" />
            <img className="mob" src="/images/pricing/blur-2-mob.svg" alt="" />
          </div>
          <div className="pricing__shape center">
            <img src="/images/pricing/blur-3.png" alt="" />
          </div>
        </div>
      )}

      <div className="auto__container">
        <div className="pricing__inner">
          <div className="pricing__inner-title">
            <div>
              <h6>Pricing</h6>
            </div>
            <div>
              <h2>Make the wise decision for your Need</h2>
            </div>
          </div>
          <div className="pricing__inner-tabs">
            <button
              type="button"
              className={type === "month" ? "active" : ""}
              onClick={() => setType("month")}
            >
              Monthly
            </button>
            <button
              type="button"
              className={type === "year" ? "active" : ""}
              onClick={() => setType("year")}
            >
              Yearly
            </button>
          </div>
          {type === "month" && (
            <>
              <FadeIn className="pricing__inner-row">
                {monthlyList.map((item, index) => {
                  return <PriceItem itemData={item} key={index} />;
                })}
              </FadeIn>
            </>
          )}
          {type === "year" && (
            <>
              <FadeIn className="pricing__inner-row">
                {annualList.map((item, index) => {
                  return <PriceItem itemData={item} key={index} />;
                })}
              </FadeIn>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
const PriceItem = ({ itemData }) => {
  const [isCheckes, setIsCheckes] = useState(false);
  return (
    <div className="pricingItem">
      <div className="pricingItem__title">
        {itemData.popular ? (
          <div className="pricingItem__tag">{itemData.title}</div>
        ) : (
          <h5>{itemData.title}</h5>
        )}
        <div className="pricingItem__price">
          ${itemData.price}
          {itemData.period === "monthly" && <span>/month</span>}
          {itemData.period === "annual" && <span>/annual</span>}
        </div>
        <p>Economise {itemData.sale}</p>
      </div>
      <h5>What’s included:</h5>
      <ul>
        {itemData.list.map((item, index) => {
          return (
            <li key={index}>
              <span>
                <img src="/images/icons/check.svg" alt="" />
              </span>
              <p>{item.text}</p>
            </li>
          );
        })}
      </ul>
      <div className="pricingCheck">
        <div
          className={"pricingCheck__box " + (isCheckes ? "active" : "")}
          onClick={() => setIsCheckes(!isCheckes)}
        >
          <span></span>
          {checkIcon}
        </div>
        <p>
          Chat GPT4-o <del>${itemData.oldPrice}</del>
          {itemData.extra && <span>Extra {itemData.extra}</span>}
        </p>
      </div>
      <a
        href="#"
        className={"button " + (itemData.popular ? "primary" : "dark")}
      >
        Get Started
      </a>
    </div>
  );
};
