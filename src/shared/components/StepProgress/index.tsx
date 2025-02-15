import React from "react";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import css from "./StepProgress.module.scss";

interface Props {
    steps: number;
    currentStep: number;
    active?: boolean;
    duration?: number;
    onClick?: (step: number) => void;
    onComplete?: () => void;
    className?: string;
}

export const StepProgress: React.FC<Props> = ({
    steps,
    className,
    onClick,
    active,
    duration = 15,
    currentStep,
    onComplete
}) => {
    const rootRef = React.useRef<HTMLDivElement>(null);
    const tween = React.useRef<gsap.core.Tween | null>(null);

    useGSAP(
        () => {
            tween.current = gsap.to(`.step-${currentStep} .step-progress`, {
                x: 0,
                duration,
                onComplete,
                paused: !active
            });
        },
        { scope: rootRef }
    );

    React.useEffect(() => {
        if (tween.current) {
            if(active) {
                tween.current.restart()
            } else {
                tween.current.pause();
            }
        }
    }, [active]);

    return (
        <div className={clsx(css.steps, className)} ref={rootRef}>
            <ul className={css.steps_list} style={{ gridTemplateColumns: `repeat(${steps}, 1fr)` }}>
                {Array.from({ length: steps }).map((_, step) => (
                    <li
                        className={clsx(
                            `${css.steps_item} step-${step}`,
                            step < currentStep && css._active
                        )}
                        onClick={() => onClick?.(step)}
                        key={step}
                    >
                        <span className={css.steps_item_inner}>
                            <span className="step-progress" />
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
