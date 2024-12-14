import React from "react";
import clsx from "clsx";
import css from "./Chapter.module.scss";
import Image from "shared/ui/Image";

interface Props {
    color: "red" | "yellow" | "blue";
    label: string;
    title: string;
    image: string;
}

export const Chapter: React.FC<Props> = ({ color, image, label, title }) => {
    return (
        <div className={clsx(css.chapter, css["_" + color])}>
            <div className={css.chapter_content}>
                <svg
                    className={css.chapter_svg}
                    viewBox="0 0 232 85"
                    stroke="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M232 0C232 30.4773 77.3333 69.3655 0 85H232V0Z" stroke="none" />
                </svg>
                <Image.Default 
                    className={css.chapter_image}
                    src={image}
                    alt=""
                />
                <p className={css.chapter_content_label}>{label}</p>
                <p className={css.chapter_content_title}>{title}</p>
            </div>
        </div>
    );
};
