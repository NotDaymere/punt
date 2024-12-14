import React from "react";
import css from "./slot.module.scss";
import Link from "next/link";
import Image from "shared/ui/Image";

interface Props {
    img: string;
}

export const Slot: React.FC<Props> = (props) => {
    return (
        <Link href="/" className={css.slot}>
            <Image.Default 
                className={css.slot_img}
                src={props.img}
                alt="slot"
            />
            <Image.Default 
                className={css.slot_glare}
                src="/img/components/slot-glare.png"
                alt=""
            />
        </Link>
    );
};