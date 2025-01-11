import React from "react";
import Link from "next/link";
import { gameCategories } from "widgets/04-games-screens/lib/games-navigation";
import { Title } from "shared/components/Title";
import Image from "shared/ui/Image";
import css from "./Hero.module.scss";

export const Hero: React.FC = () => {
    return (
        <section className={css.hero}>
            <div className="container">
                <div className={css.hero_wrapper}>
                    <Title.V2 className={css.hero_title}>
                        Play & Win: <Image.Default src="/img/temp/game-title-img-1.png" alt="" />
                        <Image.Default src="/img/temp/game-title-img-2.png" alt="" /> Explore Our
                        Full Game Collection
                    </Title.V2>
                    <p className={css.hero_text}>
                        Find Your Favorite Games by Category – The Best Picks Just for You!
                    </p>
                    <div className={css.hero_categories}>
                        {gameCategories.map((category) => (
                            <Link className={css.hero_categories_item} key={category.name} href="#">
                                <Image.Default src={category.img} alt={category.name} />
                                <span style={{ color: category.color }}>{category.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
