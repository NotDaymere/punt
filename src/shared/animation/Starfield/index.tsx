import React from "react";
import clsx from "clsx";
import { StarfieldCore } from "./lib";
import css from "./Starfield.module.scss";

interface Props {
    className?: string;
}

export const Starfield: React.FC<Props> = ({ className }) => {
    const ref = React.useRef<HTMLCanvasElement>(null);

    React.useEffect(() => {
        if(ref.current) {
            const starfield = new StarfieldCore(ref.current, {
                starColors: [
                    "rgb(215, 255, 130)",
                    "rgb(250, 255, 102)"
                ],
                canvasColor: "rgb(0, 0,0 )",
                numStars: 100,
                trailLength: 0.9,
                // baseSpeed: 0.5,
                accelerationRate: 0.02
            });
            return () => starfield.destroy();
        }
    }, []); 

    return (
        <canvas 
            className={clsx(css.starfield, className)}  
            ref={ref}
        />
    );
};