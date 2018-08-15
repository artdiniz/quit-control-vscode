// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'

async function activate(context: vscode.ExtensionContext) {

    const {quitCommandHandler, closeAllCommandHandler, closeCurrentCommandHandler} = await import('./commandHandlers')

    const quitCommand = vscode.commands.registerCommand(
        'quitPlugin.keybindings.quit'
        , quitCommandHandler
    )

    const closeAllCommand = vscode.commands.registerCommand(
        'quitPlugin.keybindings.closeWindow'
        , closeAllCommandHandler
    )
    const closeCurrentCommand = vscode.commands.registerCommand(
        'quitPlugin.keybindings.closeEditor'
        , closeCurrentCommandHandler
    )

    context.subscriptions.push(closeAllCommand)
    context.subscriptions.push(closeCurrentCommand)
    context.subscriptions.push(quitCommand)
}

exports.activate = activate

function deactivate() {}
exports.deactivate = deactivate
