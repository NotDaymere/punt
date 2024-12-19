import React from "react";
import Image from "shared/ui/Image";
import css from "./podium-side.module.scss";

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
                {/* <Image.Default
                    className={css.podium_user_frame}
                    src="/img/home/podium-frame.png"
                    alt=""
                /> */}
                <Image.Default className={css.podium_user_img} src={img} alt="" />
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
            </div>
        </div>
    );
};
