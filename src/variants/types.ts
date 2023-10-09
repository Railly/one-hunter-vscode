type Color = string;
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

export enum BaseColors {
  Red = "Red",
  Orange = "Orange",
  Yellow = "Yellow",
  Green = "Green",
  Cyan = "Cyan",
  Blue = "Blue",
  Purple = "Purple",
  Magenta = "Magenta",
}

export type Theme = "Light" | "Dark";

export const flexokiColors = {
  Black: "#100F0F",
  Paper: "#FFFCF0",
  Gray950: "#1C1B1A",
  Gray900: "#282726",
  Gray850: "#343331",
  Gray800: "#403E3C",
  Gray700: "#575653",
  Gray600: "#6F6E69",
  Gray500: "#878580",
  Gray300: "#B7B5AC",
  Gray200: "#CECDC3",
  Gray150: "#DAD8CE",
  Gray100: "#E6E4D9",
  Gray50: "#F2F0E5",
  Light: {
    [BaseColors.Red]: "#AF3029",
    [BaseColors.Orange]: "#BC5215",
    [BaseColors.Yellow]: "#AD8301",
    [BaseColors.Green]: "#66800B",
    [BaseColors.Cyan]: "#24837B",
    [BaseColors.Blue]: "#205EA6",
    [BaseColors.Purple]: "#5E409D",
    [BaseColors.Magenta]: "#A02F6F",
  },
  Dark: {
    [BaseColors.Red]: "#D14D41",
    [BaseColors.Orange]: "#DA702C",
    [BaseColors.Yellow]: "#D0A215",
    [BaseColors.Green]: "#879A39",
    [BaseColors.Cyan]: "#3AA99F",
    [BaseColors.Blue]: "#4385BE",
    [BaseColors.Purple]: "#8B7EC8",
    [BaseColors.Magenta]: "#CE5D97",
  },
};

export type FlexokiColorKeys = keyof typeof flexokiColors | BaseColors;

export enum BaseColorsAcronym {
  Red = "re",
  Orange = "or",
  Yellow = "ye",
  Green = "gr",
  Cyan = "cy",
  Blue = "bl",
  Purple = "pu",
  Magenta = "ma",
}

export type FlexokiColorPallete =
  | "bg"
  | "bg-2"
  | "ui"
  | "ui-2"
  | "ui-3"
  | "tx-3"
  | "tx-2"
  | "tx"
  | `${BaseColorsAcronym.Red}`
  | `${BaseColorsAcronym.Red}-2`
  | `${BaseColorsAcronym.Orange}`
  | `${BaseColorsAcronym.Orange}-2`
  | `${BaseColorsAcronym.Yellow}`
  | `${BaseColorsAcronym.Yellow}-2`
  | `${BaseColorsAcronym.Green}`
  | `${BaseColorsAcronym.Green}-2`
  | `${BaseColorsAcronym.Cyan}`
  | `${BaseColorsAcronym.Cyan}-2`
  | `${BaseColorsAcronym.Blue}`
  | `${BaseColorsAcronym.Blue}-2`
  | `${BaseColorsAcronym.Purple}`
  | `${BaseColorsAcronym.Purple}-2`
  | `${BaseColorsAcronym.Magenta}`
  | `${BaseColorsAcronym.Magenta}-2`;
