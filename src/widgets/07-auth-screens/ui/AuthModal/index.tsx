import React from "react";
import { Login } from "../01-Login";
import { Register } from "../02-Register";
import { AuthModalEnum } from "widgets/07-auth-screens/lib";
import { Modal } from "shared/ui/Modal";
import "../auth.styles.scss";
import css from "./AuthModal.module.scss";
import { Recovery } from "../03-Recovery";

export const AuthModal: React.FC = () => {
    return (
        <Modal
            name={AuthModalEnum.AUTH_MODAL}
            transitionCSS={css}
            className={css.modal_window}
            hideOnClickOutside
            overflow
        >
            {({ payload }) => (
                <React.Fragment>
                    {payload?.type === AuthModalEnum.SIGN_IN && <Login />}
                    {payload?.type === AuthModalEnum.SIGN_UP && <Register />}
                    {payload?.type === AuthModalEnum.RECOVERY && <Recovery />}
                </React.Fragment>
            )}
        </Modal>
    );
};
