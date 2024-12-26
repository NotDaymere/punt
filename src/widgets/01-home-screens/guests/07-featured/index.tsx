import React from "react";
import { featuredGames } from "widgets/01-home-screens/mock-data";
import { Button } from "shared/components/@Buttons/Button";
import { Title } from "shared/components/Title";
import Image from "shared/ui/Image";
import LightIcon from "shared/icons/Light.icon";
import css from "./featured.module.scss";

export const Featured: React.FC = () => {
    return (
        <section className={css.featured} id="featured">
            <div className="container">
                <div className={css.featured_wrapper}>
                    <LightIcon className={css.featured_light} />
                    <div className={css.featured_games}>
                        {featuredGames.map((item, id) => {
                            const offset = (id - (featuredGames.length - 1) / 2); 

                            return (
                                <div className={css.featured_games_item} key={item}>
                                    <Image.Default
                                        style={{
                                            transform: `rotate(${offset * 6}deg) translate(${offset * 100}%, -70%) rotate(${offset * 6}deg)`
                                        }}
                                        src={item}
                                        alt=""
                                    />
                                </div>
                            )
                        })}
                    </div>
                    <div className={css.featured_content}>
                        <Title className={css.featured_content_title} text="Featured Games" />
                        <p className={css.featured_content_text}>
                            Explore the hottest games everyone is talking about, handpicked just for
                            you. Dive into thrilling adventures and find your next big win today!
                        </p>
                        <div className={css.featured_button_container}>
                            <Button className={css.featured_button} variant="green">
                                View All Games
                            </Button>
                            <span className={css.featured_button_outlines} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
