import React from "react";
import clsx from "clsx";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import CrossIcon from "shared/icons/Cross.icon";
import css from "./WalletInnerModal.module.scss";

interface Props {
    children: React.ReactNode;
    active?: boolean;
    classNameModal?: string;
    onClose?: () => void;
}

export const WalletInnerModal: React.FC<Props> = ({
    children,
    classNameModal,
    active,
    onClose
}) => {
    const nodeRef = React.useRef<HTMLDivElement>(null);

    if(typeof document === "undefined") {
        return null;
    }
    
    const wrapElement = (el: React.ReactNode) => {
        return createPortal(el, document.getElementById("wallet-modal")!)
    }

    return wrapElement(
        <CSSTransition
            classNames={css}
            timeout={350}
            in={active}
            nodeRef={nodeRef}
            unmountOnExit
            mountOnEnter
        >
            <div className={css.window} ref={nodeRef}>
                <div className={clsx(css.window_modal, "glow-bg", classNameModal)}>
                    {onClose && (
                        <button className={css.window_closeBtn} onClick={onClose}>
                            <CrossIcon />
                        </button>
                    )}
                    {children}
                </div>
            </div>
        </CSSTransition>
    );
};