import { TColor } from "types";
import { hexToHsl, rgbToHsl } from "./colorConverter";

/**
 * To add new colorspace, create the function to
 * generate the color then store it inside `colorGenerators`.
 * Make sure the function return type is `Tcolor`.
 *
 * Property `hslComposition` is optional but highly suggested
 * for easier application and standardization in  the front-end.
 * The value should be the representation of the color in hsl space.
 * Check `lib/colorConverter.ts` for refernce.
 */

export const colorGenerators = [
  HexColorGenerator,
  RgbColorGenerator,
  HslColorGenerator,
];

export function HexColorGenerator(): TColor {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  const [hue, saturation, lightness] = hexToHsl(randomColor);

  return {
    type: "hex",
    value: `#${randomColor}`,
    composition: {
      RR: randomColor.slice(0, 2),
      GG: randomColor.slice(2, 4),
      BB: randomColor.slice(4, 6),
    },
    hslComposition: {
      hue,
      saturation,
      lightness,
    },
  };
}

export function RgbColorGenerator(): TColor {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  const [hue, saturation, lightness] = rgbToHsl(red, green, blue);

  return {
    type: "rgb",
    value: `rgb(${red}, ${green}, ${blue})`,
    composition: {
      red,
      green,
      blue,
    },
    hslComposition: {
      hue,
      saturation,
      lightness,
    },
  };
}

export function HslColorGenerator(): TColor {
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
    hslComposition: {
      hue,
      saturation,
      lightness,
    },
  };
}
