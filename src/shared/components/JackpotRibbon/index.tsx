import React from "react";
import clsx from "clsx";
import css from "./JackpotRibbon.module.scss";
import Image from "shared/ui/Image";

interface Props {
    type: "minor" | "major" | "mega" | "grand";
    children: React.ReactNode;
    className?: string;
}

export const JackpotRibbon: React.FC<Props> = ({ children, type, className }) => {
    return (
        <div className={clsx(css.ribbon, css["_" + type], className)}>
            <Image.Default 
                className={css.ribbon_left}
                src="/img/components/ribbon-left.svg"
                alt=""
            />
            <Image.Default 
                className={css.ribbon_right}
                src="/img/components/ribbon-left.svg"
                alt=""
            />
            <div className={css.ribbon_label}>
                <p className={css.ribbon_label_value}>
                    {children}
                </p>
            </div>
        </div>
    );
};
