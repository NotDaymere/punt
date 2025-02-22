import React from "react";
import Link from "next/link";
import clsx from "clsx";
import Image from "shared/ui/Image";
import css from "./promotion-item.module.scss";

interface Props {
    image: string;
    deadline: string;
    title: string;
    url?: string;
    className?: string;
}

export const PromotionItem: React.FC<Props> = ({ deadline, image, title, url, className }) => {
    return (
        <Link className={clsx(css.promo, className)} href={url || "#"} prefetch={false}>
            <span className={`${css.promo_img} promo-img`}>
                <Image.Default src={image} alt="" />
            </span>
            <span className={css.promo_deadline}>{deadline}</span>
            <span className={css.promo_title}>{title}</span>
        </Link>
    );
};
