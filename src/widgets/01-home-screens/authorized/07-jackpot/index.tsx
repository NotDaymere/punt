import React from "react";
import { JackpotRibbon } from "shared/components/JackpotRibbon";
import { Title } from "shared/components/Title";
import Image from "shared/ui/Image";
import css from "./jackpot.module.scss";

export const Jackpot: React.FC = () => {
    return (
        <section className={css.jackpot} id="jackpot">
            <div className="container">
                <Title className={css.jackpot_title} text="Progressive Jackpot" />
                <div className={css.jackpot_block}>
                    <Image.Default
                        className={css.jackpot_coins}
                        src="/img/home/jackpot-coins.webp"
                        alt=""
                    />
                    <div className={css.jackpot_content}>
                        <div className={css.jackpot_block_rays}>
                            <Image.Default src="/img/home/jackpot-rays.webp" alt="" />
                        </div>
                        {/* Main */}
                        <Image.Default
                            className={css.jackpot_content_img}
                            src="/img/home/jackpot-jackpot.webp"
                            alt=""
                        />
                        <p className={css.jackpot_content_text}>Minor</p>
                        <JackpotRibbon className={css.jackpot_content_ribbon} type="minor">
                            $48,788.64
                        </JackpotRibbon>
                    </div>
                    <div className={css.jackpot_games_wrapper}>
                        {/* Games left */}
                        <div className={`${css.jackpot_games} ${css._left}`}>
                            <div className={css.jackpot_games_item}>
                                <Image.Default src="/img/temp/jackpot-g-1.jpg" alt="" />
                            </div>
                            <div className={css.jackpot_games_item}>
                                <Image.Default src="/img/temp/jackpot-g-2.jpg" alt="" />
                            </div>
                            <div className={css.jackpot_games_item}>
                                <Image.Default src="/img/temp/jackpot-g-3.jpg" alt="" />
                            </div>
                        </div>
                        {/* Games right */}
                        <div className={`${css.jackpot_games} ${css._right}`}>
                            <div className={css.jackpot_games_item}>
                                <Image.Default src="/img/temp/jackpot-g-1.jpg" alt="" />
                            </div>
                            <div className={css.jackpot_games_item}>
                                <Image.Default src="/img/temp/jackpot-g-2.jpg" alt="" />
                            </div>
                            <div className={css.jackpot_games_item}>
                                <Image.Default src="/img/temp/jackpot-g-3.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
