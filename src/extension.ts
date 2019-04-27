import * as vscode from 'vscode'
import {quitCommandHandler, closeAllCommandHandler, closeCurrentCommandHandler} from './commandHandlers'

export const activate = function (context: vscode.ExtensionContext) {
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

export const deactivate = function deactivate() {}
