# Contributing Guidelines

If you want to contribute to this project, you can do so by forking the repository and submitting a pull request.

Feel free to open an issue if you find a bug or have a suggestion, but if you want to add support for a new language, please make sure to add a screenshot of the theme in action.

Also, if you like this theme, please consider giving it a ⭐️

## Suggested Workflow

1. Open an issue on GitHub with a description of the problem and any relevant screenshots or expected behavior.
2. Fork the repository and create a new branch for your changes, be as much descriptive as possible (e.g. "fix-punctuation-css").
3. Make the necessary changes and commit them with a message referencing the issue number (e.g. "fix: #12").
4. Push your changes to your forked repository.
5. Create a pull request with a brief explanation of the changes and screenshots of the actual behavior.
6. Wait for feedback and incorporate any requested changes.
7. Thank you for your contributions!

## How themes are built

The JSON files under `themes/` and the iTerm2 files under `themes/iterm2/`
are generated output. Never hand-edit them. Change the source in
`src/variants/` and regenerate.

Source layout:

- `src/variants/constants.ts`, `src/variants/data.ts`, `src/variants/types.ts` — shared token and color data
- `src/variants/editor-themes/` — editor chrome colors per variant
- `src/variants/text-colors/` — syntax token colors per variant
- `src/variants/token-colors/` — combined token-color definitions

Generator entry points:

- `src/generators/generate-theme.ts` — writes the VSCode theme JSON files
- `src/generators/generate-iterm2-theme.ts` — writes the iTerm2 XML files

Regenerate everything locally:

```bash
npm install
npm run generate
```

Then verify the generated files changed only where your source edit intended
them to change. If a generated file needs a different shape, that is a
generator change, not a hand edit to the output.
