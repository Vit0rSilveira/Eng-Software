import { create } from 'zustand'

export const useStore = create((set) => ({
  usuario: undefined,
  updateUser: (novoUsuario) => set(() => ({ usuario: novoUsuario})),
//   getUser: () => set((state) => ({ return state.usuario }))
}))