import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useAnimationControls,
  useTransform,
} from "framer-motion";
import "./sectionThree.css";
import bgImg from "/public/GalaPage/sangeet--bg-min.jpg";
import decoR from "/public/GalaPage/decoRight.png";
import decoL from "/public/GalaPage/decoLeft.png";
import deco from "/public/GalaPage/Layer 5.png";
import fairyLights from "/public/GalaPage/fairylights.png";
import couple from "/public/Summary/Gala-icon.png";

export default function Sangeet({ scrollYProgress }) {
  const GalaRef = useRef(null);
  const isGalaInView = useInView(GalaRef, { amount: 0.3 });
  const controls = useAnimationControls();
  const stageScaleUp = useTransform(scrollYProgress, [0.31, 0.46], [1, 10], {
    clamp: true,
  });
  const stageOpacity = useTransform(scrollYProgress, [0.34, 0.46], [1, 0], {
    clamp: true,
  });
  const stageBgOpacity = useTransform(scrollYProgress, [0.34, 0.46], [1, 0], {
    clamp: true,
  });
  const coupleScale = useTransform(scrollYProgress, [0.31, 0.43], [0.7, 2.5], {
    clamp: true,
  });
  const couplePaddingTop = useTransform(
    scrollYProgress,
    [0.31, 0.34],
    ["80%", "0%"],
    {
      clamp: true,
    }
  );

  useEffect(() => {
    scrollYProgress.onChange((latestY) => {
      if (isGalaInView && latestY > 0.46 && latestY < 0.5) {
        controls.start({ scale: 2.1 });
      } else if (!isGalaInView) {
        controls.stop({ scale: 2.15 });
      }
    });
  }, [isGalaInView]);

  return (
    <div className="sangeet--wrap">
      <div className="sangeet" ref={GalaRef}>
        <motion.div
          className="sangeet--outer--container"
          style={{ opacity: stageBgOpacity }}
        >
          <img src={fairyLights} className="gala--faiyLights" />

          <div className="gala--stage--container">
            <motion.canvas
              className="gala--stage"
              style={{ scale: stageScaleUp, opacity: stageOpacity }}
            ></motion.canvas>

            <motion.img
              src={couple}
              className="gala--couple"
              style={{
                scale: coupleScale,
                y: couplePaddingTop,
              }}
            />
          </div>
        </motion.div>

        <div className="sangeet--inner--container">
          <>
            <motion.img
              src={bgImg}
              className="bg-img"
              initialWidth={{ scale: 1 }}
              animate={controls}
              transition={{ duration: 40, type: "tween" }}
            />

            <div className="decoration--bg">
              <div className="decoration--container">
                <img src={decoR} className="decoration--bg--right" />
                <img src={decoL} className="decoration--bg--left" />
              </div>
            </div>

            <div className="text--container">
              <div className="text--container--uperText">
                <h6>Together the Sachdev and Bajaj families</h6>
                <h6>welcome you to a glamorous </h6>
              </div>
              <div className="text--container--topic">
                <h1>Gala</h1>

                <h1>Night</h1>
              </div>

              <div className="text--container--date">
                <h5>27 | 01 | 23</h5>
              </div>
              <div className="text--container--events bottomSpace">
                <h5>Kirtan: 7 PM - 8 PM</h5>
                <h5>Sagan: 8 PM - 8.30 PM</h5>
                <h6>
                  Venue: Maharaja Garden City{" "}
                  {window.innerWidth < 400 && <br />} Kirtan Hall{" "}
                </h6>
              </div>

              <div className="text--container--events">
                <h5>Ring Ceremony: 8.30 PM</h5>
                <h5>Sangeet : 9 PM Onwards</h5>
                <h6>Venue: Maharaja Garden City Function Hall, Level 2 </h6>
              </div>

              <div className="text--container--attire">
                <h5>Attire: Glamorous Indian/Black Tie Optional</h5>
              </div>
              <img src={deco} className="text--container--deco" />
            </div>
          </>
        </div>
      </div>
    </div>
  );
}
