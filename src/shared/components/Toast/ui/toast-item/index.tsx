import React from "react";
import clsx from "clsx";
import gsap from "gsap";
import { ToastData, useToast } from "../../lib";
import CrossIcon from "shared/icons/Cross.icon";
import Image from "shared/ui/Image";
import css from "./toast-item.module.scss";

interface Props {
    data: ToastData;
}

export const ToastItem: React.FC<Props> = ({ data }) => {
    const toast = useToast();
    const rootRef = React.useRef<HTMLDivElement>(null);
    const progressbarRef = React.useRef<HTMLSpanElement>(null);
    const timeoutRef = React.useRef<NodeJS.Timeout>(null);

    const progressTween = React.useRef<gsap.core.Tween>(null);

    const removeFromList = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            progressTween.current?.kill();

            timeoutRef.current = null;
            progressTween.current = null;

            gsap.set(progressbarRef.current, { scaleX: 1 });
        }
        gsap.to(rootRef.current, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                toast.removeFromList(data.id);
            },
        });
    };

    React.useEffect(() => {
        gsap.to(rootRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            onComplete: () => {
                timeoutRef.current = setTimeout(() => removeFromList(), data.duration);
                progressTween.current = gsap.to(progressbarRef.current, {
                    scaleX: 1,
                    ease: "none",
                    duration: data.duration / 1000
                })
            },
        });
    }, []);

    return (
        <div className={clsx(css.toast, data.type === "error" && css._error)} ref={rootRef}>
            <Image.Default
                className={css.toast_icon}
                src={
                    data.type === "error"
                        ? "/img/icons/toast-error.svg"
                        : "/img/icons/toast-success.svg"
                }
                alt=""
            />
            <div className={css.toast_inner}>
                <div className={css.toast_content}>
                    <div className={css.toast_content_inner}>
                        <h3 className={css.toast_content_title}>{data.title}</h3>
                        <p
                            className={css.toast_content_text}
                            dangerouslySetInnerHTML={{
                                __html: data.content,
                            }}
                        />
                    </div>
                    <button className={css.toast_remover} onClick={removeFromList}>
                        <CrossIcon />
                    </button>
                </div>
                <div className={css.toast_progressbar}>
                    <span ref={progressbarRef} />
                </div>
            </div>
        </div>
    );
};
