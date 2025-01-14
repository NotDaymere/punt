import React from "react";
import { RedemptionMethodEnum } from "widgets/wallet/lib";
import { WalletRedeemChoose } from "../02.01-wallet-redeem-choose";
import { WalletRedeemForm } from "../02.02-wallet-redeem-form";
// import css from "./wallet-redeem.module.scss";

export const WalletRedeem: React.FC = () => {
    const [methodActive, setMethodActive] = React.useState<RedemptionMethodEnum | null>(null);

    const handleBack = () => {
        setMethodActive(null);
    };

    if (methodActive === null) {
        return (
            <WalletRedeemChoose 
                methodActive={methodActive}
                handleMethod={setMethodActive}
            />
        );
    }

    return (
        <WalletRedeemForm 
            methodActive={methodActive}
            handleBack={handleBack}
        />
    )
};
