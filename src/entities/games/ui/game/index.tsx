import React from "react";
import Link from "next/link";
import GameFrameIcon from "shared/icons/GameFrame.icon";
import Image from "shared/ui/Image";
import css from "./game.module.scss";

interface Props {
    img: string;
}

export const Game: React.FC<Props> = ({ img }) => {
    return (
        <Link className={css.game} href="/">
            <GameFrameIcon className={css.game_svg} />
            <Image.Default className={css.game_frame} src="/img/figures/game-frame.svg" alt="" />
            <Image.Default className={css.game_img} src={img} alt="" />
        </Link>
    );
};
