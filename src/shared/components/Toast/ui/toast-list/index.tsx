import React from "react";
import { useToast } from "../../lib";
import { ToastItem } from "../toast-item";
import css from "./toast-list.module.scss";

export const ToastList: React.FC = () => {
    const toast = useToast();
    const toastRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (toastRef.current) {
            toastRef.current.scrollTop = 99999;
        }
    }, [toast.state]);

    return (
        <div 
            className={css.toasts} 
            data-active={toast.state.length > 0} 
            ref={toastRef}
        >
            {toast.state.map((item) => (
                <ToastItem data={item} key={item.id} />
            ))}
        </div>
    );
};
