const options = {}

options.Quit = {
    label: "Quit"
    ,description: "⌘Q"
    ,command: 'workbench.action.quit'
}

options.CloseWindow = {
    label: "Close Window"
    ,description: "⇧⌘W, ⌘W"
    ,command: 'workbench.action.closeWindow'
}

options.Cancel = {
    label: "Cancel"
    ,description: "ESC"
    ,command: "search.action.focusActiveEditor"
}

module.exports = options