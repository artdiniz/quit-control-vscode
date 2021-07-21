import * as vscode from 'vscode'

import {QuitMenuOptions, asFocusedOption, IQuitControlQuickPickItem} from './QuitMenuOptions'
import { isMacOSMode, isMacOSPlatform } from './settings'

const quitFocusedOptions = [
    asFocusedOption(QuitMenuOptions.Quit)
    ,QuitMenuOptions.CloseWindow
    ,QuitMenuOptions.Cancel
]

// macOS or macMode only
const quitEmptyWindowFocusedOptions = [
    asFocusedOption(QuitMenuOptions.Quit)
    ,QuitMenuOptions.CloseEmptyWindow
    ,QuitMenuOptions.Cancel
]

const closeWindowFocusedOptions = [
    asFocusedOption(QuitMenuOptions.CloseWindow)
    ,QuitMenuOptions.Quit
    ,QuitMenuOptions.Cancel
]

const closeWindowFocusedOptionsMacMode = [
    asFocusedOption(QuitMenuOptions.CloseWindow)
    ,QuitMenuOptions.QuitMacMode
    ,QuitMenuOptions.Cancel
]

const show = (options: IQuitControlQuickPickItem[]) => 
    vscode.window.showQuickPick(options)
        .then((option) => {    
            if(option){
                return vscode.commands.executeCommand(option.command)
            }
        })

export const QuitMenu = {
    showFocusingQuit: () => show(quitFocusedOptions),
    showFocusingQuitEmptyWindow: () => show(quitEmptyWindowFocusedOptions)
    ,showFocusingCloseWindow: () => (!isMacOSPlatform && isMacOSMode())
        ? show(closeWindowFocusedOptionsMacMode)
        : show(closeWindowFocusedOptions)
    ,showFocusingCloseEditorEmptyWindow: () => (!isMacOSPlatform && isMacOSMode())
        ? show(closeWindowFocusedOptionsMacMode)
        : show(closeWindowFocusedOptions)
}