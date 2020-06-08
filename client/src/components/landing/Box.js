import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Box = ({ item }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <Link
      to="/creatives"
      className="box"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="overlay"
        animate={{ opacity: isHovered ? 0.75 : 0.9 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <h3>{item.name}</h3>
      <motion.img
        src={item.img}
        alt={item.name}
        animate={{ scale: isHovered ? 1.1 : 1.01 }}
        transition={{ duration: 0.5 }}
      />
    </Link>
  );
};

export default Box;
