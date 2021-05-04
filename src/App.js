import { useEffect, useState } from "react";
import "./App.scss";
import ColorList from "./components/ColorList";
import Overlay from "./components/Overlay";
import Slider from "./components/Slider";
import TextField from "./components/TextField";
function App() {
  const [isOpenList, setIsOpenList] = useState(false);
  const [isOpenSlider, setIsOpenSlider] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  const [intermediateValue, setIntermediateValue] = useState("");
  const [rgb, setRgb] = useState({ r: 255, g: 204, b: 51 });

  const rgbToHex = (r, g, b) => {
    return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
  };

  const hexToRgb = (hex) => {
    return hex
      ?.replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (r, g, b) => "#" + r + r + g + g + b + b,
      )
      .substring(1)
      .match(/.{2}/g)
      ?.map((x) => parseInt(x, 16));
  };

  const valueHandler = (e) => {
    setRgb({ ...rgb, [e.target.name]: +e.target.value });
  };

  const toggleModalList = () => {
    setIsOpenList(!isOpenList);
  };

  const toggleModalSlider = () => {
    setIsOpenSlider(!isOpenSlider);
    setCurrentValue(intermediateValue);
  };

  const openValidSlider = () => {
    if (currentValue.match(/^#[0-9a-f]{6}/i) !== null) {
      setIsOpenSlider(!isOpenSlider);
      setIntermediateValue(currentValue);
      setRgb({
        r: hexToRgb(currentValue)[0],
        g: hexToRgb(currentValue)[1],
        b: hexToRgb(currentValue)[2],
      });
    } else {
      alert("wrong data in the input field");
    }
  };
  const currentValueHandler = (e) => {
    setCurrentValue(e.target.value);
  };

  useEffect(() => {
    setCurrentValue(rgbToHex(rgb.r, rgb.g, rgb.b));
  }, [rgb]);

  return (
    <div className="App">
      <div className="color-picker">
        <Overlay toggleModal={toggleModalList} activeTrigger={isOpenList} />
        <Overlay toggleModal={toggleModalSlider} activeTrigger={isOpenSlider} />
        <TextField
          currentValue={currentValue}
          currentValueHandler={currentValueHandler}
        />

        <Slider
          currentValue={currentValue}
          openValidSlider={openValidSlider}
          isOpenSlider={isOpenSlider}
          rgb={rgb}
          valueHandler={valueHandler}
          toggleModalSlider={toggleModalSlider}
          setIsOpenSlider={(value) => setIsOpenSlider(value)}
        />
        <ColorList
          toggleModalList={toggleModalList}
          isOpenList={isOpenList}
          setCurrentValue={(value) => setCurrentValue(value)}
          setIsOpenList={(value) => setIsOpenList(value)}
          setRgb={(value) => setRgb(value)}
          hexToRgb={(r, g, b) => hexToRgb(r, g, b)}
        />
      </div>
    </div>
  );
}

export default App;
