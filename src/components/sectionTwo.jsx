import React, { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useTransform,
  useAnimationControls,
} from "framer-motion";

import "./sectionTwo.css";
import InnerBg from "/public/IntroPage/Intro--content--bg.png";
import Text01 from "/public/IntroPage/Text-1.png";
import Text02 from "/public/IntroPage/Text-2.png";
import BottomDesign from "/public/IntroPage/Bottom-design.png";
import Icon01 from "/public/IntroPage/Icon-1.png";
import Icon02 from "/public/IntroPage/Icon-2.png";
import leafR from "/public/IntroPage/goldenLeaf-Right.png";
import leafL from "/public/IntroPage/goldenLeaf-Left.png";

export default function Intro({ scrollYProgress }) {
  const IntroRef = useRef(null);
  const isIntroInView = useInView(IntroRef, { once: true, amount: 0.3 });

  const leafRightRoal = useTransform(scrollYProgress, [0.14, 0.23], [0, -90], {
    clamp: true,
  });
  const leafLeftRoal = useTransform(scrollYProgress, [0.14, 0.23], [0, 90], {
    clamp: true,
  });
  

  const introFlagControl = useAnimationControls();
  const introContentControl = useAnimationControls();

  useEffect(() => {
    if (isIntroInView) {
      introFlagControl.start({ opacity: 1, y: "0vh" });
      introContentControl.start({ opacity: 1, y: 0 });
    } else if (!isIntroInView) {
      introFlagControl.stop({ opacity: 1, y: "0vh" });
      introContentControl.stop({ opacity: 1, y: 0 });
    }
  }, [isIntroInView]);


  return (
    <div className="Intro--wrap">
      <div className="Intro" ref={IntroRef}>
        <motion.img 
        src={leafR} 
        className="Intro--leafDec--R" 
        style={{rotateZ:leafRightRoal}}
        />
        <motion.img 
        src={leafL} 
        className="Intro--leafDec--L" 
        style={{rotateZ:leafLeftRoal}}
        />

        <motion.img
          src={InnerBg}
          className="Inner--bg"
          initial={{ opacity: 0.5, y: "90vh" }}
          animate={introFlagControl}
          transition={{ duration: 0.9 }}
        />
        <motion.div
          className="Inner--text"
          initial={{ opacity: 0, y: 50 }}
          animate={introContentControl}
          transition={{ duration: 0.9, delay: 1.1 }}
        >
          <img src={Icon01} className="block1" />

          <div className="block2">
            <p>With the divine blessings of</p>
            <p>Dhan Dhan Sri Guru Granth Sahib Ji</p>
            <p>Sant Mahapursh Kile Wale Maharaji</p>
            <p>Sant Mahapursh Pipli Wale Maharaji</p>
          </div>

          <div className="block3">
            <p>We humbly request the honor of</p>
            <p>your presence to grace the wedding of </p>
          </div>

          <img src={Text01} className="block4" />

          <div className="block5">
            <p>Son of Mrs. & Mr. Daljitpal Singh Sachdev</p>
            <p>Grandson of Late Mrs. & Mr. Tarlok Singh Sachdev</p>
            <p>Grandson of Late Mrs. & Mr. Kuldeep Singh Narula</p>
          </div>

          <img src={Icon02} className="block6" />

          <img src={Text02} className="block7" />

          <div className="block8">
            <p>Daughter of Mrs. & Mr. Amandeep Singh Bajaj</p>
            <p>Granddaughter of Mrs. & Mr. Ameer Singh Bajaj</p>
            <p>Granddaughter of Mrs. & Mr. Balbir Singh Dang</p>
          </div>

          <img src={BottomDesign} className="block9" />
        </motion.div>
      </div>
    </div>
  );
}
