import React from "react";
import clsx from "clsx";
import { useClickOutside } from "shared/hooks/use-click-outside";
import ArrowSmallUpIcon from "shared/icons/ArrowSmallUp.icon";
import SettingsIcon from "shared/icons/Settings.icon";
import css from "./SortChallengesBy.module.scss";

interface Props {}

export const SortChallengesBy: React.FC<Props> = (props) => {
    const [active, setActive] = React.useState(false);
    const ref = useClickOutside(() => setActive(false));

    const toggle = () => setActive(!active);

    return (
        <div className={clsx(css.select, active && css._active)} ref={ref}>
            <div className={css.select_static}>
                <SettingsIcon /> Sort by:
            </div>
            <button className={css.select_btn} onClick={toggle}>
                Multiplier
                <ArrowSmallUpIcon style={{ transform: active ? undefined : "scaleY(-1)" }} />
            </button>
        </div>
    );
};
