const vscode = require('vscode')
const QuitMenuOptions = require ('./QuitMenuOptions')

const asFocusedOption = option => Object.assign({}, option, {
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

const show = options => (
    vscode.window.showQuickPick(options)
        .then(option => {    
            if(option){
                return vscode.commands.executeCommand(option.command)
            }
        })
)

module.exports = {
    showFocusingQuit: () => show(quitFocusedOptions)
    ,showFocusingCloseWindow: () => show(closedWindowFocusedOptions)
}