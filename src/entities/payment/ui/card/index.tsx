import React from "react";
import clsx from "clsx";
import TrashIcon from "shared/icons/Trash.icon";
import Image from "shared/ui/Image";
import css from "./card.module.scss";

interface Props {
    number: string;
    type?: "visa" | "mastercard";
    active?: boolean;
    onSelect?: () => void;
    onDelete?: () => void;
}

export const Card: React.FC<Props> = ({ number, active, type = "visa", onDelete, onSelect }) => {
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
            <div className={css.card_card}>
                <Image.Default src="/img/components/visa-white.svg" alt="" />
            </div>
            <div className={css.card_info}>
                <p className={css.card_info_title}>Debit Card:</p>
                <p className={css.card_info_number}>{number.slice(0, 4)} XXXX XXXX XXXX</p>
            </div>
            <button className={css.card_removeBtn} onClick={onDelete}>
                <TrashIcon />
            </button>
        </div>
    );
};
