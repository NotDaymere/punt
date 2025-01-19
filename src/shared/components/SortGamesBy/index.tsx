import React from "react";
import clsx from "clsx";
import { useClickOutside } from "shared/hooks/use-click-outside";
import ArrowSmallUpIcon from "shared/icons/ArrowSmallUp.icon";
import css from "./SortGamesBy.module.scss";

interface Props {

}

export const SortGamesBy: React.FC<Props> = (props) => {
    const [active, setActive] = React.useState(false);
    const ref = useClickOutside(() => setActive(false));

    const toggle = () => setActive(!active);

    return (
        <div className={clsx(css.select, active && css._active)} ref={ref} data-filter>
            <button className={css.select_btn} onClick={toggle}>
                Featured
                <ArrowSmallUpIcon style={{ transform: active ? undefined : "scaleY(-1)" }} />
            </button>
        </div>
    );
};