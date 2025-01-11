import React from "react";
import { challengesMock } from "widgets/05-gamedetails-screens/mock-game";
import InfoIcon from "shared/icons/Info.icon";
import LockIcon from "shared/icons/Lock.icon";
import Image from "shared/ui/Image";
import css from "./content-challenges.module.scss";

export const ContentChallenges: React.FC = () => {
    return (
        <div className={css.challenges}>
            <div className="container">
                <div className={css.challenges_label}>
                    <p className={css.challenges_available}>
                        Rewards Available:
                        <Image.Default src="/img/icons/sc.svg" alt="" />
                        <span>$1,370.33</span>
                    </p>
                </div>
                <ul className={css.challenges_list}>
                    {challengesMock.map((data) => (
                        <li className={css.challenges_list_item} key={data.id}>
                            <p className={css.challenges_name}>
                                <LockIcon />
                                {data.name}
                            </p>
                            <p className={css.challenges_referral}>
                                Reerral: <span>{data.ref}</span> <InfoIcon />
                            </p>
                            <p className={css.challenges_reward}>
                                Reward:
                                <Image.Default src="/img/icons/sc.svg" alt="" />
                                {data.reward.toFixed(2)}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
