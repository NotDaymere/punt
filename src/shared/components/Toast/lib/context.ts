import { createContext, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContextType, ToastDataProps } from "./types";

export const ToastContext = createContext<ToastContextType>({
    data: [],
    onChange: () => {},
});

export const useToast = () => {
    const { data, onChange } = useContext(ToastContext);

    const push = (value: ToastDataProps) => {
        const id = uuidv4();

        onChange((data) => [
            ...data,
            {
                ...value,
                id,
                duration: value.duration || 3000,
                removed: false,
            },
        ]);

        return id;
    };

    const remove = (id: string) => {
        onChange((data) => data.map(
            (item) => ({
                ...item,
                removed: item.id === id
            })
        ));
    };

    const removeFromList = (id: string) => {
        onChange((data) => data.filter((item) => item.id !== id));
    };

    return {
        state: data,
        push,
        remove,
        removeFromList
    };
};
