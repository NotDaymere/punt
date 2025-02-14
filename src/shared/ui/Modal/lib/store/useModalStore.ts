import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ModalState } from "./types";

const useModalStore = create<ModalState>()(
    devtools(
        (set) => ({
            modals: [],
            add: (value) => {
                set((state) => ({
                    modals: [...state.modals, value],
                }));
            },
            remove: (name) => {
                set((state) => {
                    const modals = state.modals.filter((item) => item.name !== name);
                    return { modals };
                });
            },
            close: (name) => {
                set((state) => {
                    const modals = state.modals.map((item) =>
                        item.name === name ? { ...item, active: false } : item
                    );

                    return { modals };
                });
            },
            open: (name, payload = null) => {
                set((state) => {
                    const modals = state.modals.map((item) =>
                        item.name === name ? { ...item, active: true, payload } : item
                    );

                    return { modals };
                });
            },
        }),
        {
            name: "modal-storage",
        }
    )
);

export default useModalStore;
