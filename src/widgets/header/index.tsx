import React from "react";
import { Button } from "shared/components/@Buttons/Button";
import { IconButton } from "shared/components/@Buttons/IconButton";
import { Progress } from "shared/components/Progress";
import { UserInfo } from "shared/components/UserInfo";
import InfoIcon from "shared/icons/Info.icon";
import NotificationIcon from "shared/icons/Notification.icon";
import WalletIcon from "shared/icons/Wallet.icon";
import css from "./header.module.scss";
import ArrowRightIcon from "shared/icons/ArrowRight.icon";

export const Header: React.FC = () => {
    return (
        <header className={css.header}>
            <div className="container">
                <div className={css.header_wrapper}>
                    {/* Progress */}
                    <div className={css.header_progress}>
                        <div className={css.header_progress_inner}>
                            <Progress medal="/img/temp/medal.svg" rank="COPPER" progress={60} />
                        </div>
                    </div>

                    {/* Balance */}
                    <div className={css.header_balance}>
                        <div className={css.header_balance_tabs}>
                            <div className={`${css.header_balance_item} ${css._active}`}>
                                <img src="/img/icons/sc.svg" alt="" />
                                200.00
                                <InfoIcon />
                            </div>
                            <div className={css.header_balance_item}>
                                <img src="/img/icons/gc.svg" alt="" />
                                20.00
                                <InfoIcon />
                            </div>
                        </div>
                        <Button className={css.header_balance_wallet} variant="green">
                            <WalletIcon /> Wallet
                        </Button>
                    </div>

                    {/* Account */}
                    <div className={css.header_account}>
                        <IconButton icon={NotificationIcon} />
                        <button className={css.user_btn}>
                            <UserInfo img="/img/temp/user.jpg" name="Linda" username="VTRAIN83" />
                            <ArrowRightIcon className={css.user_btn_arrow} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
