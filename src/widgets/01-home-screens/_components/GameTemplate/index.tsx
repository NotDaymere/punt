import React from "react";
import { Title } from "shared/components/Title";
import Image from "shared/ui/Image";
import css from "./GameTemplate.module.scss";

interface Props {
    title: string;
    children: React.ReactNode;
    icons?: 1 | 2 | 3;
}

export const GameTemplate: React.FC<Props> = ({
    title,
    children,
    icons
}) => {
    return (
        <div className={css.game}>
            <div className="container">
                <div className={css.game_wrapper}>
                    <Image.Default 
                        className={css.game_background}
                        src="/img/home/game-bg.webp"
                        alt=""
                    />
                    <div className={css.game_title_container}>
                        <Image.Default 
                            className={css.game_title_stars_1}
                            src="/img/home/game-stars.png"
                            alt=""
                        />
                        <Image.Default 
                            className={css.game_title_stars_2}
                            src="/img/home/game-stars.png"
                            alt=""
                        />
                        <div className={css.game_title_box}>
                            <Title className={css.game_title} text={title} animated />
                            {icons === 1 && (
                                <>
                                    <Image.Default 
                                        className={css.game_box_clubs}
                                        src="/img/figures/clubs.svg"
                                        alt=""
                                    />
                                    <Image.Default 
                                        className={css.game_box_hearts}
                                        src="/img/figures/hearts.svg"
                                        alt=""
                                    />
                                </>
                            )}
                            {icons === 2 && (
                                <>
                                    <Image.Default 
                                        className={css.game_box_blueChip}
                                        src="/img/figures/blue-chip.png"
                                        alt=""
                                    />
                                    <Image.Default 
                                        className={css.game_box_greenChip}
                                        src="/img/figures/green-chip.png"
                                        alt=""
                                    />
                                </>
                            )}
                            {icons === 3 && (
                                <>
                                    <Image.Default 
                                        className={css.game_box_clubsRight}
                                        src="/img/figures/clubs.svg"
                                        alt=""
                                    />
                                    <Image.Default 
                                        className={css.game_box_square}
                                        src="/img/figures/square.svg"
                                        alt=""
                                    />
                                </>
                            )}
                        </div>
                    </div>
                    <div className={`${css.game_content} game-template-content`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};