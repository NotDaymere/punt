import React from "react";
import clsx from "clsx";
import { Button } from "shared/components/@Buttons/Button";
import Image from "shared/ui/Image";
import { formatNumberWithSeparator } from "shared/utils/format";
import css from "./giveaway-item.module.scss";

interface Props {
    image: string;
    title: string;
    winners: number;
    totalPrice: number;
    sc: number;
    gc: number;
    onJoin?: () => void;
    finished?: boolean;
}

export const GiveawayItem: React.FC<Props> = ({
    gc,
    sc,
    image,
    title,
    totalPrice,
    winners,
    finished,
    onJoin,
}) => {
    return (
        <div className={clsx(css.giveaway, finished && css._finished)}>
            <div className={css.giveaway_wrapper}>
                <Image.Default className={css.giveaway_light} src="/img/auth/light.webp" alt="" />
                <ul className={css.giveaway_info}>
                    <li className={css.giveaway_info_item}>
                        Winners: <span>{winners}</span>
                    </li>
                    <li className={css.giveaway_info_item}>
                        Total Prize: <strong>${formatNumberWithSeparator(totalPrice, ",")}</strong>
                    </li>
                </ul>
                <div className={css.giveaway_block}>
                    <Image.Default className={css.giveaway_gameImage} src={image} alt="" />
                    <p className={css.giveaway_title}>{title}</p>
                    <p className={css.giveaway_text}>
                        <span className={css._blue}>{sc.toFixed(2)}</span>{" "}
                        <Image.Default src="/img/icons/sc.svg" alt="" /> <strong>+</strong>{" "}
                        <span className={css._yellow}>
                            {formatNumberWithSeparator(gc.toFixed(0), ",")}
                        </span>{" "}
                        <Image.Default src="/img/icons/gc.svg" alt="" />{" "}
                    </p>
                </div>
                {!finished && (
                    <div className={css.giveaway_hover}>
                        <Button
                            className={css.giveaway_hover_btn}
                            onClick={onJoin}
                            variant="green"
                            circle
                        >
                            Join Now
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};
