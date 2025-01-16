import React from "react";
import { useForms } from "@axseee/react-form";
import EmailIcon from "shared/icons/Email.icon";
import UserIcon from "shared/icons/User.icon";
import { Input } from "shared/ui/Input";
import css from "../01-general/general.module.scss";

interface Inputs {
    username: string;
    email: string;
}

export const GeneralInformation: React.FC = () => {
    const form = useForms<Inputs>({
        initialValues: {
            email: "",
            username: "",
        },
        submit: (_, event) => event.preventDefault()
    });

    return (
        <div className={css.information}>
            <h3 className={css.general_title}>Change Information</h3>
            <form onSubmit={form.handleSubmit} className={css.general_form}>
                <Input
                    value={form.values.username}
                    onChange={form.handleChange}
                    error={form.errors.username}
                    onBlur={form.handleBlur}
                    icon={<UserIcon />}
                    title="Username"
                    placeholder="Username..."
                    name="username"
                />
                <Input
                    value={form.values.email}
                    onChange={form.handleChange}
                    error={form.errors.email}
                    onBlur={form.handleBlur}
                    icon={<EmailIcon />}
                    title="Email"
                    placeholder="Email..."
                    name="email"
                    required
                />
                <div className={css.general_form_controls}>
                    <button className={css.general_form_btn}>
                        Update
                    </button>
                    <button className={css.general_form_btn}>
                        Resend Email
                    </button>
                </div>
            </form>
        </div>
    );
};
