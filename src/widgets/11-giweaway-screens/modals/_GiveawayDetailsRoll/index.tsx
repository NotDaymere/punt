import React from "react";
import { CSSTransition } from "react-transition-group";
import { Button } from "shared/components/@Buttons/Button";
import { useClickOutside } from "shared/hooks/use-click-outside";
import Image from "shared/ui/Image";
import css from "./GiveawayDetailsRoll.module.scss";

interface Props {
    active: boolean;
    onClose: () => void;
}

export const GiveawayDetailsRoll: React.FC<Props> = ({ active, onClose }) => {
    const nodeRef = React.useRef<HTMLDivElement>(null);
    const outRef = useClickOutside(onClose);

    return (
        <CSSTransition
            classNames={css}
            timeout={300}
            in={active}
            unmountOnExit
            mountOnEnter
            nodeRef={nodeRef}
        >
            <div className={css.wrapper} ref={nodeRef}>
                <div className={css.modal} ref={outRef}>
                    <p className={css.modal_title}>
                        You are about to do a<br />
                        <span>
                            <span className={css._blue}>1</span>{" "}
                            <Image.Default src="/img/icons/sc.svg" alt="" /> <strong>+</strong>{" "}
                            <span className={css._yellow}>10,000</span>{" "}
                            <Image.Default src="/img/icons/gc.svg" alt="" />{" "}
                        </span>
                        Giveaway
                    </p>
                    <p className={css.modal_text}>Number of Winners: 75</p>
                    <p className={css.modal_text}>
                        Total Prize Value: 75 <Image.Default src="/img/icons/sc.svg" alt="" /> &
                        750,000 <Image.Default src="/img/icons/gc.svg" alt="" />
                    </p>
                    {/* <p className={css.modal_rollout}>
                        Rollout is in progress please wait...
                        <br />
                        Paid user 0 from 75
                    </p> */}
                    <div className={css.modal_controls}>
                        <Button
                            className={css.modal_controls_btn}
                            onClick={onClose}
                            variant="white"
                            circle
                        >
                            Cancel
                        </Button>
                        <Button
                            className={css.modal_controls_btn}
                            onClick={onClose}
                            variant="green"
                            circle
                        >
                            Roll it!
                        </Button>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};
