import React, { JSX } from "react";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { TextSplitter } from "shared/ui/TextSplitter";
import css from "./Title.module.scss";
import { getTitleAnimationOptions } from "shared/animation/utils";

interface Props {
    text: string;
    className?: string;
    variant?: "yellow" | "green";
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    animated?: boolean | "manual";
    animationDelay?: number;
    animationLabel?: string | number;
}

const TitleDef = React.forwardRef<gsap.core.Timeline, Props>(({
    level = 2,
    variant = "green",
    text,
    className,
    animated,
    animationDelay = 0,
    animationLabel = 0,
}, outRef) => {
    const ref = React.useRef<any>(null);
    const Tag: keyof JSX.IntrinsicElements = `h${level}`;

    useGSAP(
        () => {
            if (animated === true) {
                const animationOptions = {
                    ...getTitleAnimationOptions(),
                    delay: animationDelay,
                };

                const timeline = gsap
                    .timeline({
                        scrollTrigger: {
                            trigger: ref.current,
                            start: "top 70%",
                            invalidateOnRefresh: true,
                            once: true,
                        },
                    })
                    .to(
                        ".title-span-1 span", 
                        animationOptions, 
                        animationLabel
                    )
                    .to(
                        ".title-span-2 span", 
                        animationOptions, 
                        animationLabel
                    );

                if(outRef) {
                    if(typeof outRef === "object") {
                        outRef.current = timeline;
                    }
                    if(typeof outRef === "function") {
                        outRef(timeline);
                    }
                }
                
            }
        },
        { scope: ref }
    );

    return (
        <Tag
            ref={ref}
            className={clsx(css.title, css["_" + variant], className, animated && css._animated)}
            data-title={animated ? undefined : text}
        >
            {!animated && text}
            {animated && (
                <>
                    <span className={css.title_back}>
                        <TextSplitter
                            className="title-span title-span-1"
                            tagName="span"
                            text={text}
                            splitter=""
                        />
                    </span>
                    <span className={css.title_main}>
                        <TextSplitter
                            className="title-span title-span-2"
                            tagName="span"
                            text={text}
                            splitter=""
                        />
                    </span>
                </>
            )}
        </Tag>
    );
});

interface PropsV2 {
    children: React.ReactNode;
    className?: string;
    variant?: "yellow" | "green";
    level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const V2: React.FC<PropsV2> = ({ level = 2, variant = "green", children, className }) => {
    const Tag: keyof JSX.IntrinsicElements = `h${level}`;

    return (
        <Tag className={clsx(css.title_v2, css["_" + variant], className)}>
            {children}
            <i className={css.title_v2_span}>{children}</i>
        </Tag>
    );
};

const Title = Object.assign(TitleDef, { V2 });

export { Title };
