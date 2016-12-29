const vscode = require('vscode')
const options = require ('./QuitMenuOptions')

const QuitMenu = {}

QuitMenu.show = (focusedOption) => vscode.window.showQuickPick(sortedOptions(focusedOption)).then(option => {
    vscode.commands.executeCommand(option.command)
})

function sortedOptions(option){
    return Object
        .keys(options)
        .map(key => options[key])
        .sort((optionA, optionB) => {
            if(optionA == option){
                return -1
            } else if(optionB == options.Cancel) {
                return -1
            }else {
                return 1
            }
        })
}


module.exports = QuitMenu