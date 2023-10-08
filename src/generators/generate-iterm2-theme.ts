import { promises as fs } from "fs";
import xmlbuilder from "xmlbuilder";
import { dirname, resolve } from "path";
import themeData, { OneHunterColors } from "../themes";
import { Theme } from "../themes/index";
import { THEME_NAMES, THEME_VARIANTS, ThemeVariant } from "../themes/variants";

function convertToRGB(color: string): { r: number; g: number; b: number } {
  const hex = color.substring(1);
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;
  return { r, g, b };
}

function createIterm2Theme(variant: ThemeVariant, theme: Theme) {
  const root = xmlbuilder.create("plist").att("version", "1.0").ele("dict");
  const colorObj = themeData.textColors[variant] as Record<
    keyof typeof OneHunterColors,
    string
  >;

  const foregroundColor =
    variant === "light" ? colorObj.grayLight : colorObj.white;
  const backgroundColor = colorObj.grayDarkBase;
  const ansi7Color = variant === "light" ? colorObj.gray : "#ffffff";
  const ansi15Color = variant === "light" ? "#ffffff" : colorObj.white;

  const colorMap = new Map([
    [[backgroundColor], ["Background Color"]],
    [[foregroundColor], ["Foreground Color"]],
    [[ansi15Color], ["Ansi 15 Color"]],
    [[colorObj.gray], ["Ansi 8 Color"]],
    [[colorObj.pinkBase], ["Ansi 1 Color", "Ansi 9 Color"]],
    [[colorObj.cyanBase], ["Ansi 2 Color", "Ansi 10 Color"]],
    [[colorObj.yellowBase], ["Ansi 3 Color", "Ansi 11 Color"]],
    [[colorObj.blueBase], ["Ansi 4 Color", "Ansi 12 Color"]],
    [[colorObj.purpleBase], ["Ansi 5 Color", "Ansi 13 Color"]],
    [[colorObj.blueDark], ["Ansi 6 Color", "Ansi 14 Color"]],
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
  THEME_VARIANTS.forEach((variant) => {
    THEME_NAMES.forEach((themeName) => {
      const theme = Theme.init({
        editorTheme: "one-hunter",
        variant,
      });
      const filePath = `./themes/iterm2/${themeName[variant]}.itermcolors.xml`;
      ensureDirectoryExists(filePath);
      const xml = createIterm2Theme(variant, theme);
      writeXMLFile(filePath, xml);
    });
  });
}

generateIterm2Themes();
