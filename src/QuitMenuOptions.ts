import { QuickPickItem } from 'vscode'
import * as os from 'os'

const isMacOS = (os.platform() === "darwin" )

type QuickPitckItems = 'Quit' | 'CloseWindow' | 'Cancel'
export interface IQuitControlQuickPickItem extends QuickPickItem {
    label: string
    description: string
    command: string
}

export const asFocusedOption = (option: IQuitControlQuickPickItem) => Object.assign({}, option, {
    description: 'prevented' as 'prevented'
    ,detail: 'Press Enter to confirm' as 'Press Enter to confirm'
})

export const QuitMenuOptions: {[key in QuickPitckItems]: IQuitControlQuickPickItem} = {
    Quit: {
        label: 'Quit'
        ,description: isMacOS ? '⌘Q' : '^Q'
        ,command: 'workbench.action.quit'
    }
    ,CloseWindow: {
        label: 'Close Window'
        ,description: isMacOS? '⇧⌘W, ⌘W' : '⇧^W, ^W '
        ,command: 'workbench.action.closeWindow'
    }
    ,Cancel: {
        label: 'Cancel'
        ,description: 'ESC'
        ,command: 'search.action.focusActiveEditor'
    }
}