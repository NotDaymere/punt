import React from "react";
import clsx from "clsx";
import SearchIcon from "shared/icons/Search.icon";
import css from "./SectionInput.module.scss";

interface Props {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
}

export const SectionInput: React.FC<Props> = ({
    onChange,
    value,
    className,
    placeholder = "Search your game...",
}) => {
    return (
        <div className={clsx(css.input, className)}>
            <SearchIcon className={css.input_icon} />
            <input
                className={css.input_input}
                value={value}
                onChange={(ev) => onChange(ev.target.value)}
                type="text"
                placeholder={placeholder}
            />
        </div>
    );
};
