import { join } from "path";
import { promises as fs } from "fs";
import { Theme } from "../themes/index";
import {
  ONE_HUNTER_THEME_NAMES,
  ONE_HUNTER_THEME_VARIANTS,
  FLEXOKI_THEME_NAMES,
  FLEXOKI_THEME_VARIANTS,
  EDITOR_DICT,
} from "../variants/constants";

export function writeFile(path: string, data: unknown): Promise<void> {
  return fs.writeFile(path, JSON.stringify(data, null, 2));
}

async function generateTheme() {
  ONE_HUNTER_THEME_VARIANTS.forEach((variant) => {
    ONE_HUNTER_THEME_NAMES.forEach((themeName) => {
      const theme = Theme.init({
        editorTheme: "one-hunter",
        variant,
      });
      writeFile(
        join(
          __dirname,
          "..",
          "..",
          "themes",
          `${themeName[variant]}-color-theme.json`
        ),
        theme
      );
    });
  });

  FLEXOKI_THEME_VARIANTS.forEach((variant) => {
    FLEXOKI_THEME_NAMES.forEach((themeName) => {
      const theme = Theme.init({
        editorTheme: EDITOR_DICT[variant],
        variant,
      });
      writeFile(
        join(
          __dirname,
          "..",
          "..",
          "themes",
          `${themeName[variant]}-color-theme.json`
        ),
        theme
      );
    });
  });
}

generateTheme();
