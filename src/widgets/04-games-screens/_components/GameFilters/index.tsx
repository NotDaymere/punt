import React from "react";
import { SearchInput } from "shared/components/SearchInput";
import { SelectProvider } from "shared/components/SelectProvider";
import { SortGamesBy } from "shared/components/SortGamesBy";
import { useInput } from "shared/hooks/use-input";
import SettingsIcon from "shared/icons/Settings.icon";
import css from "./GameFilters.module.scss";

interface Props {}

export const GameFilters: React.FC<Props> = (props) => {
    const { value, typingValue, setValue } = useInput({ timeout: 1000 });

    return (
        <div className={css.gameFilters}>
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
        </div>
    );
};
