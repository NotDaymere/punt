import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { Button } from "shared/components/@Buttons/Button";
import Image from "shared/ui/Image";
import css from "./live-dealer.module.scss";

interface Props {
    img: string;
    className?: string;
}

export const LiveDealer: React.FC<Props> = (props) => {
    return (
        <Link
            className={clsx(css.dealer, props.className)}
            href="/game/gates-of-olympus"
            prefetch={false}
        >
            <span className={css.dealer_content} data-aspect>
                <Image.Default className={css.dealer_img} src={props.img} alt="" />
            </span>
            <Button className={css.dealer_btn} component="span" variant="green" circle>
                Play now
            </Button>
        </Link>
    );
};
