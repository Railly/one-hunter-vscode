import { Theme } from "../src/Theme/index";
import * as defaultConfig from "../src/Theme/config/defaultConfig.json";
import * as materialConfig from "../src/Theme/config/materialConfig.json";
import * as vercelConfig from "../src/Theme/config/vercelConfig.json";
import * as lightConfig from "../src/Theme/config/lightConfig.json";
import { promises as fs } from "fs";
import xmlbuilder from "xmlbuilder";
import { dirname, resolve } from "path";
import themeData, { OneHunterColors } from "../src/themes";

function convertToRGB(color: string): { r: number; g: number; b: number } {
  const hex = color.substring(1); // remove #
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;
  return { r, g, b };
}

function createIterm2Theme(variant: string, theme: Theme) {
  const root = xmlbuilder.create("plist").att("version", "1.0").ele("dict");
  const colorObj = themeData.textColors[variant] as Record<
    keyof typeof OneHunterColors,
    string
  >;

  const foregroundColor = variant === "light" ? colorObj.alto : colorObj.white;
  const backgroundColor = colorObj.shark;
  const ansi7Color = variant === "light" ? colorObj.gray : "#ffffff";
  const ansi15Color = variant === "light" ? "#ffffff" : colorObj.white;

  const colorMap = new Map([
    [[backgroundColor], ["Background Color"]],
    [[foregroundColor], ["Foreground Color"]],
    [[ansi15Color], ["Ansi 15 Color"]],
    [[colorObj.gray], ["Ansi 8 Color"]],
    [[colorObj.frenchRose], ["Ansi 1 Color", "Ansi 9 Color"]],
    [[colorObj.turquoise], ["Ansi 2 Color", "Ansi 10 Color"]],
    [[colorObj.saffronMango], ["Ansi 3 Color", "Ansi 11 Color"]],
    [[colorObj.cornflowerBlue], ["Ansi 4 Color", "Ansi 12 Color"]],
    [[colorObj.heliotrope], ["Ansi 5 Color", "Ansi 13 Color"]],
    [[colorObj.dodgeBlue], ["Ansi 6 Color", "Ansi 14 Color"]],
    [[ansi7Color], ["Ansi 7 Color"]],
    [["#000000"], ["Ansi 0 Color"]],
  ]);

  colorMap.forEach((colorKeys, color) => {
    const { r, g, b } = convertToRGB(color[0]);
    colorKeys.forEach((colorKey) => {
      const colorDict = root.ele("key", colorKey).up().ele("dict");
      colorDict.ele("key", "Color Space").up().ele("string", "sRGB").up();
      colorDict.ele("key", "Red Component").up().ele("real", r).up();
      colorDict.ele("key", "Green Component").up().ele("real", g).up();
      colorDict.ele("key", "Blue Component").up().ele("real", b).up();
    });
  });

  return root.end({ pretty: true });
}
async function ensureDirectoryExists(filePath: string) {
  const dir = dirname(filePath);
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function writeXMLFile(path: string, data: string): Promise<void> {
  return fs.writeFile(resolve(path), data);
}

async function generateIterm2Themes() {
  const themes = {
    "OneHunter-Classic": Theme.init(defaultConfig),
    "OneHunter-Material": Theme.init(materialConfig),
    "OneHunter-Vercel": Theme.init(vercelConfig),
    "OneHunter-Light": Theme.init(lightConfig),
  };

  const themeVariantNames = {
    "OneHunter-Classic": "classic",
    "OneHunter-Material": "material",
    "OneHunter-Vercel": "vercel",
    "OneHunter-Light": "light",
  };

  for (const [name, theme] of Object.entries(themes)) {
    const filePath = `./themes/iterm2/${name}.itermcolors.xml`;
    await ensureDirectoryExists(filePath);
    const xml = createIterm2Theme(themeVariantNames[name], theme);
    await writeXMLFile(filePath, xml);
  }
}

generateIterm2Themes();
