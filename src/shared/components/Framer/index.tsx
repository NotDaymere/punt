import React from "react";
import clsx from "clsx";
import { FramerCore } from "./lib";
import Image from "shared/ui/Image";
import css from "./Framer.module.scss";

interface Props {
    frames: string[];
    alt?: string;
    className?: string;
}

export const Framer = React.forwardRef<FramerCore, Props>(({
    frames,
    alt = "",
    className,
}, ref) => {
    const imageRef = React.useRef<HTMLImageElement>(null);

    React.useEffect(
        () => {
            if(imageRef.current) {
                const framer = new FramerCore(imageRef.current, frames);
                if(ref && typeof ref === 'function') {
                    ref(framer);
                }
                if(ref && typeof ref === 'object') {
                    ref.current = framer;
                }
                return () => framer.destroy();
            }
        },
        [frames]
    );

    return (
        <div className={clsx(css.framer, className)}>
            <Image.Default ref={imageRef} src={frames[0]} alt={alt} />
        </div>
    );
});