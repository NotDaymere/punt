import React from "react";
import { CSSTransition } from "react-transition-group";
import ArrowRightIcon from "shared/icons/ArrowRight.icon";
import { useClickOutside } from "shared/hooks/use-click-outside";
import InfoIcon from "shared/icons/Info.icon";
import Image from "shared/ui/Image";
import { MediaQuery } from "shared/ui/MediaQuery";
import css from "./header-balance.module.scss";
import transitionCss from "../header-account/header-account.module.scss";

export const HeaderBalance: React.FC = () => {
    const nodeRef = React.useRef<HTMLDivElement>(null);
    const [isActive, setActive] = React.useState(false);
    const ref = useClickOutside(() => setActive(false));

    const toggleActive = () => {
        if (window.innerWidth < 767.98) {
            setActive(!isActive);
        }
    };

    return (
        <MediaQuery
            size="min.md"
            children={
                <div className={css.balance}>
                    <div className={`${css.balance_item} ${css._active}`}>
                        <img src="/img/icons/sc.svg" alt="" />
                        200.00
                        <InfoIcon />
                    </div>
                    <div className={css.balance_item}>
                        <img src="/img/icons/gc.svg" alt="" />
                        20.00
                        <InfoIcon />
                    </div>
                </div>
            }
            reserve={
                <div 
                    className={css.mbalance} 
                    style={{ zIndex: isActive ? 100 : "" }}
                    ref={ref}
                >
                    <button 
                        className={css.mbalance_btn}
                        onClick={toggleActive}
                    >
                        <Image.Default 
                            src="/img/icons/gc.svg" 
                            alt="" 
                        />
                        345,456.56
                        <ArrowRightIcon 
                            style={{
                                transform: isActive ? "rotate(-90deg)" : ""
                            }}
                        />
                    </button>
                    <CSSTransition
                        classNames={transitionCss}
                        timeout={250}
                        in={isActive}
                        nodeRef={nodeRef}
                        unmountOnExit
                        mountOnEnter
                    >
                        <div className={css.mbalance_menu} ref={nodeRef}>
                            <p className={css.mbalance_menu_item}>
                                <Image.Default 
                                    src="/img/icons/sc.svg" 
                                    alt="" 
                                />
                                345,456.56
                            </p>
                        </div>
                    </CSSTransition>
                </div>
            }
        />
    );
};
