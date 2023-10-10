import { ThemeConfiguration } from "./types";
import { configFactory } from "./utils";

export class Theme {
  name = "One Hunter Theme";
  type = "dark";
  colors;
  tokenColors;

  constructor(configuration: ThemeConfiguration) {
    const themeTokens = configFactory(configuration);
    this.colors = themeTokens.colors;
    this.tokenColors = themeTokens.tokenColors;
  }

  static init(config: ThemeConfiguration) {
    return new Theme(config);
  }
}
