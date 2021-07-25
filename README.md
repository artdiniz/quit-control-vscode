# Quit Control

Do you hate mistyping `⌘Q` and shutdown VSCode with all your unsaved and beloved work? This extension is for you!

Do you hate the fact that `⌘W` or `CTRL+W` closes VSCode if there are no open files? This extension is for you!

This extension will make all "quitish" keyboard shortcuts prompt you if you really want to close everything if they were going to do so.

## Features

1. If at any moment you hit `⌘Q` (on mac) or `Ctrl+Q` (on other platforms) we will prompt you if you really want to quit:
    
    * You can press `Esc` to dismiss and continue your work:
        
        ![Quit Prevented](images/quitPrevented.gif)

    * You can press `Enter` to confirm and quit VSCode:
        
        ![Quit](images/quit.gif)

2. If there is an open file, `⌘W` (on mac) or `Ctrl+W` (on other platforms) will close it as usual. But if there is no open file, instead of closing VSCode window we will prompt you first:

    ![Close Tab](images/closeTab.gif)

3. If you hit `⇧⌘W` (on mac) or `⇧+Ctrl+W` (on other platforms), instead of closing VSCode window, we will prompt you first:

    ![Close Window](images/closeWindow.gif)

## Release Notes vUNRELEASED - yyyy-mm-dd
### Added
- New configuration `quitControl.closeTabShouldTryToCloseEmptyWindow`, defaults to `true`. Toggle macOS-like behavior of closing an empty window with the same shortcut of closing a tab: `Cmd+W` (macOS); `Ctrl+W` (Linux and Windows); `Ctrl+F4` (Windows).
#### Linux and Windows 
- Preventing `Alt+F4` from closing the window and prompting you instead. Consistent only on Windows for now, as VScode for Linux distros doesn't always support keybindings on `Alt+F4`.
#### Windows
- New configuration `quitControl.enableQuitKeybindingOnWindows`, defaults to `true`. Enables `Ctrl+Q` to quit VSCode on Windows.
### Fixed
- Enabling extension to work on Remote Containers without the need to install it again. From [PR#29](https://github.com/artdiniz/quit-control-vscode/pull/29).

## Source

[GitHub](https://github.com/artdiniz/quitControlVSCode)

## License

[MIT](https://raw.githubusercontent.com/artdiniz/quitControlVSCode/master/LICENSE)

## Credits

This [extension's icon](https://github.com/artdiniz/quitControlVSCode/blob/master/images/icon.png) was created by Hrag Chanchanian from the Noun Project and its colors where changed by me for use in this extension.