import * as vscode from 'vscode'
import {quitHandler, quitEmptyWindowHandler, closeWindowHandler, closeEditorEmptyWindowHandler} from './commandHandlers'
 

export const activate = function (context: vscode.ExtensionContext) {
    vscode.commands.executeCommand('setContext', 'quitControl.isActive', true);

    const closeCurrentCommand = vscode.commands.registerCommand(
        'quitControl.keybindings.closeEmptyWindow'
        , closeEditorEmptyWindowHandler
    )

    const closeCurrentCommandCtrlf4 = vscode.commands.registerCommand(
        'quitControl.keybindings.closeEmptyWindowCtrlF4'
        , closeEditorEmptyWindowHandler
    )

    const closeAllCommand = vscode.commands.registerCommand(
        'quitControl.keybindings.closeWindow'
        , closeWindowHandler
    )
    const closeAllAltF4Command = vscode.commands.registerCommand(
        'quitControl.keybindings.closeWindowAltF4'
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

    context.subscriptions.push(closeCurrentCommand)
    context.subscriptions.push(closeCurrentCommandCtrlf4)
    context.subscriptions.push(closeAllCommand)
    context.subscriptions.push(closeAllAltF4Command)
    context.subscriptions.push(quitCommand)
    context.subscriptions.push(quitCommandEmptyWindow)
}

export const deactivate = function deactivate() {
    vscode.commands.executeCommand('setContext', 'quitControl.isActive', false);
}
