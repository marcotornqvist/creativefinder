import React, { useState, useContext, useRef } from "react";
import { motion } from "framer-motion";
import NavigationContext from "../../context/navigation/navigationContext";
import useOutsideClick from "../../hooks/useOutsideClick";

const listVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 1, type: "tween" }
  },
  open: {
    opacity: "100%",
    height: "calc(100% - 110px)",
    transition: { duration: 1, type: "tween" }
  }
};

const Messages = () => {
  const navigationContext = useContext(NavigationContext);
  const { toggleMessages, chat, notifications } = navigationContext;
  const [chatOpen, setChatOpen] = useState(false);
  const [notifsOpen, setNotifsOpen] = useState(false);

  const ref = useRef();

  useOutsideClick(ref, () => {
    toggleMessages(false);
  });

  const chatClickHandler = () => {
    setChatOpen(!chatOpen);
    setNotifsOpen(false);
  };

  const notifsClickHandler = () => {
    setNotifsOpen(!notifsOpen);
    setChatOpen(false);
  };

  function shortenMessage(text, max) {
    return text && text.length > max
      ? text
          .slice(0, max)
          .split(" ")
          .slice(0, -1)
          .join(" ")
      : text;
  }

  // TODO: Create animations with framer motion and not transitions in css

  return (
    <div className="messages" ref={ref}>
      <div className="chat">
        <div className="header" onClick={chatClickHandler}>
          <h3 className="title">Chat</h3>
          <span className={`amount${chat.length > 0 ? " new" : ""}`}>
            {chat.length}
          </span>
        </div>
      </div>
      <motion.ul animate={chatOpen ? "open" : "closed"} variants={listVariants}>
        {chat.map(item => (
          <li className="notification" key={item.id}>
            <div className="img-box">
              <img src={item.image} alt="profile" />
            </div>
            <p>
              <span className="name">{item.name}</span>{" "}
              {shortenMessage(item.message, 70)}
              {item.message.length >= 70 && <span>...</span>}
            </p>
          </li>
        ))}
      </motion.ul>
      <div className="notifs">
        <div className="header" onClick={notifsClickHandler}>
          <h3 className="title">Notifications</h3>
          <span className={`amount${chat.length > 0 ? " new" : ""}`}>
            {chat.length}
          </span>
        </div>
      </div>
      <motion.ul
        animate={notifsOpen ? "open" : "closed"}
        variants={listVariants}
      >
        {notifications.map(item => (
          <li className="notification" key={item.id}>
            <div className="img-box">
              <img src={item.image} alt="profile" />
            </div>
            <p>
              <span className="name">{item.name}</span>{" "}
              {shortenMessage(item.message, 70)}
              {item.message.length >= 70 && <span>...</span>}
            </p>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Messages;
