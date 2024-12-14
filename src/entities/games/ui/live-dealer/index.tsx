import React from "react";
import Link from "next/link";
import Image from "shared/ui/Image";
import css from "./live-dealer.module.scss";

interface Props {
    img: string;
}

export const LiveDealer: React.FC<Props> = (props) => {
    return (
        <Link href="/" className={css.dealer}>
            <span className={css.dealer_content}>
                <Image.Default 
                    className={css.dealer_img}
                    src={props.img}
                    alt=""
                />
            </span>
        </Link>
    );
};