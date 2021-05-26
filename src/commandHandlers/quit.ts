import {QuitMenu} from '../QuitMenu'

export function quitHandler() {
    console.log('QUIT')
    QuitMenu.showFocusingQuit()
}

export function quitEmptyWindow() {
    console.log('QUIT EMPTY')
    QuitMenu.showFocusingQuitEmptyWindow()
}