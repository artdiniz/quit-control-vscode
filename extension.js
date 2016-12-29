// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode')
const QuitMenu = require('./QuitMenu')
const QuitMenuOptions = require ('./QuitMenuOptions')

function activate(context) {

    var disposableQuitKB = vscode.commands.registerCommand('quitPlugin.keybindings.quit', function () {
        QuitMenu.show(QuitMenuOptions.Quit)
    })

    var disposableCloseWindowKB = vscode.commands.registerCommand('quitPlugin.keybindings.closeWindow', function () {
        if(vscode.window.visibleTextEditors.length == 0){
            QuitMenu.show(QuitMenuOptions.CloseWindow)
        }else {
            vscode.commands.executeCommand('workbench.action.closeAllEditors')
        }
    })

    var disposableCloseEditorKB = vscode.commands.registerCommand('quitPlugin.keybindings.closeEditor', function () {
        if(vscode.window.visibleTextEditors.length == 0){
            QuitMenu.show(QuitMenuOptions.CloseWindow)
        } else {
            vscode.commands.executeCommand('workbench.action.closeActiveEditor')
        }
    })

    context.subscriptions.push(disposableCloseWindowKB);
    context.subscriptions.push(disposableCloseEditorKB);
    context.subscriptions.push(disposableQuitKB);
}
exports.activate = activate

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate