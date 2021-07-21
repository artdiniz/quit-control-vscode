# Default Keybindings per OS

## linux

`Ctrl+Q` - Exit
```json
    { "command": "workbench.action.quit" }
```

`Alt+F4` - Close Window
```json
    { "command": "workbench.action.closeWindow" }
```

`Ctrl+Shift+W` - Close Window
```json
    { "command": "workbench.action.closeWindow" }
```

`Ctrl+F4` - __NOTHING__

`Ctrl+W` - Close Editor (don't close empty window)
```json
    { "command": "workbench.action.closeActiveEditor" }
    { "command": "workbench.action.closeGroup", "when": "activeEditorGroupEmpty && multipleEditorGroups" }
    { "command": "workbench.action.terminal.killEditor", "when": "terminalFocus && terminalProcessSupported && resourceScheme == 'vscode-terminal'" }
```
## windows

`Ctrl+Q` - __NOTHING__ (Quick Open View)

`Alt+F4` - Close Window
```json
    { "command": "workbench.action.closeWindow" }
```

`Ctrl+Shift+W` - Close Window
```json
    { "command": "workbench.action.closeWindow" }
```

`Ctrl+F4` - Close Editor (don't close empty window)
```json
    { "command": "workbench.action.closeActiveEditor" }
    { "command": "workbench.action.closeGroup", "when": "activeEditorGroupEmpty && multipleEditorGroups" }
```

`Ctrl+W` - Close Editor (don't close empty window)
```json
    { "command": "workbench.action.closeActiveEditor" },
    { "command": "workbench.action.closeGroup", "when": "activeEditorGroupEmpty && multipleEditorGroups" }
    { "command": "workbench.action.terminal.killEditor", "when": "terminalFocus && terminalProcessSupported && resourceScheme == 'vscode-terminal'" }
```

## macOS

`Ctrl+Q` - __NOTHING__ (Quick Open View)

`Alt+F4` - __NOTHING__

`Shift+Ctrl+W` - __NOTHING__

`Ctrl+F4` - __NOTHING__

`Ctrl+W` - __NOTHING__ (Switch Window)

`⌘Q` - Quit Visual Studio Code
```json
    { "command": "workbench.action.quit" }
```

`⌘W` - Close Editor (closes empty window)
```json
    { "command": "workbench.action.closeActiveEditor" }
    { "command": "workbench.action.closeGroup", "when": "activeEditorGroupEmpty && multipleEditorGroups" }
    { "command": "workbench.action.closeWindow", "when": "!editorIsOpen && !multipleEditorGroups" }
```

`⇧⌘W` - Close Window
```json
    { "command": "workbench.action.closeWindow" }
```