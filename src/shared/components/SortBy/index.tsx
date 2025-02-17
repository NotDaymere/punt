import React from "react";
import clsx from "clsx";
import ArrowSmallUpIcon from "shared/icons/ArrowSmallUp.icon";
import SettingsIcon from "shared/icons/Settings.icon";
import { Button, Option, Select } from "shared/ui/Select";
import css from "./SortBy.module.scss";

export interface SortByItem {
    value: string;
    name: string;
}

interface Props {
    value: SortByItem | null;
    options: SortByItem[];
    onChange: (value: SortByItem | null) => void;
    label?: string;
    placeholder?: string;
    className?: string;
}

export const SortBy: React.FC<Props> = ({
    onChange,
    value,
    className,
    options,
    label,
    placeholder,
}) => {
    return (
        <div className={clsx(css.sortBy, className)}>
            {label && (
                <p className={css.sortBy_label}>
                    <SettingsIcon /> {label}
                </p>
            )}
            <Select
                className={css.select}
                classNameDropdown={css.select_dd}
                classNameOption={css.select_dd_option}
                onChange={onChange}
            >
                <Button className={css.select_btn}>
                    {value?.name || placeholder || "Select"} <ArrowSmallUpIcon />
                </Button>
                {options.map((option) => (
                    <Option value={option} key={option.value}>
                        {option.name}
                    </Option>
                ))}
            </Select>
        </div>
    );
};
