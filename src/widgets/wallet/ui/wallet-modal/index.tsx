import React from "react";
import { Title } from "shared/components/Title";
import CrossIcon from "shared/icons/Cross.icon";
import { Modal } from "shared/ui/Modal";
import { Wallet } from "../wallet";
import css from "./wallet-modal.module.scss";

export const WalletModal: React.FC = () => {

    return (
        <Modal 
            name="wallet"
            transitionCSS={css}
            className={css.modal_window}
            hideOnClickOutside
            overflow
        >
            {({ close }) => (
                <div className={css.modal} id="wallet-modal">
                    <button className={css.modal_closeBtn} onClick={close}>
                        <CrossIcon />
                    </button>
                    <header className={css.modal_header}>
                        <Title.V2 className={css.modal_header_title}>Gold coins wallet</Title.V2>
                    </header>
                    <div className={css.modal_wallet}>
                        <Wallet />
                    </div>
                </div>
            )}
        </Modal>
    );
};
