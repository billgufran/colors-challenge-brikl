import type { NextApiRequest, NextApiResponse } from "next";
import { colorGenerators } from "lib/colorGenerators";
import { TColor } from "types";

const DATA_LENGTH = 5;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TColor[]>
) {
  const colors = [];

  for (let i = 0; i < DATA_LENGTH; i++) {
    const randomColorGenerator =
      colorGenerators[Math.floor(Math.random() * colorGenerators.length)];

    colors.push(randomColorGenerator());
  }

  res.status(200).json(colors);
}
