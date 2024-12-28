import React from "react";
import clsx from "clsx";
import css from "./input.module.scss";
import EyeIcon from "shared/icons/Eye.icon";
import EyeSlashIcon from "shared/icons/EyeSlash.icon";

type Props = {
    error?: string | boolean | number | null;
    legend?: boolean;
    title?: string;
    icon?: string | React.ReactNode;
    passControls?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = ({
    className,
    error,
    icon,
    legend,
    placeholder,
    title,
    required,
    passControls,
    ...props
}) => {
    const [isHidden, setIsHidden] = React.useState(true);

    const toggleHidden = () => {
        if(props.type === "password") {
            setIsHidden(!isHidden);
        }
    }

    return (
        <div
            className={clsx(
                css.input,
                typeof error === "string" && css._error,
                legend && css._legend,
                className
            )}
        >
            {title && (
                <p className={css.input_title}>
                    {title} {required && <span>*</span>}
                </p>
            )}
            <div className={css.input_field}>
                {typeof icon === "string" && <img src={icon} alt="" />}
                {typeof icon === "object" && icon}
                <input 
                    {...props} 
                    className={css.input_input} 
                    placeholder={placeholder} 
                    type={props.type === "password" ? (isHidden ? "password" : "text") : props.type}
                />
                {passControls && (
                    <button 
                        className={css.input_passControl} 
                        onClick={toggleHidden}
                    >
                        {isHidden ? <EyeIcon /> : <EyeSlashIcon />}
                    </button>
                )}
            </div>
            {typeof error === "string" && <p className={css.input_error}>{error}</p>}
        </div>
    );
};
