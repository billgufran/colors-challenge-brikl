export type TColor = {
  type: string;
  value: string;
  composition: { [key: string]: string | number };
  hslComposition?: THslComposition;
};

export type THslComposition = {
  hue: number;
  saturation: number;
  lightness: number;
};
