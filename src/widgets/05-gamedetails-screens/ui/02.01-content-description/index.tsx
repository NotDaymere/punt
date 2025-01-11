import React from "react";
import Image from "shared/ui/Image";
import css from "./content-description.module.scss";

export const ContentDescription: React.FC = () => {
    return (
        <div className={css.description}>
            <div className="container">
                <div className={css.description_content}>
                    <div className={css.description_content_item} data-title="About">
                        <div className={css.markdown}>
                            <p>
                                Explore the wild in the Buffalo King slot, offering 4,096 ways to
                                win and buffaloes stacked on the reels to bring even bigger wins.
                                You can win up to 100 free spins in this Pragmatic Play slot game
                                with wild multipliers and frequent retriggers.
                            </p>
                            <ul>
                                <li>Trigger 100 Free Spins</li>
                                <li>Get Multiplying Wilds</li>
                                <li>Win Up to 93,750x</li>
                            </ul>
                            <p>Features: Scatters, Wilds, Free Spins</p>
                            <Image.Default src="/img/temp/buffalo-2.jpg" alt="" />
                        </div>
                    </div>
                    <div className={css.description_content_item} data-title="Overview">
                        <div className={css.markdown}>
                            <p>
                                A highly volatile game, Buffalo King fuses a stunning design with
                                captivating mechanics for a thrilling gaming experience. In this
                                6-reel game you can win up to a hundred free spins resulting in a
                                potential prize of 93,750x. Explore more online slots to play for
                                fun!
                            </p>
                            <Image.Default src="/img/temp/buffalo-3.jpg" alt="" />
                        </div>
                    </div>
                    <div className={css.description_content_item} data-title="How Does it Work?">
                        <div className={css.markdown}>
                            <p>
                                Buffalo King features 4,096 ways to win, which are calculated
                                according to the number of reels and reel positions, with this slot
                                being played on a grid of 6x4. You win when symbols land on adjacent
                                reels, starting with the leftmost reel.
                            </p>
                            <p>
                                There are several higher-value symbols that represent animals found
                                in the canyons of the Wild West, where the game plays out. Both the
                                moose and coyote carry a top prize of 6x for six across the reels.
                                While the cougar and eagle offer a slightly higher prize for six of
                                a kind. The buffalo is the most valuable symbol, awarding up to
                                7.5x. Lower-value symbols include the traditional A, K, Q, J, 10,
                                and 9.
                            </p>
                            <p>
                                The rocky outcrop is the wild symbol and can substitute for all
                                other symbols except the golden buffalo bonus. It appears on all
                                reels except reel one. While the gold buffalo coin is the bonus
                                scatter symbol and can land on all reels.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
