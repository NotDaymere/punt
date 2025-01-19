import { createContext, useContext } from "react";
import useModalStore from "./store/useModalStore";

interface ModalContextState {
    close: () => void;
    payload: any;
}

export const ModalContext = createContext<ModalContextState>({
    payload: null,
    close: () => {},
});

export function useModalContext<T = any>() {
    const state = useContext(ModalContext);
    return {
        close: state.close,
        payload: state.payload as T
    }
}

export function useModals() {
    const { open } = useModalStore();
    return { open };
}