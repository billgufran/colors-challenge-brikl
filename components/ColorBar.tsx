import React from "react";
import { TColor } from "types";
import styles from "styles/components/ColorBar.module.css";

type ColorBarProps = TColor;

const LIGHTNESS_THRESHOLD = 65;

const ColorBar = ({ value, type, hslComposition }: ColorBarProps) => {
  const hslColor = hslComposition
    ? `hsl(${hslComposition.hue}, ${hslComposition.saturation}%, ${hslComposition.lightness}%)`
    : "";
  const lightness = hslComposition?.lightness || 0;

  return (
    <div
      style={{
        backgroundColor: hslColor || value,
        color: lightness > LIGHTNESS_THRESHOLD ? "#000" : "#fff",
      }}
      className={styles.card}
    >
      <h3>{value} &rarr;</h3>
      <p>{hslColor && type !== "hsl" ? hslColor : "—"}</p>
    </div>
  );
};

export default ColorBar;
