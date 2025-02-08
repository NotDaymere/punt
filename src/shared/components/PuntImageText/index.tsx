import React from "react";
import clsx from "clsx";
import css from "./PuntImageText.module.scss";

interface Props {
    className?: string;
}

export const PuntImageText: React.FC<Props> = ({ className }) => {
    return (
        <span className={clsx(css.punt, className)}>
            <span className={css.punt_letter} style={{ backgroundImage: "url(/img/logo.png)" }} />
            <span className={css.punt_letter} style={{ backgroundImage: "url(/img/logo.png)" }} />
            <span className={css.punt_letter} style={{ backgroundImage: "url(/img/logo.png)" }} />
            <span className={css.punt_letter} style={{ backgroundImage: "url(/img/logo.png)" }} />
        </span>
    );
};
