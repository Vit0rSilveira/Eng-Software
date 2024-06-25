import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useStore = create(
  persist(
    (set) => ({
      usuario: '',
      updateUser: (novoUsuario) => set({ usuario: novoUsuario }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

