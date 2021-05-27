import {QuitMenu} from '../QuitMenu'

export function closeWindowHandler(){
    QuitMenu.showFocusingCloseWindow()
}

export function closeEmptyWindowHandler() {
    QuitMenu.showFocusingCloseEmptyWindow()
}