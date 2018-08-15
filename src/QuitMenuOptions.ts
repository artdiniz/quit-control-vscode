import { QuickPickItem } from 'vscode'

export abstract class QuitControlQuickPickItem implements QuickPickItem{
    abstract label: string
    abstract description: string
    abstract command: string
}


export const QuitMenuOptions = {
    Quit: {
        label: 'Quit'
        ,description: '⌘Q'
        ,command: 'workbench.action.quit'
    } as QuitControlQuickPickItem
    ,CloseWindow: {
        label: 'Close Window'
        ,description: '⇧⌘W, ⌘W'
        ,command: 'workbench.action.closeWindow'
    } as QuitControlQuickPickItem
    ,Cancel: {
        label: 'Cancel'
        ,description: 'ESC'
        ,command: 'search.action.focusActiveEditor'
    } as QuitControlQuickPickItem
}