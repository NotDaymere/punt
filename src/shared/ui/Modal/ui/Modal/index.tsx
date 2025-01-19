import React from "react";
import { CSSTransition } from "react-transition-group";
import { useModalStore } from "../../lib";
import clsx from "clsx";
import { ModalContext } from "../../lib/context";
import css from "./Modal.module.scss";

interface ChildrenProps {
    close: () => void;
    payload: any;
}

type ChildrenFunction = (data: ChildrenProps) => React.ReactNode;

interface Props {
    name: string;
    children: ChildrenFunction | React.ReactNode;
    timeout?: number;
    className?: string;
    hideOnClickOutside?: boolean;
    overflow?: boolean;
}

export const Modal: React.FC<Props> = ({
    name,
    className,
    timeout = 300,
    hideOnClickOutside = false,
    children,
    overflow
}) => {
    const nodeRef = React.useRef<HTMLDivElement>(null);
    const mouseDown = React.useRef(false);
    const store = useModalStore();

    const data = React.useMemo(() => {
        return store.modals.find((modal) => modal.name)!;
    }, [name, store.modals]);

    const close = () => {
        store.close(name);
    };

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        if(hideOnClickOutside) {
            if(event.currentTarget === event.target && event.button !== 2) {
                mouseDown.current = true;
            }
        }
    };

    const handleMouseUp = (event: React.MouseEvent<HTMLDivElement>) => {
        if(hideOnClickOutside && mouseDown.current) {
            if(event.currentTarget === event.target && event.button !== 2) {
                close();
                mouseDown.current = false;
            } 
        }
    };

    React.useEffect(() => {
        store.add({
            payload: null,
            active: false,
            name,
        });

        return () => {
            store.remove(name);
        };
    }, [name]);

    React.useEffect(() => {
        if(overflow) {
            const openLength = store.modals.reduce(
                (acc, item) => acc + +item.active, 
                0
            );
            document.documentElement.style.overflow = openLength > 0
                ? "hidden"
                : "";
        }
    }, [name, store.modals, overflow]);

    if(!data) {
        return null;
    }

    return (
        <CSSTransition
            classNames={css}
            in={data.active}
            timeout={timeout}
            nodeRef={nodeRef}
            unmountOnExit
            mountOnEnter
        >
            <ModalContext.Provider value={{ close, payload: data.payload }}>
                <div 
                    className={clsx(css.modal_window, className)} 
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    ref={nodeRef}
                >
                    {typeof children === "function"
                        ? children({ close, payload: data.payload })
                        : children}
                </div>
            </ModalContext.Provider>
        </CSSTransition>
    );
};
