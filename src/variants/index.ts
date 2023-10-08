import {
  classicVariant,
  lightVariant,
  materialVariant,
  vercelVariant,
} from "./text-colors";
import { oneHunterEditorTheme } from "./editor-themes/one-hunter";
import { defaultTokenColors } from "./token-colors/default";

export default {
  textColors: {
    classic: classicVariant,
    material: materialVariant,
    vercel: vercelVariant,
    light: lightVariant,
  },
  editorThemes: {
    "one-hunter": oneHunterEditorTheme,
  },
  tokenColors: {
    default: defaultTokenColors,
  },
};
