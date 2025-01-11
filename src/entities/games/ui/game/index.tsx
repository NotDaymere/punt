import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { Button } from "shared/components/@Buttons/Button";
import GameFrameIcon from "shared/icons/GameFrame.icon";
import Image from "shared/ui/Image";
import css from "./game.module.scss";

interface Props {
    img: string;
    className?: string;
}

export const Game: React.FC<Props> = ({ img, className }) => {
    return (
        <Link className={clsx(css.game, className)} href="/game/gates-of-olympus" prefetch={false}>
            <GameFrameIcon className={css.game_svg} />
            <Image.Default className={css.game_frame} src="/img/figures/game-frame.svg" alt="" />
            <Image.Default className={css.game_img} src={img} alt="" />
            <Button className={css.game_btn} component="span" variant="green" circle>
                Play now
            </Button>
        </Link>
    );
};
