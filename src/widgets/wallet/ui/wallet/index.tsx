import React from "react";
import { WalletBuyBundle } from "../01-wallet-buy-bundle";
import { WalletRedeem } from "../02-wallet-redeem";
import { WalletDailyBonus } from "../03-wallet-daily-bonus";
import { WalletTopUp } from "../04-wallet-top-up";
import { WalletEnum, walletNav } from "widgets/wallet/lib";
import { Navigation } from "shared/components/Navigation";
import css from "./wallet.module.scss";

export const Wallet: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState(WalletEnum.BUY_BUNDLE);

    return (
        <div className={css.wallet}>
            <div className={css.wallet_nav_container}>
                <Navigation
                    className={css.wallet_nav}
                    data={walletNav}
                    activeId={activeTab}
                    onClick={(item) => setActiveTab(item.id as WalletEnum)}
                />
            </div>
            <div className={css.wallet_content}>
                {activeTab === WalletEnum.BUY_BUNDLE && <WalletBuyBundle />}
                {activeTab === WalletEnum.REDEEM && <WalletRedeem />}
                {activeTab === WalletEnum.DAILY_BONUS && <WalletDailyBonus />}
                {activeTab === WalletEnum.TOP_UP && <WalletTopUp />}
            </div>
        </div>
    );
};
