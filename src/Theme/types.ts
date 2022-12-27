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
