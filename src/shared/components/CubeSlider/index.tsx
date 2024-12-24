import React from "react";
import clsx from "clsx";
import { CubeSlide } from "./ui";
import { CubeSliderCore } from "./lib/CubeSliderCore";
import css from "./CubeSlider.module.scss";

interface Props {
    className?: string;
    classNameWrapper?: string;
    direction?: "vertical" | "horizontal";
    children?: React.ReactNode;
    onlyWrapper?: boolean;
    onInitController?: (controller: CubeSliderCore) => void;
}

const CubeSlider: React.FC<Props> = ({ 
    children, 
    className,
    direction = "vertical",
    onInitController
}) => {
    const controllerRef = React.useRef<CubeSliderCore>(null);
    const wrapperRef = React.useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = React.useState(0);

    const childrens = React.Children
        .toArray(children)
        .filter((child: any) => child.type && child.type.displayName === "CubeSlide"); 

    React.useEffect(() => {
        if(wrapperRef.current) {
            const controller = new CubeSliderCore(
                wrapperRef.current,
                {
                    onSlideChange(core) {
                        setActiveIndex(core.activeIndex);
                    },
                    direction
                }
            );
            if(onInitController) {
                onInitController(controller);
            }
            return () => controller.destroy();
        }
    }, [direction]);

    React.useEffect(() => {
        if(onInitController && controllerRef.current) {
            onInitController(controllerRef.current);
        }
    });

    return (
        <div className={clsx(css.slider, className)} ref={wrapperRef}>
            {childrens}
        </div>
    );
};;

export { CubeSlider, CubeSlide };