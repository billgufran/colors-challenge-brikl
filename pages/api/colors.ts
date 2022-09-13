import type { NextApiRequest, NextApiResponse } from "next";

type TColor = {
  type: "hex" | "rgb" | "hsl";
  value: string;
  composition: string | { [key: string]: string | number };
};

function HexColorGenerator(): TColor {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return {
    type: "hex",
    value: `#${randomColor}`,
    composition: randomColor,
  };
}

function RGBColorGenerator(): TColor {
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

function HSLColorGenerator(): TColor {
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

/**
 * To add new colorspace, create the function to
 * generate the color then call it inside `colorGenerator`.
 * Make sure the function return type is `Tcolor`
 */

const colorGenerators = [
  HexColorGenerator,
  RGBColorGenerator,
  HSLColorGenerator,
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TColor[]>
) {
  const colors = [];

  for (let i = 0; i < 5; i++) {
    const randomColorGenerator =
      colorGenerators[Math.floor(Math.random() * colorGenerators.length)];

    colors.push(randomColorGenerator());
  }

  res.status(200).json(colors);
}
