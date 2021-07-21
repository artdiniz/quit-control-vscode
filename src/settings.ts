import * as vscode from 'vscode'
import * as os from 'os'

export const isMacOSPlatform = (os.platform() === "darwin" )
export const isWindowsPlatform = (os.platform() === "win32" )
export const isMacOSMode = () => vscode.workspace.getConfiguration('quitControl').get('macLikeMode')