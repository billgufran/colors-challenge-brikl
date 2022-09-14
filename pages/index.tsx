import ColorBar from "components/ColorBar";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "styles/pages/Home.module.css";
import { TColor } from "types";

const Home: NextPage = () => {
  const [colors, setColors] = useState<TColor[]>([]);

  const fetchColors = async () => {
    const response = await fetch("/api/colors", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    setColors(data);
  };

  useEffect(() => {
    try {
      fetchColors();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className={styles.container}>
      {colors.length > 0 &&
        colors.map((color, index) => <ColorBar key={index} {...color} />)}
      <div className={styles.footer}>
        <p>brikl - Colors Challenge</p>
        <button onClick={fetchColors} className={styles.generateButton}>
          Generate Colors
        </button>
      </div>
    </div>
  );
};

export default Home;
