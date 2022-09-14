import ColorBar from "components/ColorBar";
import LinearProgressBar from "components/LinearProgressBar";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "styles/pages/Home.module.css";
import { TColor } from "types";

const Home: NextPage = () => {
  const [colors, setColors] = useState<TColor[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchColors = async () => {
    setIsLoading(true);
    const response = await fetch("/api/colors", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      setIsLoading(false);
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    setIsLoading(false);
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
      <div>
        <LinearProgressBar load={isLoading} width={isLoading ? "9px" : "2px"} />
        <div className={styles.footer}>
          <p>brikl &bull; Colors Challenge</p>
          <button
            onClick={fetchColors}
            className={styles.generateButton}
            disabled={isLoading}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
