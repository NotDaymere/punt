import React from "react";
import { AuthModalEnum } from "widgets/07-auth-screens/lib";
import { Button } from "shared/components/@Buttons/Button";
import { Title } from "shared/components/Title";
import ArrowRightMediumIcon from "shared/icons/ArrowRightMedium.icon";
import Image from "shared/ui/Image";
import { Input } from "shared/ui/Input";
import { useModals } from "shared/ui/Modal";
import css from "./RecoveryForgot.module.scss";

export const RecoveryForgot: React.FC = () => {
    const [isSend, setSend] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const { open } = useModals();

    const moveToLogin = () => open(AuthModalEnum.AUTH_MODAL, { type: AuthModalEnum.SIGN_IN });
    const moveToReset = () =>
        open(AuthModalEnum.AUTH_MODAL, {
            type: AuthModalEnum.RECOVERY,
            tab: AuthModalEnum.RECOVERY_RESET,
        });

    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        setSend(true);
    };

    return (
        <div className={css.rec}>
            <Title.V2 className={css.rec_title}>Forgot password</Title.V2>
            <p className={css.rec_text}>
                {isSend ? (
                    <>
                        We&apos;ve sent a password reset link to your email <span>{email}</span>
                    </>
                ) : (
                    <span>
                        Enter your email address and send you instructions to reset your password
                    </span>
                )}
            </p>
            {!isSend && (
                <form className={css.rec_form} onSubmit={handleSubmit}>
                    <Input
                        value={email}
                        onChange={(ev) => setEmail(ev.target.value)}
                        title="Email Address"
                        placeholder="Email Address"
                        icon={<Image.Default src="/img/icons/email.svg" alt="" />}
                    />
                    <div className={css.rec_form_controls}>
                        <Button
                            className={css.rec_form_controls_btn}
                            variant="green"
                            type="submit"
                            circle
                        >
                            Recover Password
                        </Button>
                        <Button
                            className={css.rec_form_controls_btn}
                            variant="white"
                            onClick={moveToLogin}
                        >
                            <ArrowRightMediumIcon />
                            Back
                        </Button>
                    </div>
                </form>
            )}
            {isSend && (
                <>
                    <div className={css.rec_form_controls}>
                        <Button
                            className={css.rec_form_controls_btn}
                            onClick={moveToReset}
                            variant="green"
                            circle
                        >
                            Continue
                        </Button>
                        <Button
                            className={css.rec_form_controls_btn}
                            variant="white"
                            onClick={moveToLogin}
                        >
                            <ArrowRightMediumIcon />
                            Back to Sign in
                        </Button>
                    </div>
                    <p className={css.rec_form_notReceive}>
                        Don&apos;t receive the mail? <button>Click to resend</button>
                    </p>
                </>
            )}
        </div>
    );
};
