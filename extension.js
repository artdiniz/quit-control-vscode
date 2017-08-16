// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode')
const QuitMenu = require('./QuitMenu')

function activate(context) {
    const quitCommand = vscode.commands.registerCommand('quitPlugin.keybindings.quit', handleQuit)
    const closeWindowOnGenericEditorCommand = vscode.commands.registerCommand('quitPlugin.keybindings.closeWindow', handleCloseWindow)
    const closeGenericEditorCommand = vscode.commands.registerCommand('quitPlugin.keybindings.closeEditor', handleCloseEditor)

	function handleQuit() {
        QuitMenu.showFocusingQuit()
    }

    function handleCloseWindow(textEditor){
        vscode.commands.executeCommand('workbench.action.closeAllEditors')
        QuitMenu.showFocusingCloseWindow()
    }

    function handleCloseEditor(textEditor) {
		vscode.commands.executeCommand('workbench.action.closeActiveEditor')
        if(vscode.workspace.textDocuments.length == 0){
            QuitMenu.showFocusingCloseWindow()
        }
    }

    context.subscriptions.push(closeWindowOnGenericEditorCommand)
    context.subscriptions.push(closeGenericEditorCommand)
    context.subscriptions.push(quitCommand)
}
exports.activate = activate

function deactivate() {}
exports.deactivate = deactivate
