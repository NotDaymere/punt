import React from "react";
import { Button, Option, Select } from "shared/ui/Select";
import css from "./FormSelect.module.scss";
import Image from "shared/ui/Image";
import clsx from "clsx";

interface Props<T> {
    options: T[];
    value: T | null;
    onChange: (value: T | null) => void;
    renderValue: (value: T) => React.ReactNode;
    getKey: (value: T) => number | string;
    renderButton: (value: T) => React.ReactNode;
    title?: string;
    placeholder?: string;
}

export function FormSelect<T>({
    getKey,
    renderButton,
    onChange,
    options,
    renderValue,
    value,
    title,
    placeholder,
}: Props<T>) {
    return (
        <div className={css.root}>
            {title && (
                <p className={css.title}>{title}</p>
            )}
            <Select 
                className={css.select} 
                classNameButton={css.select_btn}
                classNameDropdown={css.select_dd}
                classNameOption={css.select_dd_option}
                onChange={onChange} 
            >
                <Button className={clsx(css.select_btn, !value && css._placeholder)}>
                    {!value ? (placeholder || "Select") : renderButton(value)}
                    <Image.Default src="/img/icons/arrow-down.svg" alt="" />
                </Button>
                {options.map((option) => (
                    <Option 
                        selected={option === value}
                        value={option as any}
                        key={getKey(option)}
                    >
                        {renderValue(option)}
                    </Option>
                ))}
            </Select>
        </div>
    );
};