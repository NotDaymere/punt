import React from "react";
import { RecoveryForgot } from "../03.01-RecoveryForgot";
import { RecoveryReset } from "../03.02-RecoveryReset";
import { AuthModalEnum } from "widgets/07-auth-screens/lib";
import { useModalContext } from "shared/ui/Modal";
import { AuthLayout } from "../AuthLayout";
import css from "./Recovery.module.scss";

export const Recovery: React.FC = () => {
    const { payload, close } = useModalContext();

    return (
        <AuthLayout
            suptitle="No suit required for this casino!"
            text={`"You're not alone... I forget my password at least twice a week!"`}
            image="/img/auth/clubs.webp"
            onClose={close}
        >
            {payload?.tab === AuthModalEnum.RECOVERY_RESET ? <RecoveryReset /> : <RecoveryForgot />}
        </AuthLayout>
    );
};
