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

    let currentOpenedTextEditors = (function createOpenedTextEditorsObj(length = vscode.workspace.textDocuments.length){
        return {
            length
            ,incrementCount: () => createOpenedTextEditorsObj(length + 1)
            ,decrementCount: () => createOpenedTextEditorsObj(length - 1)
        }
    })()

    vscode.workspace.onDidOpenTextDocument(() => {
        currentOpenedTextEditors = currentOpenedTextEditors.incrementCount()
    })

    vscode.workspace.onDidCloseTextDocument(() => {
        currentOpenedTextEditors = currentOpenedTextEditors.decrementCount()
    })

    function handleCloseEditor(textEditor) {
        const previousOpenedTextEditorsCount = currentOpenedTextEditors.length
        vscode.commands.executeCommand('workbench.action.closeActiveEditor')
        .then(() => {
            if(previousOpenedTextEditorsCount === currentOpenedTextEditors.length){
                QuitMenu.showFocusingCloseWindow()
            }
        })
    }

    context.subscriptions.push(closeWindowOnGenericEditorCommand)
    context.subscriptions.push(closeGenericEditorCommand)
    context.subscriptions.push(quitCommand)
}
exports.activate = activate

function deactivate() {}
exports.deactivate = deactivate
