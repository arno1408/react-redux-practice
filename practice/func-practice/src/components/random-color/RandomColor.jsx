import { useEffect, useState } from "react";
import css from "./RandomColor.module.css";

const RandomColor = () => {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomNumbers = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleHexColor = () => {
    const hexValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hex = "#";

    for (let i = 0; i < 6; i++) {
      hex += hexValues[randomNumbers(hexValues.length)];
    }

    setColor(hex);
  };

  useEffect(() => {
    if (colorType === "hex") handleHexColor();
    else handleRgbColor();
  }, [colorType]);

  const handleRgbColor = () => {
    const r = randomNumbers(256);
    const g = randomNumbers(256);
    const b = randomNumbers(256);

    setColor(`rgb(${r},${g},${b})`);
  };

  return (
    <div
      style={{ backgroundColor: color, color: "white" }}
      className={css.wrapper}
    >
      <h1>Random Color</h1>
      <button onClick={() => setColorType("hex")}>Hex Color</button>
      <button onClick={() => setColorType("rgb")}>RGB Color</button>
      <button onClick={colorType === "hex" ? handleHexColor : handleRgbColor}>
        Change Type
      </button>
      <div>
        <h1>{colorType === "hex" ? "HEX" : "RGB"}</h1>
        <h3>{color}</h3>
      </div>
    </div>
  );
};

export default RandomColor;
