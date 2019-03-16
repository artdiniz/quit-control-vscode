import * as vscode from 'vscode'
import * as events from 'events'

import {QuitMenu} from '../QuitMenu'

let currentOpenedTextDocuments = (function createOpenedTextDocumentsObj(length = vscode.workspace.textDocuments.length){
    return {
        length
        ,incrementCount: () => createOpenedTextDocumentsObj(length + 1)
        ,decrementCount: () => createOpenedTextDocumentsObj(length - 1)
    }
})()

vscode.workspace.onDidOpenTextDocument(() => {
    currentOpenedTextDocuments = currentOpenedTextDocuments.incrementCount()
})
    
vscode.workspace.onDidCloseTextDocument(() => {
    currentOpenedTextDocuments = currentOpenedTextDocuments.decrementCount()
})

const closeEditor = (function(){
    const debounce = require('lodash.debounce')

    const debouncedCloseEmitter = new events.EventEmitter()

    vscode.workspace.onDidCloseTextDocument(debounce(() => {
        debouncedCloseEmitter.emit('close')
    }, 50))

    return function close(){
        return new Promise((resolve, reject) => {
            let timeout: NodeJS.Timer
            debouncedCloseEmitter.once('close', () => {
                if(timeout){ 
                    clearTimeout(timeout)
                }
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

const isNavigatingInNonEditor = (() => {
    let currentActiveDocument: vscode.TextDocument | undefined = vscode.window.activeTextEditor !== undefined
        ? vscode.window.activeTextEditor.document
        : vscode.workspace.textDocuments.length === 1
            ? vscode.workspace.textDocuments[0]
            : undefined
    
    /* 
        when isInNonEditor === true -> We are in a non-editor page (e.g. extension page)
        when isInNonEditor === false -> We are in a text editor
        when isInNonEditor === null -> Can't say if we are in a non-editor page or in an empty window
    */
    let isInNonEditor: boolean | null = currentActiveDocument !== undefined || null

    let previousActiveEditorWasClosed: boolean

    vscode.workspace.onDidCloseTextDocument(document => {
        if(currentActiveDocument && document.uri.toString() === currentActiveDocument.uri.toString()) {
            isInNonEditor = null
            previousActiveEditorWasClosed = true
        }
    })

    vscode.window.onDidChangeActiveTextEditor((newEditor) => {         
        if(newEditor !== undefined) {
            isInNonEditor = false
            previousActiveEditorWasClosed = false
            currentActiveDocument = newEditor.document
        } else {
            /* 
                Here `newEditor` is undefined.

                There are multiple cases where this happens and we can't tell if it is navigating through a non editor or not.
                When not sure this functions returns `null` for disabling false-positives and false-negatives.
                
                It could be because of a change to an empty window, because the last editor was closed. 

                We can tell if is in a non-editor, like a extension page if it changed from a editor to another, without closing the previous
            */

            if(previousActiveEditorWasClosed) {
                isInNonEditor = null
            } else {
                isInNonEditor = true
            }
        }

        previousActiveEditorWasClosed = false
    })

    return () => isInNonEditor
})()

export function closeCurrentHandler() {
    const previousOpenedTextDocumentsCount = currentOpenedTextDocuments.length
    const isInAEmptyWindowOrUndetectablePage = isNavigatingInNonEditor() === null

    closeEditor().then(() => {
        const didNotChangeQuantityOfOpenTextDocuments = previousOpenedTextDocumentsCount === currentOpenedTextDocuments.length

        if(didNotChangeQuantityOfOpenTextDocuments && isInAEmptyWindowOrUndetectablePage && (vscode.window.activeTextEditor === undefined) && (vscode.window.visibleTextEditors.length === 0)){
            QuitMenu.showFocusingCloseWindow()
        }
    })
}