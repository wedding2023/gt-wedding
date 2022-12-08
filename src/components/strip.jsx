import React, {useEffect, useCallback, useState } from "react";
import { motion, useTransform } from "framer-motion";

import "./strip.css";





export default function Strips({ scrollYProgress }) {

  
  const one = useTransform(
    scrollYProgress, 
    [0, 0.29], 
    [0, 150], 
    {clamp: true}
    );

  const two = useTransform(
      scrollYProgress, 
      [0.19, 0.36], 
      [0, -170], 
      {clamp: true}
    );

  const [strip, setStrip] = useState(two);



  const reff = useCallback(() => scrollYProgress.onChange((latest) => {
    // console.log(latest)
        
        if (latest < 0.19) {
          setStrip(one);
        } else {
          setStrip(two);
        }

    }),[]);

  //   useEffect(()=> scrollYProgress.onChange((latest) => {
        
  //     if (latest < 0.11) {
  //       setStrip(one);
  //     } else {
  //       setStrip(two);
  //     }

  // }),[])

  return (
    <div className="strip--wrap">

      <motion.div
        ref={reff}
        className="strip-one"
        // style={{ translateX: strip }}
      >
      </motion.div>
      
    </div>
  );
}
