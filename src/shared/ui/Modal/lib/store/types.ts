export interface ModalValue {
    name: string;
    payload: any;
    active: boolean;
}

export interface ModalState {
    modals: ModalValue[];
    add: (value: ModalValue) => void;
    remove: (name: string) => void;
    open: (name: string, payload?: any) => void;
    close: (name: string) => void;
}