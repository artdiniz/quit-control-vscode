// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode')

function activate(context) {
    const quitCommand = vscode.commands.registerCommand(
        'quitPlugin.keybindings.quit'
        , require('./commandHandlers/quit')
    )

    const closeAllCommand = vscode.commands.registerCommand(
        'quitPlugin.keybindings.closeWindow'
        , require('./commandHandlers/closeAll')
    )
    const closeCurrentCommand = vscode.commands.registerCommand(
        'quitPlugin.keybindings.closeEditor'
        , require('./commandHandlers/closeCurrent')
    )

    context.subscriptions.push(closeAllCommand)
    context.subscriptions.push(closeCurrentCommand)
    context.subscriptions.push(quitCommand)
}

exports.activate = activate

function deactivate() {}
exports.deactivate = deactivate
