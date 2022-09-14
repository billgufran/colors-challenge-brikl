import { TColor } from "types";
import { hexToRgba, hslToRgba } from "./colorConverter";

/**
 * To add new colorspace, create the function to
 * generate the color then store it inside `colorGenerators`.
 * Make sure the function return type is `Tcolor`.
 *
 * Property `rgbaComposition` is optional for easier application
 * and standardization in front-end. The value should be the
 * representation of the color in rgba space.
 */

export const colorGenerators = [
  HexColorGenerator,
  RgbColorGenerator,
  HslColorGenerator,
];

export function HexColorGenerator(): TColor {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  const [red, green, blue, alpha] = hexToRgba(randomColor);

  return {
    type: "hex",
    value: `#${randomColor}`,
    composition: {
      RR: randomColor.slice(0, 2),
      GG: randomColor.slice(2, 4),
      BB: randomColor.slice(4, 6),
    },
    rgbaComposition: {
      red,
      green,
      blue,
      alpha,
    },
  };
}

export function RgbColorGenerator(): TColor {
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
    rgbaComposition: {
      red,
      green,
      blue,
      alpha: 1,
    },
  };
}

export function HslColorGenerator(): TColor {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 100);
  const lightness = Math.floor(Math.random() * 100);

  const [red, green, blue, alpha] = hslToRgba(hue, saturation, lightness);

  return {
    type: "hsl",
    value: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
    composition: {
      hue,
      saturation,
      lightness,
    },
    rgbaComposition: {
      red,
      green,
      blue,
      alpha,
    },
  };
}
