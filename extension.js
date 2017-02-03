// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode')
const QuitMenu = require('./QuitMenu')
const QuitMenuOptions = require ('./QuitMenuOptions')

function activate(context) {
    const quitCommand = vscode.commands.registerCommand('quitPlugin.keybindings.quit', handleQuit)
    const closeWindowOnGenericEditorCommand = vscode.commands.registerCommand('quitPlugin.keybindings.closeWindow', handleCloseWindow)
    const closeGenericEditorCommand = vscode.commands.registerCommand('quitPlugin.keybindings.closeEditor', handleCloseEditor)

	function handleQuit() {
        QuitMenu.show(QuitMenuOptions.Quit)
    }

    function handleCloseWindow(textEditor){
        vscode.commands.executeCommand('workbench.action.closeAllEditors')
        QuitMenu.show(QuitMenuOptions.CloseWindow)
    }

    function handleCloseEditor(textEditor) {
		vscode.commands.executeCommand('workbench.action.closeActiveEditor')
        if(vscode.workspace.textDocuments.length == 0){
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
