import React from "react";
import PodiumFrameIcon from "shared/icons/PodiumFrame.icon";
import Image from "shared/ui/Image";
import css from "./podium-center.module.scss";
import { Discount } from "shared/components/Discount";

interface Props {
    name: string;
    prize: string;
    img: string;
}

export const PodiumCenter: React.FC<Props> = ({ name, prize, img }) => {
    return (
        <div className={css.podium}>
            <div className={css.podium_user}>
                <Image.Default
                    className={css.podium_user_frame}
                    src="/img/home/podium-frame.png"
                    alt=""
                />
                <PodiumFrameIcon
                    id="podium-frame-first"
                    className={css.podium_user_clip}
                />
                <Image.Default 
                    className={css.podium_user_stars}
                    src="/img/home/leader-stars.png"
                    alt=""
                />
                <Image.Default 
                    className={css.podium_user_img} 
                    src={img} 
                    alt="" 
                />
                <p className={css.podium_user_name}>{name}</p>
            </div>
            <div className={css.podium_podium}>
                <Image.Default
                    className={css.podium_podium_main}
                    src="/img/home/podium-center.png"
                    alt=""
                />
                <Image.Default
                    className={css.podium_podium_label}
                    src="/img/home/podium-first.png"
                    alt=""
                />
                <Discount className={css.podium_prize}>
                    <span className={css.podium_prize_up}>
                        Prize <Image.Default src="/img/icons/gc.svg" alt="" />
                    </span>
                    <span className={css.podium_prize_down}>{prize}</span>
                </Discount>
            </div>
        </div>
    );
};
