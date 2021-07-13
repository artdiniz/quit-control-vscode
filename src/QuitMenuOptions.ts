import { QuickPickItem } from 'vscode'
import { isMacOSPlatform } from './settings'

type QuickPickItems = 'Quit' | 'CloseEmptyWindow' | 'CloseWindow' | 'Cancel'
export interface IQuitControlQuickPickItem extends QuickPickItem {
    label: string
    description: string
    command: string
}

export const asFocusedOption = (option: IQuitControlQuickPickItem) => Object.assign({}, option, {
    description: 'prevented' as 'prevented'
    ,detail: 'Press Enter to confirm' as 'Press Enter to confirm'
})

export const QuitMenuOptions: {[key in QuickPickItems]: IQuitControlQuickPickItem} = {
    Quit: {
        label: 'Quit'
        ,description: isMacOSPlatform ? '⌘Q' : '^Q'
        ,command: 'workbench.action.quit'
    }
    ,CloseEmptyWindow: {
        label: 'Close Window'
        ,description: isMacOSPlatform 
            ? '⇧⌘W, ⌘W' 
            : '⇧^W, ^W, Alt+F4, Ctrl+F4'
        ,command: 'workbench.action.closeWindow'
    }
    ,CloseWindow: {
        label: 'Close Window'
        ,description: isMacOSPlatform ? '⇧⌘W' : '⇧^W, Alt+F4'
        ,command: 'workbench.action.closeWindow'
    }
    ,Cancel: {
        label: 'Cancel'
        ,description: 'ESC'
        ,command: 'search.action.focusActiveEditor'
    }
}