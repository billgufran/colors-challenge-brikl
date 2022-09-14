import ColorBar from "components/ColorBar";
import LinearProgressBar from "components/LinearProgressBar";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "styles/pages/Home.module.css";
import { TColor } from "types";

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

  return data;
};

const Home: NextPage = () => {
  const [colors, setColors] = useState<TColor[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getData = async () => {
    setIsLoading(true);
    setError("");
    try {
      const data = await fetchColors();
      setColors(data);
    } catch (error) {
      console.error(error);
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      {error && <h3 className={styles.error}>{error}</h3>}
      {colors.length > 0 &&
        colors.map((color, index) => <ColorBar key={index} {...color} />)}
      <div>
        <LinearProgressBar load={isLoading} width={isLoading ? "9px" : "2px"} />
        <div className={styles.footer}>
          <p>brikl &bull; Colors Challenge</p>
          {(colors.length > 0 || error) && (
            <button
              onClick={getData}
              className={styles.generateButton}
              disabled={isLoading}
            >
              Generate
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
