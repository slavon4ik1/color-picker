import React from "react";

const TextField = ({ currentValue, currentValueHandler }) => {
  return (
    <>
      <input
        className="color-picker__input"
        type="text"
        maxLength="7"
        value={currentValue}
        onChange={currentValueHandler}
      />
    </>
  );
};

export default TextField;
