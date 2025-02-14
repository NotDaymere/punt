import React from "react";
import { useForms } from "@axseee/react-form";
import { SignWith } from "widgets/07-auth-screens/_components";
import { AuthModalEnum } from "widgets/07-auth-screens/lib";
import { Button } from "shared/components/@Buttons/Button";
import { Title } from "shared/components/Title";
import Image from "shared/ui/Image";
import { Input } from "shared/ui/Input";
import { useModalContext, useModals } from "shared/ui/Modal";
import { AuthLayout } from "../AuthLayout";
import css from "./Login.module.scss";

interface LoginInputs {
    login: string;
    password: string;
}

export const Login: React.FC = () => {
    const { open } = useModals();
    const form = useForms<LoginInputs>({
        initialValues: {
            login: "",
            password: "",
        },
        submit(_, ev) {
            ev.preventDefault();
        },
    });
    const modal = useModalContext();

    const openRegister = () => open(AuthModalEnum.AUTH_MODAL, {
        type: AuthModalEnum.SIGN_UP
    });

    const openRecovery = () => open(AuthModalEnum.AUTH_MODAL, {
        type: AuthModalEnum.RECOVERY
    });

    return (
        <AuthLayout
            suptitle="No suit required for this casino!"
            text={`"I’m ready to dive into the latest challenge – with a little luck, I’ll walk away with the grand prize!"`}
            image="/img/auth/spades.webp"
            onClose={modal.close}
        >
            <div className={css.login}>
                <Title.V2 className="auth-title">Sign In</Title.V2>
                <SignWith className={css.login_with} />
                <form className={css.login_form} onSubmit={form.handleSubmit}>
                    <p className={`${css.login_form_title} auth-suptitle`}>
                        Or continue with email address
                    </p>
                    <Input
                        placeholder="Email or Username"
                        title="Email or Username"
                        icon={<Image.Default src="/img/icons/email.svg" alt="" />}
                        className={css.login_form_item}
                        value={form.values.login}
                        onChange={form.handleChange}
                        name="login"
                    />
                    <Input
                        placeholder="Password"
                        title="Password"
                        icon={<Image.Default src="/img/icons/pass.svg" alt="" />}
                        className={css.login_form_item}
                        value={form.values.password}
                        onChange={form.handleChange}
                        name="password"
                        type="password"
                        passControls
                    />
                    <button className={css.login_form_forgot} onClick={openRecovery}>
                        Forgot password?
                    </button>
                    <Button
                        className={`${css.login_form_submitBtn} auth-btn`}
                        variant="green"
                        type="submit"
                    >
                        Sign In
                    </Button>
                </form>
                <p className={`${css.login_form_alternative} auth-alternative`}>
                    Don’t have an account? <button onClick={openRegister}>Register Here</button>
                </p>
                <p className={`${css.login_form_privacy} auth-privacy`}>
                    This site is protected by reCAPTCHA and the Google 
                    <a href="#">Privacy Policy</a>
                     and <a>Terms of Service</a> apply.
                </p>
            </div>
        </AuthLayout>
    );
};
