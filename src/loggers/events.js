import * as vscode from 'vscode'

vscode.workspace.onDidOpenTextDocument((doc) => {
    const uris = vscode.workspace.textDocuments
        .map(openDoc => decodeURIComponent(openDoc.uri.toString()))
        .map(uri => uri === decodeURIComponent(doc.uri.toString()) ? `[++]=> ${uri} ###`: `• ${uri} ###`)
        
    console.log('BEGIN OPEN' + '#'.repeat(10))
    console.log(uris.join('\n'))
    console.log('Total: ' + uris.length + ' docs')
    console.log('END OPEN' + '#'.repeat(10))
    console.log('\n'.repeat(3))

    currentOpenedTextEditors = currentOpenedTextEditors.incrementCount()
})

vscode.window.onDidChangeActiveTextEditor((editor) => {
    console.log('\n'.repeat(3))
    console.log('BEGIN CHANGE' + '#'.repeat(10))
    if(editor) {
        console.log(`@${editor.viewColumn || 'N/A'}:  ${decodeURIComponent(editor.document.uri.toString())}`)
    } else {
        console.log('[NO_EDITOR]')
    }
    console.log(`Active: ${ !!vscode.window.activeTextEditor && decodeURIComponent(vscode.window.activeTextEditor.document.uri.toString()) }}`)
    console.log('END CHANGE' + '#'.repeat(10))
    console.log('\n'.repeat(3))
})
    
vscode.workspace.onDidCloseTextDocument((doc) => {
    const uris = vscode.workspace.textDocuments
        .map(openDoc => decodeURIComponent(openDoc.uri.toString()))
        .map(uri => `• ${uri} ###`)
        
    console.log('BEGIN CLOSE' + '#'.repeat(10))
    console.log(`[--]=> ${decodeURIComponent(doc.uri.toString())} ###`)
    console.log(uris.join('\n'))
    console.log('Total: ' + uris.length + ' docs')
    console.log('END CLOSE' + '#'.repeat(10))
    console.log('\n'.repeat(3))

    currentOpenedTextEditors = currentOpenedTextEditors.decrementCount()
})