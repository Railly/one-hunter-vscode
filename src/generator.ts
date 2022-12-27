import { workspace } from "vscode";
import * as defaultSettings from "./Theme/config/defaultConfig.json";
import { Theme } from "./Theme/index";

export const generateTheme = {
  default: async function () {
    return await Theme.init(defaultSettings);
  },
};
