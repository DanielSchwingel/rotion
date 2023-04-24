import { ipcMain } from 'electron'
import { IPC } from '@shared/constants/ipc'
import { FetchAllDocumentsResponse } from '@shared/types/ipc'

ipcMain.handle(IPC.DOCUMENTS.FETCH_ALL, async (): Promisse<FetchAllDocumentsResponse> => {
   return {
      data: [
         { id: 1, title: 'Ignite', content: '' },
         { id: 1, title: 'Discover', content: '' },
         { id: 1, title: 'Rocketseat', content: '' },
         { id: 1, title: 'Docs', content: '' }
      ]
   }
})