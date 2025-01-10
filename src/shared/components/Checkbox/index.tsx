import React from "react";
import clsx from "clsx";
import MarkIcon from "shared/icons/Mark.icon";
import css from "./Checkbox.module.scss";

interface Props {
    name?: string;
    checked?: boolean;
    value?: string | number;
    className?: string;
    onChange?: (checked?: boolean) => void;
    text?: string;
    id: string;
}

export const Checkbox: React.FC<Props> = ({
    onChange,
    checked,
    className,
    name,
    text,
    value,
    id,
}) => {
    return (
        <label className={clsx(css.checkbox, className)} htmlFor={id}>
            <input
                className={css.checkbox_input}
                checked={checked}
                value={value}
                onChange={(ev) => onChange?.(ev.target.value as any)}
                id={id}
                type="checkbox"
            />
            <div className={css.checkbox_content}>
                <div className={css.checkbox_block}>
                    <MarkIcon />
                </div>
                {text && <p className={css.checkbox_text}>{text}</p>}
            </div>
        </label>
    );
};
