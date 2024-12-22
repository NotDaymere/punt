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
    classNameWrapper,
    onlyWrapper,
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
                    countSlides: childrens.length
                }
            );
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

    const slides = React.useMemo(() => {
        const length = childrens.length;
        const fill = [...childrens, ...childrens];
        // return fill.slice(length + activeIndex - 3, length + activeIndex + 1);
        return fill.slice(length + activeIndex - 1, length + activeIndex + 3);
    }, [activeIndex, childrens]);

    // [1,2,3,4,5,6,1,2,3,4,5,6]

    const Wrapper = (
        <div 
            className={clsx(css.slider_wrapper, classNameWrapper)} 
            ref={wrapperRef}
        >
            {childrens}
        </div>
    );

    if(onlyWrapper) {
        return Wrapper;
    }

    return (
        <div className={clsx(css.slider, className)}>
            {Wrapper}
        </div>
    );
};;

export { CubeSlider, CubeSlide };