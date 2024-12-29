import React from "react";
import { ToastContext, ToastData } from "../lib";
import { ToastList } from "../ui";

interface Props {
    children: React.ReactNode;
}

export function ToastProvider({ children }: Props) {
    const [data, onChange] = React.useState<ToastData[]>([]);

    return (
        <ToastContext.Provider value={{ data, onChange }}>
            {children}
            <ToastList />
        </ToastContext.Provider>
    );
}