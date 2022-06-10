import React from "react";
import styles from "./generateBoxes.module.css";

function GenerateBoxes() {
  let [state, setState] = React.useState({
    total: 0,
    totalInput: "",
  });
  let [color, setColors] = React.useState({
    newColor: "",
    id: "",
  });

  function generate() {
    setState({ total: state.totalInput });
  }

  let box = [];
  function changeColor(id) {
    const colors = ["red", "orange", "yellow", "black"];
    const colorIndex = Math.floor(Math.random() * colors.length);
    setColors({ newColor: colors[colorIndex], id: id });
  }

  if (state.total === 0) {
    box = <div>No Box</div>;
  } else if (state.total >= 128) {
    box = <div>Don't exceed 128 boxes</div>;
  } else {
    for (let i = 0; i < state.total && state.total < 128; i++) {
      box.push(
        <div
          key={i}
          className={styles.box}
          style={color.id === i ? { backgroundColor: color.newColor } : null}
          onClick={() => {
            changeColor(i);
          }}
        >
          Box #{i + 1}
        </div>
      );
    }
  }
  return (
    <div>
      <input
        type="number"
        placeholder="input here"
        onInput={(e) => {
          setState({ totalInput: e.target.value });
        }}
      />
      <button onClick={generate}>Generate</button>
      <div className={styles.container}>{box}</div>
    </div>
  );
}

export default GenerateBoxes;
