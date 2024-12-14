import React from "react";
import css from "./new-game.module.scss";
import Image from "shared/ui/Image";
import Link from "next/link";
import SpadeIcon from "shared/icons/Spade.icon";

interface Props {
    img: string;
}

export const NewGame: React.FC<Props> = (props) => {
    return (
        <Link href="/" className={css.game}>
            <span className={css.game_content}>
                <Image.Default 
                    src={props.img}
                    alt=""
                />
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
            </span>
        </Link>
    );
};