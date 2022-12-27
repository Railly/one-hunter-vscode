import { join } from "path";
import { Theme } from "../src/Theme/index";
import * as defaultConfig from "../src/Theme/config/defaultConfig.json";
import * as materialConfig from "../src/Theme/config/materialConfig.json";
import { promises as fs } from "fs";

export function writeFile(path: string, data: unknown): Promise<void> {
  return fs.writeFile(path, JSON.stringify(data, null, 2));
}

async function generateTheme() {
  writeFile(
    join(__dirname, "..", "themes", "OneHunter-Classic-color-theme.json"),
    await Theme.init(defaultConfig)
  );

  writeFile(
    join(__dirname, "..", "themes", "OneHunter-Material-color-theme.json"),
    await Theme.init(materialConfig)
  );
}

generateTheme();
