import React from "react";
import { CSSTransition } from "react-transition-group";
import clsx from "clsx";
import { useClickOutside } from "shared/hooks/use-click-outside";
import ArrowSmallUpIcon from "shared/icons/ArrowSmallUp.icon";
import css from "./FormDropdown.module.scss";

interface Props {
    className?: string;
    classNameButton?: string;
    classNameDropdown?: string;
    renderButton: () => React.ReactNode;
    renderList: (closeModal: () => void) => React.ReactNode;
}

export const FormDropdown: React.FC<Props> = ({
    renderButton,
    renderList,
    className,
    classNameButton,
    classNameDropdown,
}) => {
    const [active, setActive] = React.useState(false);
    const ref = useClickOutside(() => setActive(false));
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    const toggleActive = () => setActive(!active);

    return (
        <div className={clsx(css.select, className)} style={{ zIndex: active ? 100 : "" }} ref={ref}>
            <button
                className={clsx(css.select_btn, active && css._active, classNameButton)}
                onClick={toggleActive}
            >
                {renderButton()}
                <ArrowSmallUpIcon style={{ transform: active ? "" : "scaleY(-1)" }} />
            </button>
            <CSSTransition
                classNames={css}
                in={active}
                timeout={200}
                unmountOnExit
                mountOnEnter
                nodeRef={dropdownRef}
            >
                <div className={clsx(css.select_dd, classNameDropdown)} ref={dropdownRef}>
                    {renderList(() => setActive(false))}
                </div>
            </CSSTransition>
        </div>
    );
};
