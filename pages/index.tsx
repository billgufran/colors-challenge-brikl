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
      setIsLoading(true);
      fetchColors();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
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
