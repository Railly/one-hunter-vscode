import { OneHunterColors } from "../themes";

export interface TokenColor {
  name?: string;
  scope: string | string[];
  settings: {
    foreground?: string;
    fontStyle?: string;
  };
}

export interface ThemeConfiguration {
  editorTheme: string;
  variant: string;
}

export interface ThemeEntity {
  name: string;
  variant: string;
  type: string;
  colors: Record<string, string>;
  tokenColors: any;
}
