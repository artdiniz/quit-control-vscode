// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode')
const QuitMenu = require('./QuitMenu')
const QuitMenuOptions = require ('./QuitMenuOptions')

function activate(context) {

    vscode.commands.getCommands().then(commands => {
        console.log(JSON.stringify(commands, null ,2))
    })

    var quitCommand = vscode.commands.registerCommand('quitPlugin.keybindings.quit', function () {
        QuitMenu.show(QuitMenuOptions.Quit)
    })

    var closeWindowOnGenericEditorCommand = vscode.commands.registerCommand('quitPlugin.keybindings.closeWindow', handleCloseWindow)

    var closeGenericEditorCommand = vscode.commands.registerCommand('quitPlugin.keybindings.closeEditor', handleCloseEditor)

    function handleCloseWindow(textEditor){
        vscode.commands.executeCommand('workbench.action.closeAllEditors')
        QuitMenu.show(QuitMenuOptions.CloseWindow)
    }

    function handleCloseEditor(textEditor) {
        vscode.commands.executeCommand('workbench.action.closeActiveEditor')
        if(vscode.window.visibleTextEditors.length == 0){
            QuitMenu.show(QuitMenuOptions.CloseWindow)
        }
    }

    context.subscriptions.push(closeWindowOnGenericEditorCommand)
    context.subscriptions.push(closeGenericEditorCommand)
    context.subscriptions.push(quitCommand)
}
exports.activate = activate

function deactivate() {
}
exports.deactivate = deactivate