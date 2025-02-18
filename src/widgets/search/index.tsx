import React from "react";
import { useGamesNav } from "widgets/04-games-screens";
import { GameFilters } from "widgets/04-games-screens/_components";
import { CloseButton } from "shared/components/@Buttons/CloseButton";
import { Navigation } from "shared/components/Navigation";
import { Modal } from "shared/ui/Modal";
import css from "./search.module.scss";
import { Game } from "entities/games";

const images = Array.from({ length: 32 }).map(() => {
    const idx = Math.floor(Math.random() * 6) + 1;
    return `/img/temp/games-${idx}.jpg`;
});

export const Search: React.FC = () => {
    const { navigation } = useGamesNav();
    const [currentNav, setCurrentNav] = React.useState(navigation[0]);

    return (
        <Modal
            name="search"
            transitionCSS={css}
            timeout={300}
            className={css.modal_window}
            hideOnClickOutside
            closeOnRouterChange
            overflow
        >
            {({ close }) => (
                <div className={css.modal}>
                    <header className={css.modal_header}>
                        <p className={css.modal_header_title}>Explore</p>
                        <CloseButton className={css.modal_header_closeBtn} onClick={close} />
                    </header>

                    <GameFilters className={css.modal_filters} />

                    <Navigation
                        className={css.modal_nav}
                        activeId={currentNav.id}
                        onClick={(tab) => setCurrentNav(tab)}
                        data={navigation}
                    />

                    <div className={css.modal_games}>
                        {images.map((img) => (
                            <Game className={css.modal_games_item} img={img} key={img} />
                        ))}
                    </div>
                </div>
            )}
        </Modal>
    );
};
