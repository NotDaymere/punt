import React from "react";
import Image from "shared/ui/Image";
import css from "./podium-side.module.scss";
import PodiumFrameIcon from "shared/icons/PodiumFrame.icon";
import { Discount } from "shared/components/Discount";
import clsx from "clsx";

interface Props {
    name: string;
    prize: string;
    img: string;
    place: 2 | 3;
}

export const PodiumSide: React.FC<Props> = ({ img, name, place, prize }) => {
    return (
        <div className={css.podium}>
            <div className={css.podium_user}>
                <Image.Default
                    className={css.podium_user_frame}
                    src="/img/home/podium-frame.png"
                    alt=""
                />
                <PodiumFrameIcon
                    id={"podium-frame-" + place}
                    className={css.podium_user_clip}
                />
                <Image.Default 
                    style={{
                        clipPath: `url(#podium-frame-${place})`
                    }}
                    className={css.podium_user_img} 
                    src={img} 
                    alt="" 
                />
                <p className={css.podium_user_name}>{name}</p>
            </div>
            <div className={css.podium_podium}>
                <Image.Default
                    className={css.podium_podium_main}
                    src="/img/home/podium-side.png"
                    alt=""
                />
                <Image.Default
                    className={css.podium_podium_label}
                    src={place === 2 
                        ? "/img/home/podium-second.png"
                        : "/img/home/podium-third.png"}
                    alt=""
                />
                <Discount className={clsx(
                    css.podium_prize,
                    css['_place-' + place]
                )}>
                    <span className={css.podium_prize_up}>
                        Prize <Image.Default src="/img/icons/gc.svg" alt="" />
                    </span>
                    <span className={css.podium_prize_down}>{prize}</span>
                </Discount>
            </div>
        </div>
    );
};
