export const THEME_VARIANTS = [
  "classic",
  "material",
  "vercel",
  "light",
] as const;

export const THEME_NAMES = [
  {
    classic: "OneHunter-Classic",
    material: "OneHunter-Material",
    vercel: "OneHunter-Vercel",
    light: "OneHunter-Light",
  },
] as const;

export type ThemeVariant = (typeof THEME_VARIANTS)[number];
