import React from "react";
import { Game } from "entities/games";
import { Title } from "shared/components/Title";
import Image from "shared/ui/Image";
import { GameFilters } from "../GameFilters";
import css from "./GameList.module.scss";

interface Props {
    list: string[];
    title: string;
    best?: boolean;
}

export const GameList: React.FC<Props> = ({ list, title, best }) => {
    return (
        <div className={css.games}>
            <div className="container">
                <GameFilters />
                <div className={css.games_title_wrapper}>
                    <Title.V2 className={css.games_title}>{title}</Title.V2>
                    {best && (
                        <Image.Default
                            className={css.games_label}
                            src="/img/labels/best-games.svg"
                            alt=""
                        />
                    )}
                </div>
                <ul className={css.games_list}>
                    {list.map((item, id) => (
                        <li className={css.games_list_item} key={id}>
                            <Game img={item} />
                        </li>
                    ))}
                </ul>

                <p className={css.games_count}>Displaying 30 of 30 games</p>
            </div>
        </div>
    );
};
