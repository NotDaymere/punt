import React from "react";
import css from "./promotion-item.module.scss";
import Link from "next/link";
import clsx from "clsx";
import Image from "shared/ui/Image";

interface Props {
    image: string;
    deadline: string;
    title: string;
    url?: string;
    className?: string;
}

export const PromotionItem: React.FC<Props> = ({
    deadline,
    image,
    title,
    url,
    className
}) => {
    return (
        <Link className={clsx(css.promo, className)} href={url || "#"}>
            <span className={css.promo_img}>
                <Image.Default src={image} alt="" />
            </span>
            <span className={css.promo_deadline}>{deadline}</span>
            <span className={css.promo_title}>{title}</span>
        </Link>
    );
};