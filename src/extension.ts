import * as vscode from 'vscode'
import {quitCommandHandler, closeAllCommandHandler, closeCurrentCommandHandler} from './commandHandlers'

export const activate = function (context: vscode.ExtensionContext) {
    const quitCommand = vscode.commands.registerCommand(
        'quitControl.keybindings.quit'
        , quitCommandHandler
    )

    const closeAllCommand = vscode.commands.registerCommand(
        'quitControl.keybindings.closeWindow'
        , closeAllCommandHandler
    )
    const closeCurrentCommand = vscode.commands.registerCommand(
        'quitControl.keybindings.closeEditor'
        , closeCurrentCommandHandler
    )

    context.subscriptions.push(closeAllCommand)
    context.subscriptions.push(closeCurrentCommand)
    context.subscriptions.push(quitCommand)

    vscode.commands.executeCommand('setContext', 'quitControl.isActive', true);
}

export const deactivate = function deactivate() {
    vscode.commands.executeCommand('setContext', 'quitControl.isActive', false);
}
