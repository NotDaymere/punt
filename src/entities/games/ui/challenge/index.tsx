import React from "react";
import Image from "shared/ui/Image";
import { Button } from "shared/components/@Buttons/Button";
import { Discount } from "shared/components/Discount";
import css from "./challenge.module.scss";

interface Props {
    img: string;
    name: string;
    content: string;
    prize?: string;
}

export const Challenge: React.FC<Props> = ({
    content,
    img,
    name,
    prize
}) => {
    return (
        <div className={css.challenge}>
            <div className={css.challenge_inner}>
                <svg 
                    className={css.challenge_svg}
                    viewBox="0 0 182 136" 
                    stroke="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        d="M182 0.128906C182 48.534 60.6667 110.298 0 135.129H162C173.046 135.129 182 126.175 182 115.129V0.128906Z" 
                        stroke="none"
                    />
                </svg>
                <div className={css.challenge_content}>
                    <Image.Default 
                        className={css.challenge_img} 
                        src={img} 
                        alt="" 
                    />
                    <div className={css.challenge_info}>
                        <p className={css.challenge_info_title}>{name}</p>
                        <p className={css.challenge_info_content}
                            dangerouslySetInnerHTML={{
                                __html: content
                            }}
                        />
                        <Button 
                            className={css.challenge_content_btn}
                            variant="green"
                            component="a" 
                            href="/" 
                            circle
                        >
                            Join
                        </Button>
                    </div>
                </div>
            </div>
            {prize && (
                <Discount 
                    className={css.challenge_prize}
                    variant="yellow"
                >
                    <span className={css.challenge_prize_title}>
                        Prize <Image.Default src="/img/icons/gc.svg" alt="" />
                    </span>
                    <span className={css.challenge_prize_value}>
                        {prize}
                    </span>
                </Discount>
            )}
        </div>
    );
};