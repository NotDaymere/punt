import React from "react";
import { WalletInnerModal } from "widgets/wallet/components";
import { Button } from "shared/components/@Buttons/Button";
import { Title } from "shared/components/Title";
import Image from "shared/ui/Image";
import css from "./wallet-successful.module.scss";

interface Props {
    active: boolean;
    onClose: () => void;
}

export const WalletSuccessful: React.FC<Props> = ({
    active,
    onClose
}) => {
    return (
        <WalletInnerModal active={active}>
            <Image.Default
                className={css.success_mark}
                src="/img/icons/confirm-mark@3x.png"
                alt=""
            />
            <Title.V2 className={css.success_title}>
            Successfully
            </Title.V2>
            <p className={css.success_text}>
                Redemption<br/> successfully processed!
            </p>
            <Button 
                className={css.success_okBtn} 
                onClick={onClose} 
                variant="green" 
                circle
            >
                OK
            </Button>
        </WalletInnerModal>
    );
};