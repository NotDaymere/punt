import React from "react";
import { useClickOutside } from "shared/hooks/use-click-outside";
import css from "./FormDropdown.module.scss";

interface Props {
    className?: string;
}

export const FormDropdown: React.FC<Props> = (props) => {
    const [active, setActive] = React.useState(false);
    const ref = useClickOutside(() => setActive(false));

    return (
        <div className={css.root} ref={ref}>
            FormDropdown
        </div>
    );
};