import React from "react";
import { useForms } from "@axseee/react-form";
import { Button } from "shared/components/@Buttons/Button";
import { Title } from "shared/components/Title";
import Image from "shared/ui/Image";
import { Input } from "shared/ui/Input";
import css from "../03.01-RecoveryForgot/RecoveryForgot.module.scss";

interface ResetInputs {
    newPass: string;
    confirmPass: string;
}

export const RecoveryReset: React.FC = () => {
    const form = useForms<ResetInputs>({
        initialValues: {
            confirmPass: "",
            newPass: "",
        },
        submit(_, ev) {
            ev.preventDefault();
        },
    });
    return (
        <div className={css.rec}>
            <Title.V2 className={css.rec_title}>Forgot password</Title.V2>
            <p className={css.rec_text}>
                <span>New password must be different from your previous used passwords</span>
            </p>
            <form className={css.rec_form} onSubmit={form.handleSubmit}>
                <Input
                    value={form.values.newPass}
                    onChange={form.handleChange}
                    name="newPass"
                    type="password"
                    title="New Password"
                    placeholder="New Password"
                    icon={<Image.Default src="/img/icons/pass.svg" alt="" />}
                    passControls
                />
                <Input
                    value={form.values.confirmPass}
                    onChange={form.handleChange}
                    name="confirmPass"
                    type="password"
                    title="Confirm Password"
                    placeholder="Confirm Password"
                    icon={<Image.Default src="/img/icons/pass.svg" alt="" />}
                    passControls
                />
                <div className={css.rec_form_controls}>
                    <Button
                        className={css.rec_form_controls_btn}
                        variant="green"
                        type="submit"
                        circle
                    >
                        Reset Password
                    </Button>
                </div>
            </form>
        </div>
    );
};
