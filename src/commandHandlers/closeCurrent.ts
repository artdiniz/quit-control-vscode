import * as vscode from 'vscode'
import * as events from 'events'

import {QuitMenu} from '../QuitMenu'

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

const closeEditor = (function(){
    const debounce = require('lodash.debounce')

    const debouncedCloseEmitter = new events.EventEmitter()

    vscode.workspace.onDidCloseTextDocument(debounce(() => {
        debouncedCloseEmitter.emit("close")
    }, 50))

    return function close(){
        return new Promise((resolve, reject) => {
            let timeout: NodeJS.Timer
            debouncedCloseEmitter.once("close", () => {
                timeout && clearTimeout(timeout)
                resolve()
            })
            vscode.commands.executeCommand('workbench.action.closeActiveEditor').then(() => {
                timeout = setTimeout(() => {
                    resolve()
                }, 70)
            })
        })
    }

})()

export function closeCurrentHandler() {
    const previousOpenedTextEditorsCount = currentOpenedTextEditors.length
    closeEditor().then(() => {
        if(previousOpenedTextEditorsCount === currentOpenedTextEditors.length){
            QuitMenu.showFocusingCloseWindow()
        }
    })
}