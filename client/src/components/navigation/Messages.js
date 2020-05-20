import React, { useState, useContext, useRef } from "react";
import CreativeContext from "../../context/creative/creativeContext";
import useOutsideClick from "../../hooks/useOutsideClick";

const Messages = () => {
  const creativeContext = useContext(CreativeContext);
  const { togglemessages, chat, notifications } = creativeContext;
  const [chatOpen, setChatOpen] = useState(false);
  const [notifsOpen, setNotifsOpen] = useState(false);

  const ref = useRef();

  useOutsideClick(ref, () => {
    togglemessages(false);
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

  return (
    <div className="messages" ref={ref}>
      <div className={`chat${chatOpen ? " open" : ""}`}>
        <div className="header" onClick={chatClickHandler}>
          <h3 className="title">Chat</h3>
          <span className={`amount${chat.length > 0 ? " new" : ""}`}>
            {chat.length}
          </span>
        </div>
        <ul>
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
        </ul>
      </div>
      <div className={`notifs${notifsOpen ? " open" : ""}`}>
        <div className="header" onClick={notifsClickHandler}>
          <h3 className="title">Notifications</h3>
          <span className={`amount${chat.length > 0 ? " new" : ""}`}>
            {chat.length}
          </span>
        </div>
        <ul>
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
        </ul>
      </div>
    </div>
  );
};

export default Messages;
