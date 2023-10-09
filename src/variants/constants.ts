export const ONE_HUNTER_THEME_VARIANTS = [
  "classic",
  "material",
  "vercel",
  "light",
] as const;

export const ONE_HUNTER_THEME_NAMES = [
  {
    classic: "OneHunter-Classic",
    material: "OneHunter-Material",
    vercel: "OneHunter-Vercel",
    light: "OneHunter-Light",
  },
] as const;

export type OneHunterThemeVariant = (typeof ONE_HUNTER_THEME_VARIANTS)[number];

export const FLEXOKI_THEME_VARIANTS = [
  "original-flexoki-dark",
  "original-flexoki-light",
  "one-hunter-flexoki-dark",
  "one-hunter-flexoki-light",
] as const;

export const FLEXOKI_THEME_NAMES = [
  {
    "original-flexoki-dark": "Flexoki-Dark",
    "original-flexoki-light": "Flexoki-Light",
    "one-hunter-flexoki-dark": "OneHunter-Flexoki-Dark",
    "one-hunter-flexoki-light": "OneHunter-Flexoki-Light",
  },
] as const;

export const EDITOR_DICT = {
  "original-flexoki-dark": "original-flexoki",
  "original-flexoki-light": "original-flexoki",
  "one-hunter-flexoki-dark": "one-hunter-flexoki",
  "one-hunter-flexoki-light": "one-hunter-flexoki",
} as const;

export type FlexokiThemeVariant = (typeof FLEXOKI_THEME_VARIANTS)[number];
