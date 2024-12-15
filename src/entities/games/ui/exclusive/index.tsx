import React from "react";
import Link from "next/link";
import clsx from "clsx";
import Image from "shared/ui/Image";
import css from "./exclusive.module.scss";

interface Props {
    img: string;
    name: string;
    className?: string;
    color?: "green" | "yellow" | "blue";
}

export const Exclusive: React.FC<Props> = ({ img, name, className, color = "green" }) => {
    const text = React.useMemo(() => {
        const segments = name.split(" ");
        if (segments.length === 1) {
            return {
                main: segments.join(" "),
                colored: null,
            };
        }
        const colored = segments.pop();
        return {
            main: segments.join(" "),
            colored,
        };
    }, [name]);
    return (
        <Link className={clsx(css.exclusive, css["_" + color], className)} href="/">
            <span className={css.exclusive_content}>
                <Image.Default className={css.exclusive_img} src={img} alt="" />
                <span className={css.exclusive_text}>
                    {text.main} {text.colored && <span>{text.colored}</span>}
                </span>
            </span>
        </Link>
    );
};
