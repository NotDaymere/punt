import React from "react";
import css from "./Switcher.module.scss";
import clsx from "clsx";

interface Props {
    initialActive?: boolean;
    value?: boolean;
    onChange?: (active: boolean) => void;
}

export const Switcher: React.FC<Props> = ({
    initialActive,
    onChange,
    value,
}) => {
    const [isActive, setActive] = React.useState(initialActive || false);

    const handleChange = () => {
        let active = !(typeof value === "undefined" ? isActive : value);
        setActive(active);
        if(onChange) {
            onChange(active);
        }
    }

    const active = React.useMemo(
        () => {
            if(typeof value !== 'undefined') {
                return value;
            }
            return isActive;
        },
        [isActive, value]
    );

    return (
        <span 
            className={clsx(
                css.switcher,
                active && css._active
            )} 
            onClick={handleChange}
        />
    );
};