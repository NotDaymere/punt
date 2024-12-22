import React from "react";
import { CubeSlide } from "./ui";
import clsx from "clsx";
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
    classNameWrapper,
    onlyWrapper,
    direction = "vertical",
    onInitController
}) => {
    const controllerRef = React.useRef<CubeSliderCore>(null);
    const wrapperRef = React.useRef<HTMLDivElement>(null);

    const childrens = React.Children
        .toArray(children)
        .filter((child: any) => child.type && child.type.displayName === "CubeSlide"); 

    React.useEffect(() => {
        if(wrapperRef.current) {
            const controller = new CubeSliderCore(wrapperRef.current);
            if(onInitController) {
                onInitController(controller);
            }
            return () => controller.destroy();
        }
    }, []);

    React.useEffect(() => {
        if(onInitController && controllerRef.current) {
            onInitController(controllerRef.current);
        }
    }, [onInitController]);

    if(onlyWrapper) {
        return (
            <div className={clsx(css.slider_wrapper, classNameWrapper)} ref={wrapperRef}>
                {childrens}
            </div>
        )
    }

    return (
        <div className={clsx(css.slider, className)}>
        </div>
    );
};;

export { CubeSlider, CubeSlide };