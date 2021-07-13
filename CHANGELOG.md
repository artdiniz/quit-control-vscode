# Change Log
All notable changes to the "Quit Control for VSCode" extension will be documented in this file.
The format is based on [Keep a Changelog](http://keepachangelog.com/).


## UNRELEASED - yyyy-mm-dd
### Added
- Linux and Windows: Preventing `Alt+F4` from closing the window;
- Linux and Windows: Optionally enabling `Ctrl+F4` to close empty window (window without open tabs);
- Linux and Windows: New configuration `quitControl.macLikeMode`, defaults to `true`. Enables macOS-like behaviors: 
    - `Ctrl+Q` to quit VSCode;
    - `Ctrl+W` and `Ctrl+F4` to close empty window (window without open tabs);

## 3.2.1 - 2021-05-26
### Fixed
- Keybinding labels were wrong on non empty window

## 3.2.0 - 2021-05-26
### Changed
- When there are no windows left you can use `⌘Q` to quit vscode. From [issue #24](https://github.com/artdiniz/quit-control-vscode/issues/24)
- Namespace of commands and contexts changed from `quitPlugin` to `quitControl`
- Following [VSCode recommendation](https://code.visualstudio.com/api/references/activation-events#onStartupFinished) of activating extension after `onStartupFinished` and `onCommand:${commandName}`

## 3.1.3 - 2019-05-19
### Fixed
- Close window prompt showing up when closing an extension page. Fully fixed 2+ years old [issue #3](https://github.com/artdiniz/quit-control-vscode/issues/3)
- Proper keyboard symbols in prompt description for windows and linux

## 3.1.2 - 2019-05-18
### Fixed
- Keybindings not working on linux distros

## 3.1.1 - 2019-04-27
### Fixed
- Refactored typescript code that was probably causing import errors of keybinding handlers
  
## 3.1.0 - 2019-03-16
### Fixed
- Close window pompt sometimes showing up when tere were tabs open
- Close window prompt showing up when closing an extension page. It's a partial fix as described in this [comment on issue #3](https://github.com/artdiniz/quit-control-vscode/issues/3#issuecomment-473577397)

## 3.0.0 - 2018-08-01
### Changed
– Close Window command won't close all open editors no more. From now on, if you want to close all editors, use default keyboard shortcuts: `⌘K ⌘W` (on mac) or `Ctrl+K Ctrl+W` (on windows).

## 2.0.4 - 2018-01-19
### Fixed
- Close Window prompt always showing up when closing editor with `⌘W`.

## 2.0.3 - 2017-08-16
### Fixed
- Sometimes slow response time after pressing keystrokes
- Fixed issue where the Close Window prompt didn't show up reliably.

### Changed
- Text description now clearly says to press Enter to confirm

## 2.0.2 - 2017-02-03
### Fixed
- Closing welcome screen doesn't make quit prompt to appear anymore.
- Partially fixed bug where closing non-text tabs would always cause the quit prompt to appear.

## 2.0.1 - 2016-12-30
### Fixed
- Changelog format error

## 2.0.0 - 2016-12-30
### Fixed
- Fixed bug where non-text files couldn't be closed with `⌘W` or `CTRL+W`.
- Now this extension knows how to make proper changelogs =).
- Fixes on `README` file.

### Changed
- Updated "Features" section on `README` file.

### Removed
- This plugin doesn't do anithyng with `Alt+F4` on Windows platform no more. Default system behavior of `Alt+F4` is back.

## 1.0.3 - 2016-12-29
### Changed
- Better description and details on menu items.
