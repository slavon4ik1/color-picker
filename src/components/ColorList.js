import React from "react";
import { colors } from "../mock";
const ColorList = ({
  toggleModalList,
  isOpenList,
  setCurrentValue,
  setIsOpenList,
  setRgb,
  hexToRgb,
}) => {
  return (
    <div className="color-picker__hard-data">
      <div className="color-picker__traingle" onClick={toggleModalList}></div>
      <div
        className={`color-picker__hard-data-list ${isOpenList ? "active" : ""}`}
      >
        <ul>
          {colors.map((item) => (
            <li
              key={item.hex}
              onClick={(e) => {
                setCurrentValue(item.hex);
                setIsOpenList(!isOpenList);
                setRgb({
                  r: hexToRgb(item.hex)[0],
                  g: hexToRgb(item.hex)[1],
                  b: hexToRgb(item.hex)[2],
                });
              }}
            >
              <p>{item.color}</p>
              <span style={{ background: `${item.hex}` }}></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ColorList;
