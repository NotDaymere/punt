import React from "react";
import clsx from "clsx";
import { Button } from "../@Buttons/Button";
import { Discount } from "../Discount";
import { Title } from "../Title";
import css from "./PlayFree.module.scss";

interface Props {
    className?: string;
}

export const PlayFree: React.FC<Props> = ({ className }) => {
    return (
        <div className={clsx(css.play, className)}>
            <div className={css.play_main}>
                <Title className={css.play_title} variant="yellow" text="Play Free to play games" />
                <Discount
                    className={css.play_discount}
                    classNameContent={css.play_discount_content}
                >
                    Free
                </Discount>
            </div>
            <Button className={css.play_btn} circle>
                How It works
            </Button>
        </div>
    );
};
