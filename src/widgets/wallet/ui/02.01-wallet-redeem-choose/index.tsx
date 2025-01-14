import React from "react";
import clsx from "clsx";
import { RedemptionMethodEnum, redeemMethods } from "widgets/wallet/lib";
import { Button } from "shared/components/@Buttons/Button";
import Image from "shared/ui/Image";
import css from "../02-wallet-redeem/wallet-redeem.module.scss";

interface Props {
    methodActive: RedemptionMethodEnum | null;
    handleMethod: (value: RedemptionMethodEnum) => void;
}

export const WalletRedeemChoose: React.FC<Props> = ({
    methodActive,
    handleMethod,
}) => {
    const [methodCurrent, setMethodCurrent] = React.useState(methodActive);
    
    const handleContinue = () => {
        if(methodCurrent !== null) {
            handleMethod(methodCurrent);
        }
    }

    return (
        <div className={css.redeem}>
            <h3 className={css.redeem_title}>Choose Your Redemption Method</h3>
            <p className={css.redeem_text}>We offer two secure ways to redeem your winnings.</p>
            <ul className={css.redeem_methods}>
                {redeemMethods.map((method) => (
                    <li
                        className={clsx(
                            css.redeem_methods_item,
                            "glow-bg",
                            method.id === methodCurrent && css._active
                        )}
                        onClick={() => setMethodCurrent(method.id)}
                        key={method.id}
                    >
                        <Image.Default
                            className={css.redeem_methods_icon}
                            src={method.img}
                            alt=""
                        />
                        <p className={css.redeem_methods_title}>{method.name}</p>
                        <p className={css.redeem_methods_text}>{method.text}</p>
                    </li>
                ))}
            </ul>
            <div className={css.redeem_btn_container}>
                <div className={css.redeem_btn_outlines} />
                <Button
                    className={css.redeem_btn}
                    onClick={handleContinue}
                    disabled={methodCurrent === null}
                    variant="big-green"
                >
                    Continue
                </Button>
            </div>
        </div>
    );
};
