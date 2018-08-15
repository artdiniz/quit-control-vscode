import * as vscode from 'vscode'

import {QuitMenuOptions, QuitControlQuickPickItem} from './QuitMenuOptions'

const asFocusedOption = (option: QuitControlQuickPickItem) => Object.assign({}, option, {
    description: "prevented"
    ,detail: "Press Enter to confirm"
})

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

const show = (options: QuitControlQuickPickItem[]) => 
    vscode.window.showQuickPick(options)
        .then((option: QuitControlQuickPickItem) => {    
            if(option){
                return vscode.commands.executeCommand(option.command)
            }
        })

export const QuitMenu = {
    showFocusingQuit: () => show(quitFocusedOptions)
    ,showFocusingCloseWindow: () => show(closedWindowFocusedOptions)
}