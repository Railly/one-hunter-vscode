import { join } from "path";
import { promises as fs } from "fs";
import { Theme } from "../themes/index";
import { THEME_NAMES, THEME_VARIANTS } from "../variants/constants";

export function writeFile(path: string, data: unknown): Promise<void> {
  return fs.writeFile(path, JSON.stringify(data, null, 2));
}

async function generateTheme() {
  THEME_VARIANTS.forEach((variant) => {
    THEME_NAMES.forEach((themeName) => {
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
}

generateTheme();
