import React from "react";
import clsx from "clsx";
import TrashIcon from "shared/icons/Trash.icon";
import css from "./account-number.module.scss";

interface Props {
    number: string;
    active?: boolean;
    onSelect?: () => void;
    onDelete?: () => void;
}

export const AccountNumber: React.FC<Props> = ({ number, active, onDelete, onSelect }) => {
    const handleSelect = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLDivElement;
        if (target.closest("button")) {
            return;
        }
        onSelect?.();
    };
    return (
        <div className={clsx(css.card, active && css._active)} onClick={handleSelect}>
            <div className={css.card_radio} />
            <div className={css.card_info}>
                <p className={css.card_info_title}>Account Number:</p>
                <p className={css.card_info_number}>XXXX{number.slice(-4)}</p>
            </div>
            <button className={css.card_removeBtn} onClick={onDelete}>
                <TrashIcon />
            </button>
        </div>
    );
};
