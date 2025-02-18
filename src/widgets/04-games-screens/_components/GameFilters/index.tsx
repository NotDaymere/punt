import React from "react";
import clsx from "clsx";
import { SearchInput } from "shared/components/SearchInput";
import { SelectProvider } from "shared/components/SelectProvider";
import { SortGamesBy } from "shared/components/SortGamesBy";
import { useInput } from "shared/hooks/use-input";
import CrossIcon from "shared/icons/Cross.icon";
import SettingsIcon from "shared/icons/Settings.icon";
import { parseValue } from "shared/utils/parseValue";
import css from "./GameFilters.module.scss";

interface Props {
    className?: string;
}

export const GameFilters: React.FC<Props> = ({ className }) => {
    const { typingValue, setValue } = useInput({ timeout: 1000 });
    const [hints, setHints] = React.useState<string[]>([]);
    const [activeHints, setActiveHints] = React.useState(false);
    const rendered = React.useRef(false);

    React.useEffect(() => {
        setHints(parseValue(localStorage.getItem("gameSearch"), []));
        rendered.current = true;
    }, []);

    React.useEffect(() => {
        if (rendered.current) {
            localStorage.setItem("gameSearch", JSON.stringify(hints));
        }
    }, [hints]);

    const handleBlur = (value: string) => {
        if (value.length > 0) {
            setHints([
                value,
                ...hints.filter((item) => item.toLowerCase() !== value.toLowerCase()),
            ]);
        }
        setActiveHints(false);
    };

    const handleOption = (ev: React.MouseEvent<HTMLParagraphElement>, option: string) => {
        // ev.preventDefault();
        if ((ev.target as HTMLParagraphElement).closest("button")) {
            return;
        }
        setActiveHints(false);
        setValue(option);
    };

    const handleRemove = (option: string) => {
        setHints(hints.filter((item) => item !== option));
    };

    const handleClearAll = () => {
        setHints([]);
    }

    return (
        <div className={clsx(css.gameFilters, className)}>
            <div className={css.hero_filters}>
                <div className={css.hero_filters_field}>
                    <SearchInput
                        className={css.hero_filter_input}
                        value={typingValue}
                        onChange={setValue}
                        onFocus={() => setActiveHints(true)}
                        onBlur={(ev) => handleBlur(ev.target.value)}
                        placeholder="Search your game..."
                    />
                    {activeHints && (
                        <div className={css.hero_dropdown}>
                            <p className={css.hero_dropdown_type}>
                                Type at least 3 letters to start searching
                            </p>
                            {hints.length > 0 && (
                                <React.Fragment>
                                    <div className={css.hero_dropdown_recent}>
                                        <p className={css.hero_dropdown_recent_title}>Recent</p>
                                        {hints.map((hint) => (
                                            <p
                                                className={css.hero_dropdown_recent_option}
                                                onClick={(ev) => handleOption(ev, hint)}
                                                onPointerDown={(ev) => ev.preventDefault()}
                                                key={hint}
                                            >
                                                <span>{hint}</span>
                                                <button onClick={(ev) => handleRemove(hint)}>
                                                    <CrossIcon />
                                                </button>
                                            </p>
                                        ))}
                                    </div>
                                    <button 
                                        className={css.hero_dropdown_clearAll}
                                        onClick={handleClearAll}
                                    >
                                        Clear All
                                    </button>
                                </React.Fragment>
                            )}
                        </div>
                    )}
                </div>
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
