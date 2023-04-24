import Store from 'electron-store'

interface StoreType {
   documents: Record<string, any>
}

const store = new Store<StoreType>({
   defaults: {
      documents: {}
   }
})

export { store }