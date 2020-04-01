import { createContext } from 'react'
import { RootStore } from '../stores/root-store'

export const storesContext = createContext({
  rootStore: new RootStore()
})