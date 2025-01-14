import React from "react";
import { WalletClaimModal } from "../03.01-wallet-claim-modal";
import clsx from "clsx";
import { walletAwardsMock } from "widgets/wallet/mock-data";
import { Button } from "shared/components/@Buttons/Button";
import Image from "shared/ui/Image";
import { formatNumberWithSeparator } from "shared/utils/format";
import css from "./wallet-daily-bonus.module.scss";

export const WalletDailyBonus: React.FC = () => {
    const [claimActive, setClaimActive] = React.useState(false);

    return (
        <div className={css.bonus}>
            <h3 className={css.bonus_title}>Linda, build your Daily Bonus Streak!</h3>
            <p className={css.bonus_text}>
                Claim your Daily Bonus to keep your streak alive and unlock even better rewards.
            </p>
            <div className={css.bonus_streak}>
                5 Day Streak
                <div className={css.bonus_streak_coins}>
                    <Image.Default src="/img/icons/gc.svg" alt="" />
                    20 000
                    <span>/</span>
                    <Image.Default src="/img/icons/sc.svg" alt="" />
                    1,0
                </div>
            </div>
            <div className={css.bonus_bonuses}>
                {walletAwardsMock.map((award, index) => (
                    <div
                        className={clsx(
                            css.award,
                            index < 4 && css._gone,
                            index === 4 && css._today
                        )}
                        key={award.id}
                    >
                        <div className={css.award_inner}>
                            <p className={css.award_day}>Day {index + 1}</p>
                            <p className={css.award_award}>
                                <Image.Default src="/img/icons/gc.svg" alt="" />+{" "}
                                {formatNumberWithSeparator(award.award, " ")}
                            </p>
                            <Image.Default className={css.award_img} src={award.img} alt="" />
                            <p className={css.award_p}>
                                <Image.Default src="/img/icons/sc.svg" alt="" />+{" "}
                                {award.p.toFixed(1).replace(".", ",")}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={css.bonus_claim}>
                <p className={css.bonus_claim_title}>Next Bonus Claim Available in:</p>
                <p className={css.bonus_timer}>
                    <span>0</span>
                    <span>8</span>h<strong>:</strong>
                    <span>4</span>
                    <span>5</span>m<strong>:</strong>
                    <span>3</span>
                    <span>3</span>s
                </p>
                <div className={css.bonus_claim_btn_wrapper}>
                    <div className={css.bonus_claim_btn_outlines}></div>
                    <Button
                        className={css.bonus_claim_btn}
                        onClick={() => setClaimActive(true)}
                        variant="green"
                    >
                        Claim Daily Bonus
                    </Button>
                </div>
            </div>
            <WalletClaimModal
                active={claimActive}
                onCancel={() => setClaimActive(false)}
                onComplete={() => {}} // logic
            />
        </div>
    );
};
