import React from "react";
import { CubeSliderCore } from "./lib/CubeSliderCore";
import clsx from "clsx";
import { CubeSlide } from "./ui";
import css from "./CubeSlider.module.scss";

interface Props {
    className?: string;
    classNameWrapper?: string;
    classNameActive?: string;
    classNamePrev?: string;
    classNameNext?: string;
    direction?: "vertical" | "horizontal";
    children?: React.ReactNode;
    onlyWrapper?: boolean;
    onInitController?: (controller: CubeSliderCore) => void;
}

const CubeSlider: React.FC<Props> = ({
    children,
    className,
    classNameActive,
    classNameNext,
    classNamePrev,
    direction = "vertical",
    onInitController,
}) => {
    const controllerRef = React.useRef<CubeSliderCore>(null);
    const wrapperRef = React.useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = React.useState(0);

    const childrens = React.Children.toArray(children).filter(
        (child: any) => child.type && child.type.displayName === "CubeSlide"
    );

    React.useEffect(() => {
        if (wrapperRef.current) {
            const controller = new CubeSliderCore(wrapperRef.current, {
                onSlideChange(core) {
                    setActiveIndex(core.activeIndex);
                },
                direction,
            });
            if (onInitController) {
                onInitController(controller);
            }
            return () => controller.destroy();
        }
    }, [direction]);

    React.useEffect(() => {
        if (onInitController && controllerRef.current) {
            onInitController(controllerRef.current);
        }
    });

    const renderChildrens = childrens.length < 4 ? [...childrens, ...childrens] : childrens;

    return (
        <div className={clsx(css.slider, className)} ref={wrapperRef}>
            {React.Children.map(renderChildrens, (child: any, index) => {
                return React.cloneElement(child, {
                    className: clsx(
                        child.props.className,
                        index === activeIndex && [classNameActive],
                    ),
                    index,
                    key: child?.key + index
                })
            })}
        </div>
    );
};

export { CubeSlider, CubeSlide };
