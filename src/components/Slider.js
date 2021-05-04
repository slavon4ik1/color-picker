import React from "react";

const Slider = ({
  currentValue,
  openValidSlider,
  isOpenSlider,
  rgb,
  valueHandler,
  toggleModalSlider,
  setIsOpenSlider,
}) => {
  return (
    <div className="color-picker__color-slider">
      <div
        onClick={openValidSlider}
        className="color-picker__active-color"
        style={{ background: `${currentValue}` }}
      ></div>
      <div className={`color-picker__slider ${isOpenSlider ? "active" : ""}`}>
        <div className="color-picker__range-wrapper">
          {[
            { name: "r", value: rgb.r },
            { name: "g", value: rgb.g },
            { name: "b", value: rgb.b },
          ].map(({ name, value }) => (
            <label key={name}>
              <p>{name}</p>
              <input
                name={name}
                value={value}
                onChange={valueHandler}
                type="range"
                min="0"
                max="255"
              />
            </label>
          ))}
        </div>
        <div className="color-picker__btn-wrapper">
          <button onClick={toggleModalSlider}>cancel</button>
          <button onClick={() => setIsOpenSlider(!isOpenSlider)}>ok</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
