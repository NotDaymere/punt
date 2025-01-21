import React from "react";
import { CATEGORIES_ENUM } from "widgets/04-games-screens/lib/games-navigation";
import { Button } from "shared/components/@Buttons/Button";
import { Breadcrumbs } from "shared/components/Breadcrumbs";
import ArrowRightMediumIcon from "shared/icons/ArrowRightMedium.icon";
import Image from "shared/ui/Image";
import css from "./hero.module.scss";

export const Hero: React.FC = () => {
    return (
        <div className={css.hero}>
            <div className="container">
                <div className={css.hero_breadcrumbs_container}>
                    <Breadcrumbs
                        className={css.hero_breadcrumbs}
                        navigation={[
                            { name: "Home Page", href: "/" },
                            { name: "Slot Games", href: `/games/${CATEGORIES_ENUM.SLOT_GAMES}` },
                            { name: "Gates of Olympus" },
                        ]}
                    />
                </div>
                <div className={css.hero_image_container}>
                    <Button
                        className={css.hero_image_btn}
                        href={`/games/${CATEGORIES_ENUM.SLOT_GAMES}`}
                        component="a"
                    >
                        <ArrowRightMediumIcon />
                        Back
                    </Button>
                    <Image.Default className={css.hero_image} src="/img/temp/buffalo.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};
