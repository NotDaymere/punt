import React from "react";
import clsx from "clsx";
import StarRateIcon from "shared/icons/StarRate.icon";
import TestimontialFrameIcon from "shared/icons/TestimontialFrame.icon";
import Image from "shared/ui/Image";
import css from "./testimontial-item.module.scss";

interface Props {
    rate: number;
    review: string;
    person_img: string;
    person_name: string;
    person_location: string;
    variant: "black" | "white" | "light-gray" | "light-green" | "light-blue";

    className?: string;
}

export const TestimontialItem: React.FC<Props> = ({
    person_img,
    person_location,
    person_name,
    rate,
    review,
    variant,
    className,
}) => {
    return (
        <div className={clsx(css.testimontial, css["_" + variant], className)}>
            <TestimontialFrameIcon className={css.testimontial_bottom} />
            <div className={css.testimontial_rate}>
                {[1, 2, 3, 4, 5].map((star) => (
                    <StarRateIcon
                        className={clsx(css.testimontial_rate_item, star <= rate && css._active)}
                        key={star}
                    />
                ))}
            </div>
            <p className={css.testimontial_review}>{review}</p>
            <div className={css.testimontial_person}>
                <div className={css.testimontial_person_img}>
                    <Image.Default src={person_img} alt="" />
                </div>
                <div className={css.testimontial_person_col}>
                    <p className={css.testimontial_person_name}>{person_name}</p>
                    <p className={css.testimontial_person_location}>{person_location}</p>
                </div>
            </div>
        </div>
    );
};
