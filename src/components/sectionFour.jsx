import React, { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useTransform,
  useAnimationControls,
} from "framer-motion";

import "./sectionFour.css";
import Poem from "/public/SangeetLunchPage/Poem--bg.png";

export default function SangeetLunch({ scrollYProgress }) {
  const poemOpacity = useTransform(scrollYProgress, [0.69, 0.72], [0, 1], {
    clamp: true,
  });

  const poenGoUp = useTransform(scrollYProgress, [0.68, 0.73], [-60, 0], {
    clamp: true,
  });

  const lantensY = useTransform(
    scrollYProgress,
    [0.745, 0.83],
    ["0%", "175%"],
    {
      clamp: true,
    }
  );

  const LeftDoorOpen = useTransform(
    scrollYProgress,
    [0.63, 0.69],
    ["0%", "-100%"],
    {
      clamp: true,
    }
  );

  const RightDoorOpen = useTransform(
    scrollYProgress,
    [0.63, 0.69],
    ["0%", "100%"],
    {
      clamp: true,
    }
  );

  return (
    <div className="sangeetLunch--wrap">
      <div className="sangeetLunch">
        <div className="sangeetLunch--bottom--deco--container">
          <motion.canvas
            className="sangeetLunch--upper--deco"
            style={{ y: lantensY }}
          ></motion.canvas>

          <motion.canvas className="sangeetLunch--bottom--deco"></motion.canvas>
        </div>

        <>
          <motion.div
            className="sangeetLunch--poem--container"
            style={{ opacity: poemOpacity, y: poenGoUp }}
          >
            <img src={Poem} className="sangeetLunch--poem" />
          </motion.div>

          <div className="sangeetLunch--doors--container">
            <motion.canvas
              className="sangeetLunch--doorL"
              style={{ x: LeftDoorOpen }}
            ></motion.canvas>

            <motion.canvas
              className="sangeetLunch--doorR"
              style={{ x: RightDoorOpen }}
            ></motion.canvas>
          </div>
        </>
      </div>
    </div>
  );
}
