import * as vscode from 'vscode'

import {QuitMenuOptions, asFocusedOption, IQuitControlQuickPickItem} from './QuitMenuOptions'
import { isWindowsQuitMode, isWindowsPlatform } from './settings'

const quitOptions = [
    asFocusedOption(QuitMenuOptions.Quit)
    ,QuitMenuOptions.CloseWindow
    ,QuitMenuOptions.Cancel
]

const quitEmptyWindowOptions = [
    asFocusedOption(QuitMenuOptions.Quit)
    ,QuitMenuOptions.CloseEmptyWindow
    ,QuitMenuOptions.Cancel
]

const closeWindowOptions = [
    asFocusedOption(QuitMenuOptions.CloseWindow)
    ,QuitMenuOptions.Quit
    ,QuitMenuOptions.Cancel
]

const closeWindowOptionsQuitWindowsMode = [
    asFocusedOption(QuitMenuOptions.CloseWindow)
    ,QuitMenuOptions.QuitWindowsMode
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
    showFocusingQuit: () => show(quitOptions),
    showFocusingQuitEmptyWindow: () => show(quitEmptyWindowOptions)
    ,showFocusingCloseWindow: () => (isWindowsPlatform && isWindowsQuitMode())
        ? show(closeWindowOptionsQuitWindowsMode)
        : show(closeWindowOptions)
}