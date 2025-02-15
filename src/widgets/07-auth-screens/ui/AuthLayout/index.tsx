import React from "react";
import Image from "shared/ui/Image";
import CrossIcon from "shared/icons/Cross.icon";
import css from "./AuthLayout.module.scss";

interface Props {
    suptitle: string;
    text: string;
    image: string;
    children: React.ReactNode;
    onClose?: () => void;
}

export const AuthLayout: React.FC<Props> = ({
    children,
    suptitle,
    image,
    text,
    onClose
}) => {
    return (
        <div className={`${css.layout} auth-layout`}>
            <div className={css.layout_picture}>
                <p className={css.layout_picture_suptitle}>
                    {suptitle}
                </p>
                <div className={css.layout_picture_figure}>
                    <Image.Default 
                        className={css.layout_picture_image}
                        src={image}
                        alt=""
                    />
                    <p className={css.layout_picture_text}>
                        <span>{text}</span>
                    </p>
                </div>
            </div>
            <div className={css.layout_content}>
                {children}
            </div>
            {onClose && (
                <button 
                    className={css.layout_closeBtn}
                    onClick={onClose}
                    type="button"
                >
                    <CrossIcon />
                </button>
            )}
        </div>
    );
};