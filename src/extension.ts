import * as vscode from 'vscode'
import {quitCommandHandler, quitCommandEmptyWindowHandler, closeWindowCommandHandler, closeEmptyWindowCommandHandler} from './commandHandlers'

export const activate = function (context: vscode.ExtensionContext) {
    const quitCommand = vscode.commands.registerCommand(
        'quitControl.keybindings.quit'
        , quitCommandHandler
    )

    const quitCommandEmptyWindow = vscode.commands.registerCommand(
        'quitControl.keybindings.quitEmptyWindow'
        , quitCommandEmptyWindowHandler
    )

    const closeAllCommand = vscode.commands.registerCommand(
        'quitControl.keybindings.closeWindow'
        , closeWindowCommandHandler
    )
    const closeCurrentCommand = vscode.commands.registerCommand(
        'quitControl.keybindings.closeEmptyWindow'
        , closeEmptyWindowCommandHandler
    )

    context.subscriptions.push(closeAllCommand)
    context.subscriptions.push(closeCurrentCommand)
    context.subscriptions.push(quitCommand)
    context.subscriptions.push(quitCommandEmptyWindow)

    vscode.commands.executeCommand('setContext', 'quitControl.isActive', true);
}

export const deactivate = function deactivate() {
    vscode.commands.executeCommand('setContext', 'quitControl.isActive', false);
}
