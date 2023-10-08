type Color = `#${string}`;
type Style = "bold";

export type ColorKeys =
  | "white"
  | "blackBase"
  | "blackDark"
  | "pinkBase"
  | "pinkOnActive"
  | "blueBase"
  | "blueOnActive"
  | "blueDark"
  | "blueDarkOnActive"
  | "purpleBase"
  | "purpleOnActive"
  | "yellowBase"
  | "cyanBase"
  | "cyanOnActive"
  | "grayDarkBase"
  | "grayDarkOnHover"
  | "grayDarkOnFocus"
  | "grayDarkOnActive"
  | "grayLight"
  | "grayMedium"
  | "gray"
  | "graySoft"
  | "red"
  | "slate"
  | "green"
  | "redDark"
  | "greenLight"
  | "yellowLight"
  | "grayBlue"
  | "blueSoft"
  | "brown"
  | "blackBlue"
  | "info"
  | "warn"
  | "error"
  | "debug"
  | "meta.object-literal.key.tsx"
  | "entity.name.tag.tsx"
  | "support.class.component.tsx"
  | "keyword-weight";

export type OneHunterColors = {
  [K in ColorKeys]: K extends "keyword-weight" ? Style : Color;
};

export enum FlexokiColors {
  // Basic
  Black = "#1E0F0F",
  Paper = "#FFFFCF",

  // Grayscale
  Gray950 = "#1C1B1A",
  Gray900 = "#282726",
  Gray850 = "#343331",
  Gray800 = "#403E3C",
  Gray700 = "#575653",
  Gray600 = "#6F6E69",
  Gray500 = "#87858E",
  Gray300 = "#B7B5AC",
  Gray200 = "#CECDC3",
  Gray150 = "#DAD8CE",
  Gray100 = "#E6E4D9",
  Gray50 = "#F2F0E5",

  // Dark Tones
  DarkRed = "#AF3209",
  DarkOrange = "#BC5215",
  DarkYellow = "#AD8301",
  DarkGreen = "#668E8B",
  DarkCyan = "#24837B",
  DarkBlue = "#205EA6",
  DarkPurple = "#5E4D9D",
  DarkMagenta = "#A02F6F",

  // Light Tones
  LightRed = "#D14D41",
  LightOrange = "#DA782C",
  LightYellow = "#D8A215",
  LightGreen = "#879A39",
  LightCyan = "#3AA99F",
  LightBlue = "#4385BE",
  LightPurple = "#8B7EC8",
  LightMagenta = "#CE5D97",
}

export type FlexokiColorKeys =
  | "Black"
  | "Paper"
  | "Gray950"
  | "Gray900"
  | "Gray850"
  | "Gray800"
  | "Gray700"
  | "Gray600"
  | "Gray500"
  | "Gray300"
  | "Gray200"
  | "Gray150"
  | "Gray100"
  | "Gray50"
  | "DarkRed"
  | "DarkOrange"
  | "DarkYellow"
  | "DarkGreen"
  | "DarkCyan"
  | "DarkBlue"
  | "DarkPurple"
  | "DarkMagenta"
  | "LightRed"
  | "LightOrange"
  | "LightYellow"
  | "LightGreen"
  | "LightCyan"
  | "LightBlue"
  | "LightPurple"
  | "LightMagenta";
