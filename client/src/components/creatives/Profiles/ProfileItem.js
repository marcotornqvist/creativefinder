import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CreativeContext from "../../../context/creative/creativeContext";
import Reviews from "./Reviews";

const ProfileItem = ({ item, layout }) => {
  const creativeContext = useContext(CreativeContext);
  const { setModal } = creativeContext;
  const [isHovered, setHovered] = useState(false);
  const { userID, name, subcategories, reviews, profileImg } = item;

  return (
    <div className="profile-item">
      {layout && (
        <div
          className="image-container"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setModal(item)}
        >
          <motion.div
            className="overlay"
            initial={false}
            animate={{ opacity: isHovered ? 0.5 : 0 }}
            transition={{ duration: 0.3, type: "tween" }}
          ></motion.div>
          <motion.h3
            initial={false}
            animate={{
              scale: isHovered ? 1 : 0.9,
              opacity: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.3, type: "tween" }}
          >
            Preview Profile
          </motion.h3>
          <img src={profileImg} alt="profile" />
        </div>
      )}
      <div className="card">
        <div className="name">
          <Link to={`profile/${userID}`}>
            <h3>{name}</h3>
          </Link>
          <span className="subcategories">{subcategories}</span>
        </div>
        <hr />
        <div className="row">
          <Reviews reviews={reviews} />
          <div className="buttons">
            <button
              className="preview-profile-btn"
              onClick={() => setModal(item)}
            >
              Preview Profile
            </button>
            <button className="contact-btn">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileItem;
