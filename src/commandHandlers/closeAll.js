const vscode = require('vscode')

const QuitMenu = require('../QuitMenu')

module.exports = function closeAll(textEditor){
    QuitMenu.showFocusingCloseWindow()
}