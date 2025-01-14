import React from "react";
import clsx from "clsx";
import { Button } from "shared/components/@Buttons/Button";
import { Title } from "shared/components/Title";
import Image from "shared/ui/Image";
import css from "./wallet-claim-modal.module.scss";

interface Props {
    active: boolean;
    onCancel: () => void;
    onComplete?: () => void;
}

export const WalletClaimModal: React.FC<Props> = ({ active, onCancel, onComplete }) => {
    const [claimed, setClaimed] = React.useState(false);

    const handleClaim = () => {
        onComplete?.(); //maybe async
        setClaimed(true);
    };

    if (claimed) {
        return (
            <div className={clsx(css.claim, active && css._active)}>
                <div className={css.claim_modal}>
                    <Image.Default
                        className={css.claim_mark}
                        src="/img/icons/confirm-mark@3x.png"
                        alt=""
                    />
                    <Title.V2 className={css.claim_title}>Confirm claiming</Title.V2>
                    <p className={css.claim_text}>Daily Bonus Claimed successfully</p>
                    <Button
                        className={css.claim_claimedBtn}
                        onClick={onCancel}
                        variant="green"
                        circle
                    >
                        OK
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className={clsx(css.claim, active && css._active)}>
            <div className={css.claim_modal}>
                <Image.Default
                    className={css.claim_mark}
                    src="/img/icons/confirm-mark@3x.png"
                    alt=""
                />
                <Title.V2 className={css.claim_title}>Confirm claiming</Title.V2>
                <p className={css.claim_text}>
                    You are claiming 0,3 <Image.Default src="/img/icons/sc.svg" alt="sc" /> Sweeps
                    Coins & 5 000 <Image.Default src="/img/icons/gc.svg" alt="gc" /> Gold Coins
                </p>
                <p className={css.claim_again}>You can only claim again after 24 Hrs.</p>
                <div className={css.claim_buttons}>
                    <Button className={css.claim_buttons_btn} onClick={onCancel} circle>
                        No
                    </Button>
                    <Button
                        className={css.claim_buttons_btn}
                        onClick={handleClaim}
                        variant="green"
                        circle
                    >
                        Yes
                    </Button>
                </div>
            </div>
        </div>
    );
};
