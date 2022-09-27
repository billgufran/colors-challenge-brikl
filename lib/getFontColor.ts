const getFontColor = (lightness: number | null) => {
  const LIGHTNESS_THRESHOLD = 60;

  if (lightness === null) {
    return "inherit";
  }

  if (lightness > LIGHTNESS_THRESHOLD) {
    return "#000";
  }

  return "#fff";
};

export default getFontColor;
