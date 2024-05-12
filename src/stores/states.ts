import { create, StoreApi, UseBoundStore } from 'zustand'

const useStore: UseBoundStore<StoreApi<unknown>> = create((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
    updateBears: (newBears: number) => set({ bears: newBears }),
}))