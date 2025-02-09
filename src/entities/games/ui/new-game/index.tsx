import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { Button } from "shared/components/@Buttons/Button";
import SpadeIcon from "shared/icons/Spade.icon";
import Image from "shared/ui/Image";
import css from "./new-game.module.scss";

interface Props {
    img: string;
    className?: string;
}

export const NewGame: React.FC<Props> = ({ img, className }) => {
    return (
        <Link className={clsx(css.game, className)} href="/game/gates-of-olympus" prefetch={false}>
            <span className={`${css.game_content} newGame-content`} data-aspect>
                <Image.Default className={css.game_img} src={img} alt="" />
                <span className={css.game_marquee}>
                    <span className={css.game_marquee_item}>
                        <span className={css.game_marquee_content}>
                            <SpadeIcon /> New
                        </span>
                        <span className={css.game_marquee_content}>
                            <SpadeIcon /> New
                        </span>
                        <span className={css.game_marquee_content}>
                            <SpadeIcon /> New
                        </span>
                    </span>
                    <span className={css.game_marquee_item}>
                        <span className={css.game_marquee_content}>
                            <SpadeIcon /> New
                        </span>
                        <span className={css.game_marquee_content}>
                            <SpadeIcon /> New
                        </span>
                        <span className={css.game_marquee_content}>
                            <SpadeIcon /> New
                        </span>
                    </span>
                </span>
                <Button className={css.game_btn} component="span" variant="green" circle>
                    Play now
                </Button>
            </span>
        </Link>
    );
};
