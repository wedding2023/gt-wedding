import React, { useRef } from "react";
import { animate, motion, useInView } from "framer-motion";

import "./sectionFive.css";
import upperTextBg from "/public/AnandPage/upper-Text-Bg.png";
import upperText from "/public/AnandPage/upper-Text-Text.png";
import anandImage from "/public/AnandPage/anand-image.png";

function FlowerPetals() {
  let petals = [];

  for (let i = 0; i < 80; i++) {
    petals.push(
      <motion.img
        key={i}
        src="https://image.ibb.co/kyUHab/rose.png"
        className="flowerPetals"
        animate={{
          y: ["-2vh", "100vh"],
          x: ["10vw", "-10vw", "1vw", "-9vw"],
          rotateX: ["300deg", "-30deg", "40deg", "-20deg"],
          rotateY: "60deg",
        }}
        transition={{
          duration: R(15, 25),
          delay: R(0, 15),
          repeat: Infinity,
          staggerChildren: 0.5,
          type: "tween",
        }}
      />
    );
  }

  function R(min, max) {
    return min + Math.random() * (max - min);
  }

  return <div className="flowerPetal--container">{petals}</div>;
}

export default function AnandKaraj({ scrollYProgress }) {
  const AnanKarajRef = useRef(null);
  const isAnandKarajInVeiw = useInView(AnanKarajRef, { once: 1 });

  return (
    <div className="anand--wrap">
      <div className="anand" ref={AnanKarajRef}>
        <div className="anand--outer--container">
          {isAnandKarajInVeiw && <FlowerPetals />}
        </div>
        <div className="anand--inner--Container">
          <div className="anand--upperText">
            <img src={upperTextBg} className="anand--upperText--bg" />
            <img src={upperText} className="anand--upperText--text" />
          </div>

          <h3 className="anand--inner--Container--text--one">
            WE REQUEST THE HONOR OF YOUR PRESENCE AT THE
          </h3>
          <h1 className="anand--inner--Container--text--two">Anand Karaj</h1>
          <h3 className="anand--inner--Container--text--three">OF</h3>
          <h1 className="anand--inner--Container--text--four">
            Gurtejpal & Tamanna
          </h1>

          <img src={anandImage} className="anand--image" />

          <h1 className="anand--inner--Container--text--date">29 | 01 | 23</h1>

          <div className="anand--inner--Container--text--time">
            <div className="anand--inner--Container--text--time--row--one--cl1">
              <p>
                <span className="italicFont">Breakfast</span>
                <br />
                <span className="anandTimeFont">8 AM</span>
              </p>{" "}
            </div>
            <div className="anand--inner--Container--text--time--row--one--cl2">
              <p>
                <span className="italicFont">Sehra Bandi</span>
                <br />
                <span className="anandTimeFont">9 AM</span>
              </p>
            </div>
            <div className="anand--inner--Container--text--time--row--one--cl3">
              <p>
                <span className="italicFont">Baraat</span>
                <br />
                <span className="anandTimeFont">10 AM</span>
              </p>
            </div>
            <div className="anand--inner--Container--text--time--row--one--cl4">
              <p>
                <span className="italicFont">Milni</span>
                <br />
                <span className="anandTimeFont">10.30 AM</span>
              </p>{" "}
            </div>

            <div className="anand--inner--Container--text--time--row--two--cl1">
              <p>
                <span className="italicFont">Jai Mala</span>
                <br />
                <span className="anandTimeFont">11 AM</span>
              </p>
            </div>
            <div className="anand--inner--Container--text--time--row--two--cl2">
              <p>
                <span className="italicFont">Anand Karaj</span>
                <br />
                <span className="anandTimeFont">11.30 AM</span>
              </p>
            </div>
            <div className="anand--inner--Container--text--time--row--two--cl3">
              <p>
                <span className="italicFont">Lunch</span>
                <br />
                <span className="anandTimeFont">12.30 PM</span>
              </p>
            </div>
            <div className="anand--inner--Container--text--time--row--two--cl4">
              {" "}
              <p>
                <span className="italicFont">Doli</span>
                <br />
                <span className="anandTimeFont">4 PM</span>
              </p>
            </div>
          </div>

          <h1 className="anand--inner--Container--text--venue">
            Venue: Maharaja Garden City <br /> Soi 33 Rama 2 Road <br />Bangkok, Thailand
          </h1>
          <br />
          <h1 className="anand--inner--Container--text--attire">
            Attire: Traditional Indian
          </h1>
        </div>
      </div>
    </div>
  );
}
