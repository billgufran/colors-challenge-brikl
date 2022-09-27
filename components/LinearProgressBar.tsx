import React from "react";
import styles from "styles/components/LinearProgressBar.module.css";

type LinearProgressBarProps = {
  width?: string;
  load: boolean;
};

const LinearProgressBar = ({ width = "4px", load }: LinearProgressBarProps) => {
  return (
    <div
      style={{ height: width }}
      className={`${styles.progressBar} ${
        load ? styles["progressBar--loading"] : ""
      }`}
    />
  );
};

export default LinearProgressBar;
