export type TColor = {
  type: "hex" | "rgb" | "hsl";
  value: string;
  composition: string | { [key: string]: string | number };
};
