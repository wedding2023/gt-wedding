import React, { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useTransform,
  useAnimationControls,
} from "framer-motion";

import "./sectionOne.css";
import Flag from "/public/Coverpage/flag.png";
import logo from "/public/Coverpage/logo.png";
import Dye from "/public/Coverpage/29.png";
import Yr from "/public/Coverpage/23.png";
import Mth from "/public/Coverpage/01.png";
import Line from "/public/Coverpage/line-1.png";
import Dys from "/public/Coverpage/27.png";
import Text from "/public/Coverpage/text.png";
import Dash from "/public/Coverpage/and.png";

export default function CoverPage({
  scrollYProgress,
  scrollDownDisplay,
  sectionOneRef,
  isCoverInView,
}) {
  const logoScale = useTransform(scrollYProgress, [0, 0.11], [1, 4], {
    clamp: true,
  });

  const flagControl = useAnimationControls();
  const logoAndDateAndDashControl = useAnimationControls();
  const linesAndTextControl = useAnimationControls();
  const scrollDownTextControl = useAnimationControls();

  useEffect(() => {
    if (isCoverInView) {
      flagControl.start({ y: 0, opacity: 1 });
      logoAndDateAndDashControl.start({ opacity: 1, scale: 1 });
      linesAndTextControl.start({ opacity: 1, y: 0 });
      scrollDownTextControl.start({opacity:1});
    } else if (!isCoverInView) {
      flagControl.stop({ y: 0, opacity: 1 });
      logoAndDateAndDashControl.stop({ opacity: 1, scale: 1 });
      linesAndTextControl.stop({ opacity: 1, y: 0 });
      scrollDownTextControl.stop({opacity:1});
    }
  }, [isCoverInView]);

  return (
    <div className="Coverpage--wrap">
      <div className="Coverpage" ref={sectionOneRef}>
        <motion.div
          className="Coverpage--flag--container"
          // style={{ y: cloudY }}
        >
          <motion.img
            src={Flag}
            className="Coverpage--flag"
            initial={{ y: "-50vh", opacity: 0.5 }}
            animate={flagControl}
            transition={{ duration: 1 }}
          />
          <div className="inside--flag">
            <div className="logo">
              <motion.img
                src={logo}
                className="logo--cloud"
                initial={{ opacity: 0, scale: 0 }}
                animate={logoAndDateAndDashControl}
                transition={{ duration: 0.4, delay: 0.7 }}
                style={{ scale: logoScale }}
              />
            </div>
            <div className="Coverpage--bottom">
              <div className="Coverpage--date">
                <div className="Coverpage--date--start">
                  <motion.img
                    src={Dys}
                    className="day"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={logoAndDateAndDashControl}
                    transition={{ duration: 0.4, delay: 2 }}
                  />

                  <motion.img
                    src={Line}
                    className="line-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={linesAndTextControl}
                    transition={{ duration: 0.4, delay: 2 }}
                  />
                  <motion.img
                    src={Mth}
                    className="month"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={logoAndDateAndDashControl}
                    transition={{ duration: 0.4, delay: 2 }}
                  />

                  <motion.img
                    src={Line}
                    className="line-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={linesAndTextControl}
                    transition={{ duration: 0.4, delay: 2 }}
                  />
                  <motion.img
                    src={Yr}
                    className="year"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={logoAndDateAndDashControl}
                    transition={{ duration: 0.4, delay: 2 }}
                  />
                </div>

                <motion.img
                  src={Dash}
                  className="dash"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={logoAndDateAndDashControl}
                  transition={{ duration: 0.4, delay: 2 }}
                />

                <div className="Coverpage--date--end">
                  <motion.img
                    src={Dye}
                    className="daye"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={logoAndDateAndDashControl}
                    transition={{ duration: 0.4, delay: 2 }}
                  />

                  <motion.img
                    src={Line}
                    className="line-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={linesAndTextControl}
                    transition={{ duration: 0.4, delay: 2 }}
                  />
                  <motion.img
                    src={Mth}
                    className="monthe"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={logoAndDateAndDashControl}
                    transition={{ duration: 0.4, delay: 2 }}
                  />

                  <motion.img
                    src={Line}
                    className="line-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={linesAndTextControl}
                    transition={{ duration: 0.4, delay: 2 }}
                  />
                  <motion.img
                    src={Yr}
                    className="yeare"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={logoAndDateAndDashControl}
                    transition={{ duration: 0.4, delay: 2 }}
                  />
                </div>
              </div>

              <motion.img
                src={Text}
                className="Coverpage--text"
                initial={{ opacity: 0, y: 20 }}
                animate={linesAndTextControl}
                transition={{ duration: 0.4, delay: 2 }}
              />

              {scrollDownDisplay && (
                <motion.div
                  className="scrollDown--container"
                  initial={{ opacity: 0 }}
                  animate={scrollDownTextControl}
                  transition={{ duration: 0.4, delay: 2.3 }}
                >
                  <motion.p
                    className="scroll--down"
                    animate={{ y: [-10, 0] }}
                    transition={{
                      duration: 0.6,
                      yoyo: Infinity,
                    }}
                  >
                    Scroll down
                  </motion.p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
