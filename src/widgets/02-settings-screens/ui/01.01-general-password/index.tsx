import React from "react";
import { useForms } from "@axseee/react-form";
import { Input } from "shared/ui/Input";
import css from "../01-general/general.module.scss";

interface Inputs {
    old_password: string;
    new_password: string;
    confirm_password: string;
}

export const GeneralPassword: React.FC = () => {
    const form = useForms<Inputs>({
        initialValues: {
            confirm_password: "",
            new_password: "",
            old_password: "",
        },
        submit: (_, event) => event.preventDefault()
    });

    return (
        <div className={css.password}>
            <h3 className={css.general_title}>Change Password</h3>
            <form onSubmit={form.handleSubmit} className={css.general_form}>
                <Input 
                    value={form.values.old_password}
                    onChange={form.handleChange}
                    error={form.errors.old_password}
                    onBlur={form.handleBlur}
                    type="password"
                    title="Old Password"
                    placeholder="Old Password..."
                    name="old_password"
                    passControls
                    required
                />
                <Input 
                    value={form.values.new_password}
                    onChange={form.handleChange}
                    error={form.errors.new_password}
                    onBlur={form.handleBlur}
                    type="password"
                    title="New Password"
                    placeholder="New Password..."
                    name="new_password"
                    passControls
                    required
                />
                <Input
                    value={form.values.confirm_password}
                    onChange={form.handleChange}
                    error={form.errors.confirm_password}
                    onBlur={form.handleBlur}
                    type="password"
                    title="Confirm New Password"
                    placeholder="Confirm New Password..."
                    name="confirm_password"
                    passControls
                    required
                />
                <div className={css.general_form_controls}>
                    <button className={css.general_form_btn}>
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};