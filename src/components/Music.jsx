import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import { motion, useAnimationControls } from "framer-motion";

import Sound from "/public/Song/Song.mp3";
import "./Music.css";
import Musicplay from "/public/app/MusicPlay.png";
import Musicpause from "/public/app/MusicPause.png";

export default function Music({ musicButtonOpacity, isCoverInView }) {
  const [play, { pause }] = useSound(Sound, {
    onend: () => {
      setIsSoundplaying(false);
    },
    onplay: () => {
      setIsSoundplaying(true);
    },
    onload: () => {
      setIsSoundLoaded(true);
    },

    volume: 0.7,
  });

  const musicButtonAnimationControl = useAnimationControls();

  const [isSoundLoaded, setIsSoundLoaded] = useState(false);
  const [isSoundPlaying, setIsSoundplaying] = useState(false);

  useEffect(() => {
    if (isSoundLoaded && isCoverInView) {
      musicButtonAnimationControl.start({ y: ["0%", "-30%", "0%"] });
    } else if (!isSoundLoaded && !isCoverInView) {
      musicButtonAnimationControl.stop({ y: ["0%", "-30%", "0%"] });
    }
  }, [isSoundLoaded, isCoverInView]);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 80,
  };

  const yoyo = {
    duration: 0.5,
    ease: "easeInOut",
    repeat: 4,
    repeatType: "loop"
  };

  function haddleMusic(playMusic) {
    isSoundPlaying ? pause() : play(); //This does not change without a render so uses the previous value of the isPlaying
    setIsSoundplaying(!isSoundPlaying);
  }

  return (
    <motion.button
      className="MusicButton"
      onClick={haddleMusic}
      data-issoundplaying={isSoundPlaying}
      // initial={{ y: 0 }}
      animate={musicButtonAnimationControl}
      transition={yoyo}
      style={{
        visibility: isSoundLoaded ? "visible" : "hidden",
        scale: musicButtonOpacity ? 1 : 0.7,
        opacity: musicButtonOpacity ? 1 : 0.3,
      }}
    >
      <motion.img
        src={isSoundPlaying ? Musicpause : Musicplay}
        className="musicbuttonImg"
        layout
        transition={spring}
      />
    </motion.button>
  );
}
