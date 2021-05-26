import * as vscode from 'vscode'

import {QuitMenuOptions, asFocusedOption, IQuitControlQuickPickItem} from './QuitMenuOptions'

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

const closeWindowFocusedOptions = [
    asFocusedOption(QuitMenuOptions.CloseWindow)
    ,QuitMenuOptions.Quit
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
    ,showFocusingCloseWindow: () => show(closeWindowFocusedOptions)
    ,showFocusingCloseEmptyWindow: () => show(closeEmptyWindowFocusedOptions)
}