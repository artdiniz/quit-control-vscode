import * as vscode from 'vscode'

import {QuitMenuOptions, asFocusedOption, IQuitControlQuickPickItem} from './QuitMenuOptions'
import { isMacOSMode, isMacOSPlatform } from './settings'

const quitFocusedOptions = [
    asFocusedOption(QuitMenuOptions.Quit)
    ,QuitMenuOptions.CloseWindow
    ,QuitMenuOptions.Cancel
]

const quitEmptyWindowFocusedOptions = [
    asFocusedOption(QuitMenuOptions.Quit)
    ,QuitMenuOptions.CloseEmptyWindow
    ,QuitMenuOptions.Cancel
]

const closeEmptyWindowFocusedOptions = [
    asFocusedOption(QuitMenuOptions.CloseEmptyWindow)
    ,QuitMenuOptions.Quit
    ,QuitMenuOptions.Cancel
]

const closeWindowFocusedOptionsMacOSMode = [
    asFocusedOption(QuitMenuOptions.CloseWindow)
    ,QuitMenuOptions.Quit
    ,QuitMenuOptions.Cancel
]

const closeWindowFocusedOptions = [
    asFocusedOption(QuitMenuOptions.CloseWindow)
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
    ,showFocusingCloseWindow: () => (isMacOSPlatform || isMacOSMode())
        ? show(closeWindowFocusedOptionsMacOSMode)
        : show(closeWindowFocusedOptions)
    ,showFocusingCloseEmptyWindow: () => show(closeEmptyWindowFocusedOptions)
}