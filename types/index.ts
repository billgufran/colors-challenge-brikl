export type TColor = {
  type: "hex" | "rgb" | "hsl";
  value: string;
  composition: { [key: string]: string | number };
  hslComposition?: THslComposition;
};

export type THslComposition = {
  hue: number;
  saturation: number;
  lightness: number;
};
