import React, { useState, useContext, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavigationContext from "../../context/navigation/navigationContext";
import useOutsideClick from "../../hooks/useOutsideClick";

const messagesVariants = {
  visible: { opacity: 1, transition: { duration: 0.3 } },
  hidden: { opacity: 0, transition: { duration: 0.3 } }
};

const list = {
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
  const {
    showMessages,
    toggleMessages,
    chat,
    notifications
  } = navigationContext;
  const [chatOpen, setChatOpen] = useState(false);
  const [notifsOpen, setNotifsOpen] = useState(false);

  const ref = useRef();

  useOutsideClick(ref, () => {
    showMessages && toggleMessages(false);
  });

  const chatClickHandler = () => {
    setChatOpen(!chatOpen);
    setNotifsOpen(false);
  };

  const notifsClickHandler = () => {
    setNotifsOpen(!notifsOpen);
    setChatOpen(false);
  };

  let shortenMessage = (text, max) => {
    return text && text.length > max
      ? text
          .slice(0, max)
          .split(" ")
          .slice(0, -1)
          .join(" ")
      : text;
  };

  // TODO: Create animations with framer motion and not transitions in css

  return (
    <AnimatePresence exitBeforeEnter>
      {showMessages && (
        <motion.div
          className="messages"
          variants={messagesVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          ref={ref}
        >
          <div className="chat">
            <div className="header" onClick={chatClickHandler}>
              <h3 className="title">Chat</h3>
              <span className={`amount${chat.length > 0 ? " new" : ""}`}>
                {chat.length}
              </span>
            </div>
          </div>
          <motion.ul animate={chatOpen ? "open" : "closed"} variants={list}>
            {chat.map(item => (
              <li className="notification" key={item.id}>
                <img src={item.image} alt="profile" />
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
          <motion.ul animate={notifsOpen ? "open" : "closed"} variants={list}>
            {notifications.map(item => (
              <li className="notification" key={item.id}>
                <img src={item.image} alt="profile" />
                <p>
                  <span className="name">{item.name}</span>{" "}
                  {shortenMessage(item.message, 70)}
                  {item.message.length >= 70 && <span>...</span>}
                </p>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Messages;
