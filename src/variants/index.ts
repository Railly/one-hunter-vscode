import {
  classicVariant,
  lightVariant,
  materialVariant,
  vercelVariant,
} from "./text-color";
import { oneHunterEditorTheme } from "./editor-theme/one-hunter";
import { defaultTokenColors } from "./token-colors";

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
