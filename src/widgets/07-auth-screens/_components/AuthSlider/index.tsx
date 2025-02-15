import React from "react";
import clsx from "clsx";
import css from "./AuthSlider.module.scss";

interface Props {
    slide: number;
    children: React.ReactNode;
    className?: string;
}

interface SlideProps {
    className?: string;
    transform?: string;
    children: React.ReactNode;
}

const Slide: React.FC<SlideProps> = ({ className, transform, children }) => {
    return (
        <div className={clsx(css.slider_slide)} style={{ transform }}>
            <div className={clsx(css.slider_slide_inner, className)}>
                {children}
            </div>
        </div>
    )
}

Slide.displayName = "slider-sld";

const AuthSlider: React.FC<Props> = ({
    children,
    slide,
    className
}) => {

    const transform = React.useMemo(
        () => `translateX(${-slide * 100}%)`, 
        [slide]
    );

    return (
        <div className={clsx(css.slider, className)}>
            {React.Children.map(children, (child: any) => {
                if(child?.type.displayName !== Slide.displayName) {
                    return null;
                }
                return React.cloneElement(child, { transform });
            })}
        </div>
    );
};

export default Object.assign(AuthSlider, { Slide });