import React from "react";
import css from "./SignWith.module.scss";
import clsx from "clsx";
import Image from "shared/ui/Image";

interface Props {
    className?: string;
    title?: string;
}

export const SignWith: React.FC<Props> = ({
    className,
    title = "Sign in with Open account"
}) => {
    return (
        <div className={clsx(css.sign, className)}>
            <p className={`${css.sign_title} auth-suptitle`}>
                {title}
            </p>
            <div className={css.sign_services}>
                <button className={`${css.sign_service_item} auth-suptitle`} aria-label="Google">
                    <Image.Default src="/img/auth/google.svg" alt="" />
                    <span>Google</span>
                </button>
                <button className={`${css.sign_service_item} auth-suptitle`} aria-label="Google">
                    <Image.Default src="/img/auth/apple.svg" alt="" />
                    <span>Apple</span>
                </button>
            </div>
        </div>
    );
};