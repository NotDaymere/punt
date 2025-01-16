import React from "react";
import { Button } from "shared/components/@Buttons/Button";
import { Discount } from "shared/components/Discount";
import Image from "shared/ui/Image";
import InfoIcon from "shared/icons/Info.icon";
import { Input } from "shared/ui/Input";
import css from "./wallet-top-up.module.scss";

export const WalletTopUp: React.FC = () => {
    const [coins, setCoins] = React.useState("");
    const [submitted, setSubmitted] = React.useState(false);

    if(submitted) {
        return (
            <div className={`${css.topup} ${css._submitted}`}>
                <h3 className={css.topup_title}>
                    The fun never stops on Punt!
                </h3>
                <p className={css.topup_text}>
                    If you have less than 10 GC in your wallet, you can claim a free top-up on us!
                </p>
                <div className={css.topup_balance}>
                    Your current balance
                    <p className={css.topup_balance_value}>
                        <Image.Default src="/img/icons/gc.svg" alt="" />
                        200.00
                        <InfoIcon />
                    </p>
                </div>
                <div className={css.topup_form_btn_container}>
                    <div className={css.topup_form_btn_outlines} />
                    <Button 
                        className={css.topup_form_btn} 
                        variant="big-green" 
                        type="submit"
                        disabled
                    >
                        Claim Top Up
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className={css.topup}>
            <h3 className={css.topup_title}>The fun never stops on Punt!</h3>
            <p className={css.topup_text}>
                Claim FREE Gold Coins whenever your balance is below 10
            </p>
            <div className={css.topup_container}>
                <div className={css.topup_block}>
                    <Image.Default
                        className={css.topup_block_lights}
                        src="/img/wallet/topup-lights.png"
                        alt=""
                    />
                    <Image.Default
                        className={css.topup_block_img}
                        src="/img/components/coins_1_000_000.svg"
                        alt=""
                    />
                    <p className={css.topup_block_value}>1000</p>
                    <p className={css.topup_block_text}>Gold Coins</p>
                    <Discount
                        className={css.topup_block_discount}
                        classNameContent={css.topup_block_discount_content}
                    >
                        Free
                    </Discount>
                </div>
                <form className={css.topup_form} onSubmit={(ev) => ev.preventDefault()}>
                    <Input
                        value={coins}
                        onChange={(ev) => setCoins(ev.target.value)}
                        icon={<Image.Default src="/img/icons/gc.svg" alt="" />}
                        placeholder="Amount"
                        title="Gold Coins"
                    />
                    <div className={css.topup_form_btn_container}>
                        <div className={css.topup_form_btn_outlines} />
                        <Button 
                            className={css.topup_form_btn} 
                            disabled={!+coins}
                            onClick={() => setSubmitted(true)}
                            variant="big-green" 
                            type="submit"
                        >
                            Claim Top Up
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
