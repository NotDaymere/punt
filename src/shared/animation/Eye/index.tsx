import React from "react";
import clsx from "clsx";
import { EyeFollower } from "./lib";
import css from "./Eye.module.scss";

interface Props {
    className?: string;
}

export const Eye: React.FC<Props> = ({ className }) => {
    const pointRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if(pointRef.current) {
            const follower = new EyeFollower(pointRef.current);
            return () => follower.destroy();
        }
    }, []);

    return (
        <div className={clsx(css.eye, className)}>
            <div className={css.eye_point} ref={pointRef} />
        </div>
    );
};