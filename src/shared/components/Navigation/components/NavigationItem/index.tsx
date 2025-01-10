import React from "react";
import { NavItem } from "../..";
import clsx from "clsx";
import css from "./NavigationItem.module.scss";

type Props = {
    data: NavItem;
    active?: boolean;
    className?: string;
    onClick?: (item: NavItem) => void;
};

export const NavigationItem: React.FC<Props> = ({ data, active, onClick, className }) => {
    return (
        <button
            className={clsx(css.navItem, className, active && css._active)}
            onClick={() => onClick?.(data)}
            data-nav-id={data.id}
        >
            {data.name}
            {data.count && <span>{data.count}</span>}
        </button>
    );
};
