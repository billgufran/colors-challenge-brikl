export type TColor = {
  type: "hex" | "rgb" | "hsl";
  value: string;
  composition: { [key: string]: string | number };
  rgbaComposition?: { [key: string]:  number };
};
