import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { Button } from "shared/components/@Buttons/Button";
import Image from "shared/ui/Image";
import css from "./slot.module.scss";

interface Props {
    img: string;
    className?: string;
}

export const Slot: React.FC<Props> = (props) => {
    return (
        <Link
            className={clsx(css.slot, props.className)}
            href="/game/gates-of-olympus"
            prefetch={false}
            data-aspect
        >
            <Image.Default className={css.slot_img} src={props.img} alt="slot" />
            <Image.Default className={css.slot_glare} src="/img/components/slot-glare.png" alt="" />
            <Button className={css.slot_btn} component="span" variant="green" circle>
                Play now
            </Button>
        </Link>
    );
};
