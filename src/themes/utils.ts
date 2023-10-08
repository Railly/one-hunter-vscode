import { ThemeConfiguration, TokenColor } from "./types";
import themeData from "../variants";

export function configFactory(configuration: ThemeConfiguration) {
  const rawEditorColors: (typeof themeData.editorThemes)["one-hunter"] =
    JSON.parse(
      JSON.stringify(themeData.editorThemes[configuration.editorTheme])
    );
  const rawTokenColors: TokenColor[] = JSON.parse(
    JSON.stringify(themeData.tokenColors.default)
  );

  const colorObj = themeData.textColors[configuration.variant];

  const mappedTokenColors = rawTokenColors.map((token) => {
    if (token.settings.foreground) {
      token.settings.foreground = colorObj[token.settings.foreground];
    }
    if (token.settings) {
      token.settings.fontStyle = colorObj[token.settings.fontStyle];
    }
    return token;
  });

  const mappedEditorColors = Object.keys(rawEditorColors).reduce((acc, key) => {
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

  return {
    colors: mappedEditorColors,
    tokenColors: mappedTokenColors,
  };
}
