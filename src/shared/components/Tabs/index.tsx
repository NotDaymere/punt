import React from "react";
import css from "./Tabs.module.scss";
import clsx from "clsx";

export interface TabData {
    name: string;
    value: string | number;
}

interface Props {
    data: TabData[];
    value: TabData;
    onChange: (value: TabData) => void;
    className?: string;
}

export function Tabs({
    data,
    className,
    value,
    onChange,
}: Props) {
    return (
        <div className={clsx(css.tabs, className)}>
            {data.map((item) => (
                <button 
                    className={css.tabs_item} 
                    disabled={item.value === value.value}
                    onClick={() => onChange(item)}
                    key={item.value}
                >
                    {item.name}
                </button>
            ))}
        </div>
    );
};