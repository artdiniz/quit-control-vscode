const vscode = require('vscode')
const options = require ('./QuitMenuOptions')

const QuitMenu = {}

QuitMenu.show = focusedOption => vscode.window.showQuickPick(sortedOptions(focusedOption)).then(option => {
    if(option){
        return vscode.commands.executeCommand(option.command)
    }
})

function sortedOptions(option){
    return Object
        .keys(options)
        .map(key => Object.assign({}, options[key]))
        .sort((optionA, optionB) => {
            if(optionA.label == option.label){
                optionA.description = "prevented"
                optionA.detail = "Select this item to confirm"
                return -1
            } else if(optionB.label == option.label){
                optionB.description = "prevented"
                optionB.detail = "Select this item to confirm"
                return 1
            }else if(optionB.label == options.Cancel.label) {
                return -1
            }else {
                return 1
            }
        })
}


module.exports = QuitMenu