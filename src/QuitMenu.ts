import * as vscode from 'vscode'

import {QuitMenuOptions, asFocusedOption, IQuitControlQuickPickItem} from './QuitMenuOptions'

const quitFocusedOptions = [
    asFocusedOption(QuitMenuOptions.Quit)
    ,QuitMenuOptions.CloseWindow
    ,QuitMenuOptions.Cancel
]

const closedWindowFocusedOptions = [
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
    showFocusingQuit: () => show(quitFocusedOptions)
    ,showFocusingCloseWindow: () => show(closedWindowFocusedOptions)
}