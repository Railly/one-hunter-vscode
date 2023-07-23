import { ThemeConfiguration, TokenColor } from "./types";
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

  static init(config: ThemeConfiguration): Theme {
    return new Theme(config);
  }
}
