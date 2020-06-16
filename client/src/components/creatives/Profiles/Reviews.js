import React, { useState, useRef, Fragment } from "react";
import { motion } from "framer-motion";
import useScreenEnter from "../../../hooks/useScreenEnter";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const Reviews = ({ reviews }) => {
  const [visible, setVisible] = useState(false);
  let result = reviews.map(a => a.stars);
  let average = result.reduce((a, b) => a + b) / result.length;
  average = Number(average.toFixed(1));

  const starFunction = (a, b) => {
    if (average < a) {
      return "far fa-star";
    } else if (average > a && average < b) {
      return "fas fa-star-half-alt";
    } else if (average > b) {
      return "fas fa-star";
    }
  };

  const ref = useRef();

  useScreenEnter(ref, () => {
    setVisible(true);
  });

  const evenNumbers = [0, 1, 2, 3, 4, 5];

  return (
    <div className="reviews">
      <span>
        {average}
        {evenNumbers.includes(average) && ".0"}
      </span>
      <div className="stars" ref={ref}>
        {visible && (
          <Fragment>
            <motion.i
              className={starFunction(0.25, 0.75)}
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2, duration: 1, type: "tween" }}
            ></motion.i>
            <motion.i
              className={starFunction(1.25, 1.75)}
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4, duration: 1, type: "tween" }}
            ></motion.i>
            <motion.i
              className={starFunction(2.25, 2.75)}
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6, duration: 1, type: "tween" }}
            ></motion.i>
            <motion.i
              className={starFunction(3.25, 3.75)}
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8, duration: 1, type: "tween" }}
            ></motion.i>
            <motion.i
              className={starFunction(4.25, 4.75)}
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1, duration: 1, type: "tween" }}
            ></motion.i>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Reviews;
