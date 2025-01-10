import React from "react";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import Image from "shared/ui/Image";
import css from "./Wheel.module.scss";

interface Props {
    id?: string;
    className?: string;
    onClickButton?: () => void;
    disabled?: boolean;
}

export const Wheel = React.forwardRef<HTMLImageElement, Props>(
    ({ className, id, onClickButton, disabled }, ref) => {
        return (
            <div className={clsx(css.wheel, className)} id={id}>
                <div className={css.wheel_circle}>
                    <div className={css.wheel_wheel}>
                        <Image.Default 
                            ref={ref} 
                            src="/img/home/wheel/wheel-main@2x.webp" 
                            alt="" 
                        />
                    </div>
                    <Image.Default 
                        className={css.wheel_lights}
                        src="/img/home/wheel/lights.webp"
                        alt=""
                    />
                    <Image.Default
                        className={css.wheel_point}
                        src="/img/home/wheel/point.png"
                        alt=""
                    />
                    <div className={css.wheel_button_container}>
                        <Image.Default
                            className={`${css.wheel_button_arrow} wheel-button-arrow`}
                            src="/img/home/wheel/arrow.svg"
                            alt=""
                        />
                        <button 
                            className={css.wheel_button} 
                            onClick={onClickButton}
                            disabled={disabled}
                        >
                            <Image.Default src="/img/home/wheel/button.png" alt="" />
                        </button>
                    </div>
                </div>
                <div className={css.wheel_leg}>
                    <Image.Default
                        className={css.wheel_leg_img}
                        src="/img/home/wheel/leg.webp"
                        alt=""
                    />
                </div>
            </div>
        );
    }
);
