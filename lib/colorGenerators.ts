import { TColor } from "../types";

/**
 * To add new colorspace, create the function to
 * generate the color then call it inside `colorGenerator`.
 * Make sure the function return type is `Tcolor`
 */

export const colorGenerators = [
  HexColorGenerator,
  RGBColorGenerator,
  HSLColorGenerator,
];

export function HexColorGenerator(): TColor {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return {
    type: "hex",
    value: `#${randomColor}`,
    composition: randomColor,
  };
}

export function RGBColorGenerator(): TColor {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return {
    type: "rgb",
    value: `rgb(${red}, ${green}, ${blue})`,
    composition: {
      red,
      green,
      blue,
    },
  };
}

export function HSLColorGenerator(): TColor {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 100);
  const lightness = Math.floor(Math.random() * 100);

  return {
    type: "hsl",
    value: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
    composition: {
      hue,
      saturation,
      lightness,
    },
  };
}
