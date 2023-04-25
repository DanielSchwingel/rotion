import { Menu, Tray, app, nativeImage } from 'electron'
import { resolve } from 'path'

app.whenReady().then(() => {

   const icon = nativeImage.createFromPath(
      resolve(__dirname, 'rotionTemplate.png')
   )

   const tray = new Tray(icon)

   const menu = Menu.buildFromTemplate([
      { label: 'Rotion' },
      { type: 'separator' },
      { label: 'Rotion' },
      { label: 'Rotion' },
      { label: 'Rotion' }
   ])

   tray.setContextMenu(menu)
})