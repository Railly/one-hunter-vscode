# Change Log

All notable changes to the One Hunter theme are documented here, following [Keep a Changelog](http://keepachangelog.com/).

## [1.4.1] - 2026-08-07

### Fixed

- Local variables were nearly invisible in Vercel 2024 Dark: `variable.other.local` was `#171717` on a dark background. Fixed by [@peguimasid](https://github.com/peguimasid) in [#68](https://github.com/Railly/one-hunter-vscode/pull/68), merged in November 2024 but never published until now.
- The theme generator reported success even when it failed. Writes inside `forEach` were never awaited and the entry point had no error handler, so a failed write exited `0`. Both generators now await every write and exit `1` on error.
- `npm run generate` crashed on the iTerm2 step because `xmlbuilder` was never declared as a dependency. No iTerm2 theme had been produced since the script was added.
- `vsce` and `ovsx` were called by the publish scripts but were not declared as dependencies, so publishing only worked if they happened to be installed globally.
- The published package was 7 MB because `.vscodeignore` did not exclude `screenshots/`, `src/`, `demos/`, or `node_modules/`. It is now 57 KB. The README renders the same, since every image it references is a remote URL.

### Added

- Kotlin and Ruby demo files, by [@born-in-autumn](https://github.com/born-in-autumn) ([#77](https://github.com/Railly/one-hunter-vscode/pull/77))
- Open VSX downloads badge in the README, by [@born-in-autumn](https://github.com/born-in-autumn) ([#76](https://github.com/Railly/one-hunter-vscode/pull/76))
- A "How themes are built" section in CONTRIBUTING, by [@slegarraga](https://github.com/slegarraga) ([#75](https://github.com/Railly/one-hunter-vscode/pull/75))

## [1.4.0] - 2024-05-16

### Added

- Vercel 2024 variants, dark and light ([#64](https://github.com/Railly/one-hunter-vscode/pull/64))

### Fixed

- MDX support for the Flexoki variants and Material ([#60](https://github.com/Railly/one-hunter-vscode/pull/60))

## [1.3.0] - 2023-11-04

### Changed

- Flexoki variants and Material are now generated with [tinte](https://tinte.dev) ([#57](https://github.com/Railly/one-hunter-vscode/pull/57))
- Flexoki punctuation moved to `tx-2`
- Markdown token colors updated

## [1.2.0] - 2023-10-09

### Added

- One Hunter Flexoki variant and the original Flexoki theme ([#53](https://github.com/Railly/one-hunter-vscode/pull/53))
- Astro support ([#51](https://github.com/Railly/one-hunter-vscode/pull/51))
- iTerm2 color scheme generation ([#49](https://github.com/Railly/one-hunter-vscode/pull/49))
- Go support ([#46](https://github.com/Railly/one-hunter-vscode/pull/46))
- Swift support, by [@lucasdoell](https://github.com/lucasdoell) ([#44](https://github.com/Railly/one-hunter-vscode/pull/44))
- MDX, Python, and XML support
- Standardized Java imports and identifier colors

### Fixed

- Vue 2 and Vue tag colors, by [@claviering](https://github.com/claviering) ([#30](https://github.com/Railly/one-hunter-vscode/pull/30), [#39](https://github.com/Railly/one-hunter-vscode/pull/39))

## [1.0.0] - 2023-01-02

### Added

- Initial release with the Classic, Material, Vercel, and Light variants
