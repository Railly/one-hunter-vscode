import { OneHunterColorsObject } from "../data";

export const oneHunterEditorTheme = {
  "editor.background": OneHunterColorsObject.grayDarkBase,
  "editor.foreground": OneHunterColorsObject.grayLight,
  "editor.hoverHighlightBackground": `${OneHunterColorsObject.pinkBase}22`,
  "editor.lineHighlightBackground": `${OneHunterColorsObject.grayDarkBase}22`,
  "editor.selectionBackground": `${OneHunterColorsObject.blueBase}55`,
  "editor.wordHighlightBackground": `${OneHunterColorsObject.blueBase}22`,
  "editor.wordHighlightStrongBackground": `${OneHunterColorsObject.blueBase}22`,
  "editorBracketMatch.background": `${OneHunterColorsObject.pinkBase}44`,
  "editorBracketMatch.border": OneHunterColorsObject.blueBase,
  "editorCursor.foreground": OneHunterColorsObject.grayLight,
  "editorGutter.addedBackground": OneHunterColorsObject.cyanBase,
  "editorGutter.background": OneHunterColorsObject.grayDarkBase,
  "editorGutter.deletedBackground": OneHunterColorsObject.redDark,
  "editorGutter.modifiedBackground": OneHunterColorsObject.yellowBase,
  // "editorIndentGuide.background": "#2c3138", // TO-CHECK
  "editorIndentGuide.background": `${OneHunterColorsObject.grayDarkBase}88`,
  "editorInlayHint.background": OneHunterColorsObject.blackBlue,
  // "editorInlayHint.foreground": "#d0cece", // TO-CHECK
  "editorInlayHint.foreground": OneHunterColorsObject.grayLight,
  "editorLineNumber.foreground": OneHunterColorsObject.grayDarkOnActive,
  "editorLink.activeForeground": OneHunterColorsObject.pinkBase,
  "editorOverviewRuler.addedForeground": OneHunterColorsObject.cyanBase,
  "editorOverviewRuler.deletedForeground": OneHunterColorsObject.redDark,
  "editorOverviewRuler.errorForeground": OneHunterColorsObject.redDark,
  "editorOverviewRuler.findMatchForeground": `${OneHunterColorsObject.blueBase}55`,
  "editorOverviewRuler.infoForeground": OneHunterColorsObject.purpleBase,
  "editorOverviewRuler.modifiedForeground": OneHunterColorsObject.yellowBase,
  "editorOverviewRuler.warningForeground": OneHunterColorsObject.yellowBase,
  // "editorRuler.foreground": "#2c3138", // TO-CHECK
  "editorRuler.foreground": OneHunterColorsObject.blackBlue,
  "editorSuggestWidget.foreground": OneHunterColorsObject.grayLight,
  "editorSuggestWidget.highlightForeground": OneHunterColorsObject.pinkBase,
  "editorSuggestWidget.selectedBackground":
    OneHunterColorsObject.grayDarkOnActive,
  // "editorWhitespace.foreground": "#2c3138", // TO-CHECK
  "editorWhitespace.foreground": OneHunterColorsObject.blackBlue,
  "editorWidget.background": OneHunterColorsObject.blackBlue,
  "editorWidget.border": OneHunterColorsObject.grayDarkOnActive,

  /* Sidebar */
  "sideBar.background": OneHunterColorsObject.blackDark,
  "sideBar.foreground": OneHunterColorsObject.grayLight,
  "sideBarSectionHeader.background": OneHunterColorsObject.blackBase,
  "sideBarSectionHeader.foreground": OneHunterColorsObject.grayLight,

  /* Files list */
  "badge.background": OneHunterColorsObject.pinkBase,
  "badge.foreground": OneHunterColorsObject.white,
  "list.activeSelectionBackground": `${OneHunterColorsObject.pinkBase}55`,
  "list.activeSelectionForeground": OneHunterColorsObject.grayLight,
  "list.focusBackground": OneHunterColorsObject.grayDarkOnFocus,
  "list.hoverBackground": OneHunterColorsObject.grayDarkOnHover,
  "list.inactiveSelectionBackground": OneHunterColorsObject.grayDarkBase,

  /* Title bar */
  "titleBar.activeBackground": OneHunterColorsObject.blackBase,

  /* Activity bar */
  "activityBar.background": OneHunterColorsObject.blackBase,
  "activityBar.foreground": OneHunterColorsObject.grayLight,
  "activityBarBadge.background": OneHunterColorsObject.pinkBase,
  "activityBarBadge.foreground": OneHunterColorsObject.white,

  /* Tabs */
  "editorGroupHeader.tabsBackground": OneHunterColorsObject.grayDarkOnHover,
  // "tab.inactiveBackground": "#22272d", // TO-CHECK
  "tab.inactiveBackground": `${OneHunterColorsObject.grayDarkOnFocus}44`,
  // "tab.inactiveForeground": "#728394", // TO-CHECK
  "tab.inactiveForeground": `${OneHunterColorsObject.grayLight}88`,
  "tab.activeModifiedBorder": OneHunterColorsObject.yellowBase,
  "tab.inactiveModifiedBorder": OneHunterColorsObject.blueBase,
  "tab.unfocusedActiveModifiedBorder": `${OneHunterColorsObject.yellowBase}88`,
  "tab.unfocusedInactiveModifiedBorder": `${OneHunterColorsObject.blueBase}88`,

  /* Terminal */
  // "terminal.ansiBlack": "#242a2f", // TO-CHECK
  "terminal.ansiBlack": OneHunterColorsObject.blackBlue,
  "terminal.ansiBlue": OneHunterColorsObject.blueBase,
  "terminal.ansiBrightBlack": OneHunterColorsObject.grayDarkOnActive,
  "terminal.ansiBrightBlue": OneHunterColorsObject.blueOnActive,
  "terminal.ansiBrightCyan": OneHunterColorsObject.purpleOnActive,
  // "terminal.ansiBrightGreen": "#f4adb4", // TO-CHECK
  "terminal.ansiBrightGreen": OneHunterColorsObject.cyanOnActive,
  "terminal.ansiBrightMagenta": OneHunterColorsObject.pinkOnActive,
  // "terminal.ansiBrightRed": "#f03e5f",
  "terminal.ansiBrightRed": OneHunterColorsObject.redDark,
  "terminal.ansiBrightWhite": OneHunterColorsObject.grayLight,
  // "terminal.ansiBrightYellow": "#a7c7ed",// TO-CHECK
  "terminal.ansiBrightYellow": OneHunterColorsObject.blueOnActive,
  // "terminal.ansiCyan": "#9b78db",// TO-CHECK
  "terminal.ansiCyan": OneHunterColorsObject.purpleBase,
  // "terminal.ansiGreen": "#f4457d", // TO-CHECK
  "terminal.ansiGreen": OneHunterColorsObject.cyanBase,
  "terminal.ansiMagenta": OneHunterColorsObject.pinkBase,
  // "terminal.ansiRed": "#ba0e2e", // TO-CHECK
  "terminal.ansiRed": OneHunterColorsObject.redDark,
  "terminal.ansiWhite": OneHunterColorsObject.grayLight,
  "terminal.ansiYellow": OneHunterColorsObject.blueBase,
  "terminal.background": OneHunterColorsObject.grayDarkBase,
  "terminal.foreground": OneHunterColorsObject.grayLight,

  /* Git */
  // "gitDecoration.conflictingResourceForeground": "#9d37fc", // TO-CHECK
  "gitDecoration.conflictingResourceForeground":
    OneHunterColorsObject.purpleBase,
  // "gitDecoration.deletedResourceForeground": "#e61f44", // TO-CHECK
  "gitDecoration.deletedResourceForeground": OneHunterColorsObject.redDark,
  // "gitDecoration.ignoredResourceForeground": "#5b6978", // TO-CHECK
  "gitDecoration.ignoredResourceForeground":
    OneHunterColorsObject.grayDarkOnActive,
  "gitDecoration.modifiedResourceForeground": OneHunterColorsObject.yellowBase,
  "gitDecoration.untrackedResourceForeground": OneHunterColorsObject.cyanBase,

  /* Status bar */
  "statusBar.background": OneHunterColorsObject.blackBase,
  "statusBar.foreground": OneHunterColorsObject.grayLight,
  "statusBar.noFolderBackground": OneHunterColorsObject.blackBase,

  /* Scrollbar */
  // "scrollbar.shadow": "#030304", // TO-CHECK
  "scrollbar.shadow": OneHunterColorsObject.blackBase,
  "scrollbarSlider.activeBackground": `${OneHunterColorsObject.pinkBase}aa`,
  "scrollbarSlider.background": `${OneHunterColorsObject.grayDarkOnActive}aa`,
  "scrollbarSlider.hoverBackground": `${OneHunterColorsObject.pinkBase}55`,

  /* Misc */
  "button.background": OneHunterColorsObject.blueBase,
  "button.foreground": OneHunterColorsObject.grayLight,
  "dropdown.background": OneHunterColorsObject.blackBase,
  "dropdown.border": OneHunterColorsObject.blackBase,
  "dropdown.foreground": OneHunterColorsObject.grayLight,
  "extensionButton.prominentBackground": OneHunterColorsObject.pinkBase,
  "extensionButton.prominentForeground": OneHunterColorsObject.grayLight,
  "extensionButton.prominentHoverBackground":
    OneHunterColorsObject.pinkOnActive,
  // focusBorder: "#f4457d",
  focusBorder: OneHunterColorsObject.pinkBase,
  foreground: OneHunterColorsObject.grayLight,
  // "input.background": "#0e1012", // TO-CHECK
  "input.background": OneHunterColorsObject.blackBase,
  // "input.border": "#3a434d", // TO-CHECK
  "input.border": OneHunterColorsObject.grayDarkOnActive,
  "input.foreground": OneHunterColorsObject.grayLight,
  // "input.placeholderForeground": "#414b55", // TO-CHECK
  "input.placeholderForeground": OneHunterColorsObject.grayDarkOnActive,
  "inputOption.activeBorder": OneHunterColorsObject.blueBase,
  // "panel.background": "#23282d", // TO-CHECK
  "panel.background": OneHunterColorsObject.grayDarkBase,
  "panel.border": OneHunterColorsObject.grayDarkOnActive,
  "panelTitle.activeBorder": OneHunterColorsObject.pinkBase,
  // "panelTitle.inactiveForeground": "#667687", // TO-CHECK
  "panelTitle.inactiveForeground": OneHunterColorsObject.grayDarkOnActive,
  "peekView.border": OneHunterColorsObject.pinkBase,
  "peekViewEditor.background": OneHunterColorsObject.blackBase,
  "peekViewEditor.matchHighlightBackground": `${OneHunterColorsObject.blueBase}55`,
  "peekViewEditorGutter.background": OneHunterColorsObject.blackBase,
  // "peekViewResult.background": "#242a2f",
  "peekViewResult.background": OneHunterColorsObject.blackBlue,
  "peekViewResult.fileForeground": OneHunterColorsObject.grayLight,
  "peekViewResult.lineForeground": OneHunterColorsObject.grayMedium,
  "peekViewResult.matchHighlightBackground": `${OneHunterColorsObject.blueBase}55`,
  "peekViewResult.selectionBackground": OneHunterColorsObject.grayDarkOnHover,
  "peekViewResult.selectionForeground": OneHunterColorsObject.grayLight,
  "peekViewTitle.background": OneHunterColorsObject.blackBase,
  // "peekViewTitleDescription.foreground": "#f7f7f7", // TO-CHECK
  "peekViewTitleDescription.foreground": OneHunterColorsObject.grayLight,
  // "peekViewTitleLabel.foreground": "#e0e0e0",// TO-CHECK
  "peekViewTitleLabel.foreground": OneHunterColorsObject.grayMedium,
  "progressBar.background": OneHunterColorsObject.blueBase,
};
