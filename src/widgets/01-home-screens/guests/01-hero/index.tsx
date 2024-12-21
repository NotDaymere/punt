import React from "react";
import { Title } from "shared/components/Title";
import { Button } from "shared/components/@Buttons/Button";
import Image from "shared/ui/Image";
import css from "./hero.module.scss";
import StarIcon from "shared/icons/Star.icon";

export const Hero: React.FC = () => {
    return (
        <div className={css.hero}>
            <div className="container">
                {/* UI / Figures */}
                <Image.Default 
                    className={css.hero_figure_square}
                    src="/img/figures/square.svg"
                    alt=""
                />
                <Image.Default 
                    className={css.hero_figure_clubs}
                    src="/img/figures/clubs.svg"
                    alt=""
                />
                <Image.Default 
                    className={css.hero_figure_hearts}
                    src="/img/figures/hearts.svg"
                    alt=""
                />
                <StarIcon className={css.hero_figure_star_1}/>
                <StarIcon className={css.hero_figure_star_2}/>
                <StarIcon className={css.hero_figure_star_3}/>
                <StarIcon className={css.hero_figure_star_4}/>
                {/* Content */}
                <div className={css.hero_wrapper}>
                    <Title 
                        level={1}
                        className={css.hero_title}
                        text="#1 Free -To - Play"
                    />
                    <Title 
                        level={2}
                        className={css.hero_casino}
                        text="Social Casino"
                        variant="yellow"
                    />
                    <div className={css.hero_button_container}>
                        <Button 
                            className={css.hero_button} 
                            variant="green"
                        >
                            Play for Free!
                        </Button>
                        <span className={css.hero_button_outlines} />
                        <Image.Default 
                            className={css.hero_button_smile}
                            src="/img/home/hearts-smile.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};