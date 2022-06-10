import React from "react";
import size from "./colorsBox.module.css";

const Box = ({ text, value, changeColor }) => {
  return (
    <button
      style={{ backgroundColor: value }}
      className={size.box}
      onClick={changeColor}
      value={value}
    >
      {text}
    </button>
  );
};

const ColorsBox = () => {
  const [colors, setColors] = React.useState({
    color1: "red",
    color2: "gold",
    color3: "aqua",
    color4: "purple",
  });

  const changeColor = (e) => {
    console.log(colors.color1);
    console.log(colors.color2);
    const colorArray = ["red", "gold", "aqua", "purple"];

    colorArray.map((color) => {
      if (
        (colors.color1 !== colors.color2 && e.target.innerHTML === color) ||
        (colors.color1 === colors.color2 &&
          e.target.innerHTML !== e.target.value)
      ) {
        setColors({
          color1: e.target.innerHTML,
          color2: e.target.innerHTML,
          color3: e.target.innerHTML,
          color4: e.target.innerHTML,
        });
      } else if (
        colors.color1 === colors.color2 &&
        e.target.value === e.target.innerHTML
      ) {
        setColors({
          color1: "red",
          color2: "gold",
          color3: "aqua",
          color4: "purple",
        });
      }
    });
  };
  return (
    <div className={size.container}>
      <Box
        text="red"
        name="red"
        value={colors.color1}
        changeColor={changeColor}
      />

      <Box
        text="gold"
        name="gold"
        value={colors.color2}
        changeColor={changeColor}
      />

      <Box
        text="aqua"
        name="aqua"
        value={colors.color3}
        changeColor={changeColor}
      />

      <Box
        text="purple"
        name="purple"
        value={colors.color4}
        changeColor={changeColor}
      />
    </div>
  );
};

export default ColorsBox;
