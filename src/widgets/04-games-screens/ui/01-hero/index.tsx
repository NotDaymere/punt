import React from "react";
import Link from "next/link";
import { useGamesNav } from "widgets/04-games-screens/lib";
import { gameCategories } from "widgets/04-games-screens/lib/games-navigation";
import { Navigation } from "shared/components/Navigation";
import { SearchInput } from "shared/components/SearchInput";
import { SelectProvider } from "shared/components/SelectProvider";
import { SortGamesBy } from "shared/components/SortGamesBy";
import { Title } from "shared/components/Title";
import { useInput } from "shared/hooks/use-input";
import SettingsIcon from "shared/icons/Settings.icon";
import Image from "shared/ui/Image";
import css from "./hero.module.scss";

export const Hero: React.FC = () => {
    const { navigation, changeActiveNav, navActive } = useGamesNav();
    const { value, typingValue, setValue } = useInput({ timeout: 1000 });

    return (
        <section className={css.hero}>
            <div className={css.hero_nav}>
                <div className="container">
                    <Navigation
                        className={css.hero_nav_list}
                        activeId={navActive.id}
                        onClick={changeActiveNav}
                        data={navigation}
                    />
                </div>
            </div>
            <div className="container">
                <div className={css.hero_wrapper}>
                    <div className={css.hero_filters}>
                        <SearchInput
                            className={css.hero_filter_input}
                            value={typingValue}
                            onChange={setValue}
                            placeholder="Search your game..."
                        />
                        <div className={css.hero_filters_buttons}>
                            <div className={css.hero_filters_item}>
                                <p className={css.hero_filters_name}>Filter by:</p>
                                <SelectProvider />
                            </div>
                            <div className={css.hero_filters_item}>
                                <SettingsIcon />
                                <p className={css.hero_filters_name}>Sort by:</p>
                                <SortGamesBy />
                            </div>
                        </div>
                    </div>
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
