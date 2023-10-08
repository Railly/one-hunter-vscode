import { workspace } from "vscode";
import { Theme } from "./themes/index";

export const generateTheme = {
  default: async function () {
    return Theme.init({
      editorTheme: "one-hunter",
      variant: "default",
    });
  },
};
