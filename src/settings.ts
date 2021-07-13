import * as vscode from 'vscode'
import * as os from 'os'

export const isMacOSPlatform = (os.platform() === "darwin" )
export const isMacOSMode = () => vscode.workspace.getConfiguration('quitControl').get('macLikeMode')