import * as vscode from 'vscode'
import { quitHandler, quitEmptyWindowHandler, closeWindowHandler } from './commandHandlers'
 

export const activate = function (context: vscode.ExtensionContext) {
    vscode.commands.executeCommand('setContext', 'quitControl.isActive', true);

    const stopCloseEmptyWindowCommand = vscode.commands.registerCommand(
        'quitControl.keybindings.stopCloseEmptyWindow'
        , () => {}
    )

    const closeWindowCommand = vscode.commands.registerCommand(
        'quitControl.keybindings.closeWindow'
        , closeWindowHandler
    )

    const quitCommand = vscode.commands.registerCommand(
        'quitControl.keybindings.quit'
        , quitHandler
    )

    const quitCommandEmptyWindow = vscode.commands.registerCommand(
        'quitControl.keybindings.quitEmptyWindow'
        , quitEmptyWindowHandler
    )

    context.subscriptions.push(stopCloseEmptyWindowCommand)
    context.subscriptions.push(closeWindowCommand)
    context.subscriptions.push(quitCommand)
    context.subscriptions.push(quitCommandEmptyWindow)
}

export const deactivate = function deactivate() {
    vscode.commands.executeCommand('setContext', 'quitControl.isActive', false);
}
