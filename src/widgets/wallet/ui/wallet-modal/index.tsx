import React from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import { Title } from "shared/components/Title";
import { useClickOutside } from "shared/hooks/use-click-outside";
import CrossIcon from "shared/icons/Cross.icon";
import { Wallet } from "../wallet";
import css from "./wallet-modal.module.scss";

interface Props {
    active: boolean;
    onClose: () => void;
}

export const WalletModal: React.FC<Props> = ({ active, onClose }) => {
    const ref = useClickOutside(onClose);
    const nodeRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        document.documentElement.style.overflow = active ? "hidden" : "";
    }, [active]);

    const Element = (
        <CSSTransition 
            timeout={350} 
            classNames={css} 
            in={active} 
            unmountOnExit 
            mountOnEnter
            nodeRef={nodeRef}
        >
            <div className={css.window} ref={nodeRef}>
                <div className={css.modal} ref={ref}>
                    <button className={css.modal_closeBtn} onClick={onClose}>
                        <CrossIcon />
                    </button>
                    <header className={css.modal_header}>
                        <Title.V2 className={css.modal_header_title}>Gold coins wallet</Title.V2>
                    </header>
                    <div className={css.modal_wallet}>
                        <Wallet />
                    </div>
                </div>
            </div>
        </CSSTransition>
    );

    if (typeof document === "undefined") {
        return null;
    }

    return createPortal(Element, document.body);
};
