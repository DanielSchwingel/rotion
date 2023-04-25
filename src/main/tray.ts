import { BrowserWindow } from 'electron'
import { Menu, Tray, nativeImage } from 'electron'
import { resolve } from 'path'

export function createTray(window: BrowserWindow) {
   const icon = nativeImage.createFromPath(
      resolve(__dirname, 'rotionTemplate.png')
   )

   const tray = new Tray(icon)

   const menu = Menu.buildFromTemplate([
      { label: 'Rotion', enabled: false },
      { type: 'separator' },
      { 
         label: 'Novo documento', 
         click: () => {
            window.webContents.send('new-document')
         } 
      },
      { type: 'separator' },
      { label: 'Documentos recentes', enabled: false },
      { 
         label: 'Discover', 
         accelerator: 'CommandOrControl+1'
      },
      { 
         label: 'Ignite',
         accelerator: 'CommandOrControl+1'
      },
      { type: 'separator' },
      { 
         label: 'Sair do Rotion', 
         role: 'quit'
      }
   ])

   tray.setContextMenu(menu)
}