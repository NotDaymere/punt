import React from "react";
import { Title } from "shared/components/Title";
import { useClickOutside } from "shared/hooks/use-click-outside";
import CrossIcon from "shared/icons/Cross.icon";
import css from "./wallet-modal.module.scss";
import { Wallet } from "../wallet";

export const WalletModal: React.FC = () => {
    // const ref = useClickOutside();

    React.useEffect(() => {
        document.documentElement.style.overflow = "hidden";
    }, []);

    return (
        <div className={css.window}>
            <div className={css.modal}>
                <button className={css.modal_closeBtn}>
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
    );
};
