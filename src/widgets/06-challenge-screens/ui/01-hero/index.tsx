import React from "react";
import { Breadcrumbs } from "shared/components/Breadcrumbs";
import { Title } from "shared/components/Title";
import css from "./hero.module.scss";
import Image from "shared/ui/Image";

export const Hero: React.FC = () => {
    return (
        <section className={css.hero} id="hero">
            <div className="container">
                <Breadcrumbs navigation={[
                    { name: "Home Page", href: "/" },
                    { name: "Challenges" }
                ]}/>
                <div className={css.hero_title_container}>
                    <Title.V2 className={css.hero_title}>
                        Challenges
                    </Title.V2>
                    <Image.Default
                        className={css.hero_title_join}
                        src="/img/figures/join-game.svg"
                        alt="join the game"
                    />
                </div>
            </div>
        </section>
    );
};