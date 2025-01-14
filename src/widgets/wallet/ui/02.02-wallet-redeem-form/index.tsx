import React from "react";
import { RedemptionMethodEnum } from "widgets/wallet/lib";
import { Button } from "shared/components/@Buttons/Button";
import ArrowRightMediumIcon from "shared/icons/ArrowRightMedium.icon";
import Image from "shared/ui/Image";
import { Input } from "shared/ui/Input";
import css from "../02-wallet-redeem/wallet-redeem.module.scss";
import PlusCircleIcon from "shared/icons/PlusCircle.icon";

interface Props {
    methodActive: RedemptionMethodEnum;
    handleBack: () => void;
}

export const WalletRedeemForm: React.FC<Props> = ({ handleBack, methodActive }) => {
    const [amount, setAmount] = React.useState("");

    return (
        <div className={css.redeem}>
            <Button className={css.redeem_backBtn} onClick={handleBack}>
                <ArrowRightMediumIcon /> Back
            </Button>
            <h3 className={`${css.redeem_title} ${css._min}`}>Redeem Sweep Coins</h3>
            <div className={css.redeem_form}>
                <form className={css.redeem_form_form} onSubmit={(ev) => ev.preventDefault()}>
                    <Input
                        className={css.redeem_form_input}
                        value={amount}
                        icon={<Image.Default src="/img/icons/gc.svg" alt="" />}
                        onChange={(ev) => setAmount(ev.target.value)}
                        placeholder="0.00"
                        title="Amount"
                    />
                </form>
                <div className={css.redeem_payment}>
                    <p className={css.redeem_payment_title}>Select Payment Method:</p>
                    <button className={css.redeem_payment_add}>
                        <PlusCircleIcon />
                        Add New Account
                    </button>
                </div>
                <div className={css.redeem_btn_container}>
                    <div className={css.redeem_btn_outlines} />
                    <Button className={css.redeem_btn} type="submit" variant="big-green">
                        Redeem
                    </Button>
                </div>
            </div>
        </div>
    );
};
