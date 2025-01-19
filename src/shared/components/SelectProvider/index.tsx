import React from "react";
import clsx from "clsx";
import { useClickOutside } from "shared/hooks/use-click-outside";
import ArrowSmallUpIcon from "shared/icons/ArrowSmallUp.icon";
import { Checkbox } from "../Checkbox";
import css from "./SelectProvider.module.scss";

interface Props {}

export const SelectProvider: React.FC<Props> = (props) => {
    const [active, setActive] = React.useState(false);
    const ref = useClickOutside(() => setActive(false));

    const toggle = () => setActive(!active);

    return (
        <div className={clsx(css.select, active && css._active)} ref={ref} data-filter>
            <button className={css.select_btn} onClick={toggle}>
                Provider
                <ArrowSmallUpIcon style={{ transform: active ? undefined : "scaleY(-1)" }} />
            </button>
            {active && (
                <div className={css.select_dropdown} data-filter-dropdown>
                    <div className={css.select_dropdown_checkbox}>
                        <Checkbox
                            className={css.select_dropdown_cb}
                            id="pragmatic"
                            value="pragmatic"
                            text="Pragmatic"
                        />
                        <p className={css.select_dropdown_value}>
                            32
                        </p>
                    </div>
                    <div className={css.select_dropdown_checkbox}>
                        <Checkbox
                            className={css.select_dropdown_cb}
                            id="provider_1"
                            value="Provider 1"
                            text="Provider 1"
                        />
                        <p className={css.select_dropdown_value}>
                            8
                        </p>
                    </div>
                    <div className={css.select_dropdown_checkbox}>
                        <Checkbox
                            className={css.select_dropdown_cb}
                            id="provider_2"
                            value="Provider 2"
                            text="Provider 2"
                        />
                        <p className={css.select_dropdown_value}>
                            8
                        </p>
                    </div>
                    <button className={css.select_clearBtn}>
                        Clear All
                    </button>
                </div>
            )}
        </div>
    );
};
