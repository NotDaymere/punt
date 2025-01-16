import React from "react";
import clsx from "clsx";
import { SkewCard } from "entities/challenge/lib";
import { Discount } from "shared/components/Discount";
import Image from "shared/ui/Image";
import css from "./challenge-item.module.scss";

interface Props {
    img: string;
    prize: number;
    title: string;
    text: string;
    className?: string;
    claimedBy?: string;
}

export const ChallengeItem: React.FC<Props> = ({
    img,
    prize,
    text,
    title,
    claimedBy,
    className,
}) => {
    const skewRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const skewEl = skewRef.current;
        if (skewEl) {
            const skewCard = new SkewCard(skewEl);
            return () => {
                skewCard.destroy();
            };
        }
    }, []);

    return (
        <div className={clsx(css.challenge, className)}>
            <div className={css.challenge_animation} ref={skewRef}>
                <div className={css.challenge_block}>
                    <div className={css.challenge_inner}>
                        <div className={css.challenge_img_container}>
                            <Image.Default className={css.challenge_img} src={img} alt="" />
                            <Discount className={css.challenge_discount} variant="yellow">
                                <span className={css.challenge_discount_text}>
                                    Prize <Image.Default src="/img/icons/gc.svg" alt="" />
                                </span>
                                <span className={css.challenge_discount_prize}>
                                    {prize.toFixed(2)}
                                </span>
                            </Discount>
                        </div>
                        <p className={css.challenge_title}>{title}</p>
                        <p
                            className={css.challenge_text}
                            dangerouslySetInnerHTML={{ __html: text }}
                        />
                        {claimedBy && (
                            <div className={css.challenge_claimedBy}>
                                <p className={css.challenge_claimedBy_title}>Claimed By</p>
                                <p className={css.challenge_claimedBy_username}>Jbipolar92</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
