import { ipcMain } from 'electron'

ipcMain.handle('fetch-documents', async () => {
   return [
      { id: 1, title: 'Ignite' },
      { id: 1, title: 'Discover' },
      { id: 1, title: 'Rocketseat' },
      { id: 1, title: 'Docs' }
   ]
})