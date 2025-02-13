import { create } from 'zustand'

interface AppState {
    prealoderActive: boolean;
    changePreloaderState: (bool: boolean) => void;
}

export const useAppStore = create<AppState>()(
    (set) => ({
        prealoderActive: false,
        changePreloaderState: (prealoderActive) => set(() => ({ prealoderActive }))
    })
)