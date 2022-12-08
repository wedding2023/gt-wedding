import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import "./sectionSix.css";
import logo from "/public/Summary/logo.png";
import Jan27 from "/public/Summary/27JAN.png";
import Jan29 from "/public/Summary/29JAN.png";
import galaIcon from "/public/Summary/Gala-icon.png";
import AnandIcon from "/public/Summary/Anand-icon.png";
import arrow from "/public/Summary/arrows.png";
import Frame from "/public/Summary/frameDown.webp";

export default function SummaryPage({ scrollYProgress }) {
  const cardAnimations = {
    init: { backgroundColor: "rgba(0,0,0,0)" },
    anim: {
      backgroundColor: [
        "rgba(238,204,236,0)",
        "rgba(238,204,236,1)",
        "rgba(238,204,236,1)",
        "rgba(238,204,236,0)",
      ],
    },
  };

  const summaryRef = useRef(null);
  const isSummayPageInVeiw = useInView(summaryRef, {
    once: false,
    amount: 0.6,
  });

  return (
    <div className="summaryPage--wrap">
      <div className="summaryPage" ref={summaryRef}>
        <div className="summary--outerContainer">
          <img src={Frame} className="summary--frameUp" />
          <img src={Frame} className="summary--frameDown" />
        </div>

        <div className="summary--innerContainer">
          <img src={logo} className="summary--logo" />

          <motion.div
            className="summary--block01"
            variants={cardAnimations}
            transition={{ duration: 3, times: [0, 0.2, 0.8, 1], delay: 1 }}
            initial="init"
            animate={isSummayPageInVeiw && "anim"}
          >
            <img src={galaIcon} className="summary--block01--icon" />

            <img src={Jan27} className="summary--block01--date" />

            <div className="summary--block01--text">
              <p>Kirtan: 7 PM-8 PM</p>
              <p>Sagan: 8 PM-8.30 PM</p>
              <p>Ring Ceremony: 8.30 PM</p>
              <p>Gala Night: 9 PM Onwards</p>
              <br />
              <p className="perpul">Venue: Maharaja Garden City</p>
            </div>
          </motion.div>

          <img src={arrow} className="summary--arrow" />

          <motion.div
            className="summary--block03"
            variants={cardAnimations}
            transition={{ duration: 3, delay: 4.5, times: [0, 0.2, 0.8, 1] }}
            initial="init"
            animate={isSummayPageInVeiw && "anim"}
          >
            <img src={AnandIcon} className="summary--block03--icon" />

            <img src={Jan29} className="summary--block03--date" />

            <div className="summary--block03--text">
              <p>Breakfast: 8 AM</p>
              <p>Sehra Bandi: 9 AM</p>
              <p>Baraat: 10 AM</p>
              <p>Milni: 10.30 AM</p>
              <p>Jai Mala: 11 AM</p>
              <p>Anand Karaj: 11.30 AM</p>
              <p>Lunch: 12.30 PM</p>
              <p>Doli: 4 PM</p>
              <br />
              <p className="perpul">Venue: Maharaja Garden City</p>
            </div>
          </motion.div>

          <div className="summary--bottom--text">
            <h3 className="perpul">LOOKING FORWARD TO CELEBRATING WITH YOU!</h3>
            <h4 className="perpul">#G'sCupOfT</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
