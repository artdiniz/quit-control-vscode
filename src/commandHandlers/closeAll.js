const vscode = require('vscode')

const QuitMenu = require('../QuitMenu')

module.exports = function closeAll(textEditor){
    vscode.commands.executeCommand('workbench.action.closeAllEditors')
    QuitMenu.showFocusingCloseWindow()
}