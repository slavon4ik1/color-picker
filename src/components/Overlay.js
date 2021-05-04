import React from "react";

const Overlay = ({ toggleModal, activeTrigger }) => {
  return (
    <div
      onClick={toggleModal}
      className={`color-picker__overlay ${activeTrigger ? "active" : ""}`}
    ></div>
  );
};

export default Overlay;
