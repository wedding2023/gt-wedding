import React, { useEffect, useState, useRef } from "react";
import { useScroll, useInView } from "framer-motion";

import CoverPage from "./components/sectionOne";
import Intro from "./components/sectionTwo";
import Gala from "./components/sectionThree";
import SangeetLunch from "./components/sectionFour";
import AnandKaraj from "./components/sectionFive";
import SummaryPage from "./components/sectionSix";
import Music from "./components/Music";
import Strip from "./components/strip";

import "./App.css";

export default function App() {
  const { scrollYProgress } = useScroll();

  const [isInSectionOne, setIsInSectionOne] = useState(true);
  const [isMusicInSectionOne, setIsMusicInSectionOne] = useState(true);

  const sectionOneRef = useRef(null);

  const isCoverInView = useInView(sectionOneRef, { once: true, amount: 0.3 });

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      console.log(latest);
      if (latest > 0.17 && latest < 0.18) {
        setIsInSectionOne(false);
      }
      if (latest > 0.12) {
        setIsMusicInSectionOne(false);
      }
    });
  }, []);






  return (
    <div className="main--wrap">
      <Music musicButtonOpacity={isMusicInSectionOne} isCoverInView={isCoverInView} />

      <CoverPage
        scrollYProgress={scrollYProgress}
        scrollDownDisplay={isInSectionOne}
        sectionOneRef={sectionOneRef}
        isCoverInView={isCoverInView}
      />

      <Intro scrollYProgress={scrollYProgress} />

      <div className="strip-Intro-Gala"></div>
      <Strip scrollYProgress={scrollYProgress} />
      <Gala scrollYProgress={scrollYProgress} />

      <div className="strip-sangeet-gala"></div>

      <SangeetLunch scrollYProgress={scrollYProgress} />

      <div className="strip-anand-sangeet"></div>

      <AnandKaraj scrollYProgress={scrollYProgress} />

      <div className="strip-anand-summary"></div>

      <SummaryPage scrollYProgress={scrollYProgress} />
    </div>
  );
}
