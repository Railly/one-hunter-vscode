import {
  classicVariant,
  lightVariant,
  materialVariant,
  vercelVariant,
  flexokiDarkVariant,
  flexokiLightVariant,
} from "./text-colors";
import { oneHunterEditorTheme } from "./editor-themes/one-hunter";
import { oneHunterTokenColors } from "./token-colors/one-hunter";
import { flexokiEditorTheme } from "./editor-themes/flexoki";
import { originalFlexokiTokenColors } from "./token-colors/original-flexoki";
import { oneHunterFlexokiTokenColors } from "./token-colors/one-hunter-flexoki";

export default {
  textColors: {
    classic: classicVariant,
    material: materialVariant,
    vercel: vercelVariant,
    light: lightVariant,
    "original-flexoki-dark": flexokiDarkVariant,
    "original-flexoki-light": flexokiLightVariant,
    "one-hunter-flexoki-dark": flexokiDarkVariant,
    "one-hunter-flexoki-light": flexokiLightVariant,
  },
  editorThemes: {
    "one-hunter": oneHunterEditorTheme,
    "original-flexoki": flexokiEditorTheme,
    "one-hunter-flexoki": flexokiEditorTheme,
  },
  tokenColors: {
    "one-hunter": oneHunterTokenColors,
    "original-flexoki": originalFlexokiTokenColors,
    "one-hunter-flexoki": oneHunterFlexokiTokenColors,
  },
};
