import React from "react";
import clsx from "clsx";
import SearchIcon from "shared/icons/Search.icon";
import css from "./SearchInput.module.scss";

interface Props {
    className?: string;
    onChange?: (value: string) => void;
    onBlur?: (ev: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (ev: React.FocusEvent<HTMLInputElement>) => void;
    value?: string;
    placeholder?: string;
}

export const SearchInput: React.FC<Props> = ({
    className,
    onChange,
    value,
    placeholder,
    onBlur,
    onFocus,
}) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const focus = () => inputRef.current?.focus();

    return (
        <div className={clsx(css.input, className)} onClick={focus}>
            <SearchIcon />
            <input
                ref={inputRef}
                value={value}
                onChange={(ev) => onChange?.(ev.target?.value)}
                placeholder={placeholder}
                onBlur={onBlur}
                onFocus={onFocus}
            />
        </div>
    );
};
