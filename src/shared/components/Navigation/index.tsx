import React from "react";
import { NavigationItem } from "./components/NavigationItem";
import clsx from "clsx";
import css from "./Navigation.module.scss";

export interface NavItem {
    id: string;
    name: string;
    count?: number;
}

interface Props {
    data: NavItem[];
    activeId?: string;
    onClick?: (item: NavItem) => void;
    className?: string;
    classNameItem?: string;
}

export const Navigation: React.FC<Props> = ({
    data,
    className,
    activeId,
    classNameItem,
    onClick
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const lineRef = React.useRef<HTMLSpanElement>(null);
    const firstRender = React.useRef(true);

    const lineAnimation = (transition = true) => {
        const container = containerRef.current;
        const line = lineRef.current;
        if(container && line) {
            const element = container.querySelector(`[data-nav-id="${activeId}"]`) as HTMLElement;
            const left = element.getBoundingClientRect().left - container.getBoundingClientRect().left;
            if(element) {
                line.style.transition = transition ? "" : "0s";
                line.style.opacity = "1";
                line.style.transform = `translateX(${left}px) scaleX(${element.offsetWidth})`;
            }
        }
    }

    React.useLayoutEffect(() => {
        lineAnimation(!firstRender.current);
        firstRender.current = false;
    }, [activeId]);

    React.useEffect(() => {
        const animationBind = () => lineAnimation(false);
        window.addEventListener("resize", animationBind);
        return () => window.removeEventListener("resize", animationBind);
    });

    return (
        <div className={clsx(css.navigation, className)}>
            <div className={css.navigation_list} ref={containerRef}>
                <span className={css.navigation_line} ref={lineRef} />
                {data.map((item) => (
                    <NavigationItem 
                        data={item} 
                        active={item.id === activeId}
                        onClick={onClick}
                        className={classNameItem}
                        key={item.id} 
                    />
                ))}
            </div>
        </div>
    );
};