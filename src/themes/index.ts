import { ThemeConfiguration } from "./types";
import { configFactory } from "./utils";

export class Theme {
  name = "One Hunter Theme";
  type;
  // VS Code ignores a theme's semantic token colors unless this is on, which
  // is why semantic scopes never took effect.
  semanticHighlighting = true;
  colors;
  tokenColors;

  constructor(configuration: ThemeConfiguration) {
    const themeTokens = configFactory(configuration);
    this.type = configuration.variant.includes("light") ? "light" : "dark";
    this.colors = themeTokens.colors;
    this.tokenColors = themeTokens.tokenColors;
  }

  static init(config: ThemeConfiguration) {
    return new Theme(config);
  }
}
