import React, { useEffect, useRef, useState } from "react";
import { TColor } from "types";
import styles from "styles/components/ColorBar.module.css";

type ColorBarProps = TColor;

const LIGHTNESS_THRESHOLD = 60;

const ColorBar = ({ value, type, hslComposition }: ColorBarProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lightness = hslComposition?.lightness ?? null;

  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    setBackgroundColor(value);

    return () => {
      if (containerRef?.current) {
        containerRef.current.style.backgroundColor = "";
      }
    };
  }, [value]);

  return (
    <div
      ref={containerRef}
      style={{
        backgroundColor,
        color:
          lightness === null
            ? "inherit"
            : lightness > LIGHTNESS_THRESHOLD
            ? "#000"
            : "#fff",
      }}
      className={styles.card}
    >
      <h3>{value} &rarr;</h3>
      <p>
        {hslComposition && type !== "hsl"
          ? `hsl(${hslComposition.hue}, ${hslComposition.saturation}%, ${hslComposition.lightness}%)`
          : "—"}
      </p>
    </div>
  );
};

export default ColorBar;
