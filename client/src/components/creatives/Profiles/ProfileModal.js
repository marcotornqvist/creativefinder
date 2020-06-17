import React, { useContext, Fragment } from "react";
import ReactDOM from "react-dom";
import CreativeContext from "../../../context/creative/creativeContext";
import useLockBodyScroll from "../../../hooks/useLockBodyScroll";

// Animate Modal with the same things that sidebar had

const ProfileModal = () => {
  const creativeContext = useContext(CreativeContext);
  const { profileModal, setModal } = creativeContext;

  useLockBodyScroll(profileModal);

  return (
    profileModal !== null &&
    ReactDOM.createPortal(
      <Fragment>
        <div className="modal-overlay" onClick={() => setModal(null)} />
        <div className="modal-wrapper" onClick={() => setModal(null)}>
          <div className="modal-profile"></div>
        </div>
      </Fragment>,
      document.body
    )
  );
};

export default ProfileModal;
