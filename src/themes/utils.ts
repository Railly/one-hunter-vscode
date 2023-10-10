import { ThemeConfiguration, TokenColor } from "./types";
import themeData from "../variants";

export function configFactory(configuration: ThemeConfiguration) {
  let colors: (typeof themeData.editorThemes)[
    | "original-flexoki"
    | "one-hunter"];
  let tokenColors: TokenColor[];
  console.log({
    configuration,
  });
  switch (configuration.editorTheme) {
    case "one-hunter":
      const rawEditorColors: (typeof themeData.editorThemes)["one-hunter"] =
        JSON.parse(
          JSON.stringify(themeData.editorThemes[configuration.editorTheme])
        );
      const rawTokenColors: TokenColor[] = JSON.parse(
        JSON.stringify(themeData.tokenColors["one-hunter"])
      );

      const colorObj = themeData.textColors[configuration.variant];

      tokenColors = rawTokenColors.map((token) => {
        if (token.settings.foreground) {
          token.settings.foreground = colorObj[token.settings.foreground];
        }
        if (token.settings) {
          token.settings.fontStyle = colorObj[token.settings.fontStyle];
        }
        return token;
      });

      colors = Object.keys(rawEditorColors).reduce((acc, key) => {
        acc[key] = rawEditorColors[key].replace(
          rawEditorColors[key] as string,
          (match: string) => {
            return match in colorObj
              ? colorObj[rawEditorColors[key] as string]
              : colorObj[match.slice(0, -2) as keyof typeof colorObj] +
                  match.slice(-2);
          }
        );
        return acc;
      }, {} as typeof rawEditorColors);

      break;

    case "original-flexoki":
    case "one-hunter-flexoki":
      const rawEditorFlexokiColors: (typeof themeData.editorThemes)["original-flexoki"] =
        JSON.parse(
          JSON.stringify(themeData.editorThemes[configuration.editorTheme])
        );
      const rawTokenFlexokiColors: TokenColor[] = JSON.parse(
        JSON.stringify(themeData.tokenColors[configuration.editorTheme])
      );

      const flexokiColorObj = themeData.textColors[configuration.variant];

      tokenColors = rawTokenFlexokiColors.map((token) => {
        if (token.settings.foreground) {
          token.settings.foreground =
            flexokiColorObj[token.settings.foreground];
        }
        return token;
      });
      colors = Object.entries(rawEditorFlexokiColors).reduce(
        (acc, [key, value]) => {
          acc[key] = value.replace(
            value as string,
            (match: string) => flexokiColorObj[match]
          );
          return acc;
        },
        {} as typeof rawEditorFlexokiColors
      );
      break;

    default:
      throw new Error("Invalid editor theme");
  }

  return {
    colors: colors,
    tokenColors: tokenColors,
  };
}
