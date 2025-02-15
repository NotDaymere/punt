import React from "react";
import { Onboarding } from "../02.01-Onboarding";
import { useForms } from "@axseee/react-form";
import { AuthSlider } from "widgets/07-auth-screens/_components";
import { AuthModalEnum } from "widgets/07-auth-screens/lib";
import { Button } from "shared/components/@Buttons/Button";
import { Checkbox } from "shared/components/Checkbox";
import { FormSelect } from "shared/components/FormSelect";
import { Title } from "shared/components/Title";
import ArrowRightMediumIcon from "shared/icons/ArrowRightMedium.icon";
import Image from "shared/ui/Image";
import { Input } from "shared/ui/Input";
import { useModalContext, useModals } from "shared/ui/Modal";
import { AuthLayout } from "../AuthLayout";
import css from "./Register.module.scss";

interface RegisterInputs {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    country: string | null;
    state: string | null;

    referralCode: boolean;
    agreeTerms: boolean;

    birth_dd: number | null;
    birth_mm: string | null;
    birth_yy: number | null;
    password: string;
    confirmPassword: string;
}

const days = Array.from({ length: 31 }).map((_, id) => id + 1);
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const years = Array.from({ length: 46 }).map((_, id) => new Date().getFullYear() - id);

const stepsData = {
    0: {
        text: `"I’m keeping my eye on the upcoming events – you never know when the next big win will happen!"`,
        image: "/img/auth/hearts.webp",
    },
    1: {
        text: '"I’m always checking the latest promotions – more bonuses mean more chances to win big!"',
        image: "/img/auth/clubs.webp",
    },
    2: {
        text: '"I just scored 10,000 FREE Gold Coins for signing up! Feels like I\'m already winning!"',
        image: "/img/auth/diamonds.webp",
    },
} as const;

export const Register: React.FC = () => {
    const [step, setStep] = React.useState(0);
    const form = useForms<RegisterInputs>({
        initialValues: {
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            country: null,
            state: null,

            referralCode: false,
            agreeTerms: false,

            birth_dd: null,
            birth_mm: null,
            birth_yy: null,
            password: "",
            confirmPassword: "",
        },
        submit(_, ev) {
            ev.preventDefault();
        },
    });
    const modal = useModalContext();
    const { open } = useModals();

    const toggleLogin = () =>
        open(AuthModalEnum.AUTH_MODAL, {
            type: AuthModalEnum.SIGN_IN,
        });

    const toMain = () => setStep(0);

    const toExtra = () => setStep(1);

    const toOnboarding = () => setStep(2);

    const Alternative = React.useMemo(
        () => (
            <p className={`${css.reg_alternative} auth-alternative`}>
                Already have an account? <button onClick={toggleLogin}> Login</button>
            </p>
        ),
        []
    );

    const Privacy = React.useMemo(
        () => (
            <p className={`${css.reg_privacy} auth-privacy`}>
                This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a>{" "}
                and <a href="#">Terms of Service</a> apply.
            </p>
        ),
        []
    );

    return (
        <AuthLayout
            suptitle="No suit required for this casino!"
            text={(stepsData as any)[step]?.text}
            image={(stepsData as any)[step]?.image}
            onClose={modal.close}
        >
            <div className={css.reg}>
                <AuthSlider slide={step}>
                    <AuthSlider.Slide>
                        <Title.V2 className="auth-title">Register</Title.V2>
                        <div className={css.reg_form}>
                            <Input
                                value={form.values.username}
                                onChange={form.handleChange}
                                className={css.reg_form_input}
                                icon={<Image.Default src="/img/icons/user.svg" alt="" />}
                                placeholder="Username"
                                title="Username"
                                name="username"
                            />
                            <Input
                                value={form.values.firstName}
                                onChange={form.handleChange}
                                className={css.reg_form_input}
                                icon={<Image.Default src="/img/icons/user.svg" alt="" />}
                                placeholder="First Name"
                                title="First Name"
                                name="firstName"
                            />
                            <Input
                                value={form.values.lastName}
                                onChange={form.handleChange}
                                className={css.reg_form_input}
                                icon={<Image.Default src="/img/icons/user.svg" alt="" />}
                                placeholder="Last Name"
                                title="Last Name"
                                name="lastName"
                            />
                            <Input
                                value={form.values.email}
                                onChange={form.handleChange}
                                className={css.reg_form_input}
                                icon={<Image.Default src="/img/icons/email.svg" alt="" />}
                                placeholder="Email"
                                title="Email"
                                name="email"
                            />
                            <FormSelect
                                options={[
                                    "USA",
                                    "Russia",
                                    "Spain",
                                    "Canada",
                                    "UK",
                                    "Sweden",
                                    "Germany",
                                    "France",
                                    "Italia",
                                ]}
                                getKey={(item) => item}
                                getName={(item) => item}
                                renderValue={(item) => item}
                                onChange={(value) => form.setFieldValue("country", value)}
                                value={form.values.country}
                                title="Country"
                                placeholder="Select"
                            />
                            <FormSelect
                                options={["AL", "AK", "AZ", "AR"]}
                                getKey={(item) => item}
                                getName={(item) => item}
                                renderValue={(item) => item}
                                onChange={(value) => form.setFieldValue("state", value)}
                                value={form.values.state}
                                title="State/Province"
                                placeholder="Select"
                            />
                            <Button
                                className={`${css.reg_form_submitBtn} auth-btn`}
                                onClick={toExtra}
                                variant="green"
                                circle
                            >
                                Next
                            </Button>
                            {Alternative}
                            {Privacy}
                        </div>
                    </AuthSlider.Slide>
                    <AuthSlider.Slide>
                        <Title.V2 className="auth-title">Register</Title.V2>
                        <div className={css.reg_form}>
                            <div className={css.reg_form_birthday}>
                                <FormSelect
                                    options={days}
                                    getKey={(item) => item}
                                    getName={(item) => item}
                                    renderValue={(item) => item}
                                    onChange={(value) => form.setFieldValue("birth_dd", value)}
                                    value={form.values.birth_dd}
                                    title="Date of Birth"
                                    placeholder="DD"
                                />
                                <FormSelect
                                    options={months}
                                    getKey={(item) => item}
                                    getName={(item) => item}
                                    renderValue={(item) => item}
                                    onChange={(value) => form.setFieldValue("birth_mm", value)}
                                    value={form.values.birth_mm}
                                    placeholder="MMMM"
                                />
                                <FormSelect
                                    options={years}
                                    getKey={(item) => item}
                                    getName={(item) => item}
                                    renderValue={(item) => item}
                                    onChange={(value) => form.setFieldValue("birth_yy", value)}
                                    value={form.values.birth_yy}
                                    placeholder="YYYY"
                                />
                            </div>
                            <Input
                                value={form.values.confirmPassword}
                                onChange={form.handleChange}
                                className={css.reg_form_input}
                                icon={<Image.Default src="/img/icons/pass.svg" alt="" />}
                                placeholder="Password"
                                title="Password"
                                name="confirmPassword"
                                passControls
                            />
                            <Input
                                value={form.values.password}
                                onChange={form.handleChange}
                                className={css.reg_form_input}
                                icon={<Image.Default src="/img/icons/pass.svg" alt="" />}
                                placeholder="Repeat Password"
                                title="Repeat Password"
                                name="password"
                                passControls
                            />
                            <Checkbox
                                className={css.reg_form_checkbox}
                                id="refCode"
                                value="refCode"
                                onChange={(bool) => form.setFieldValue("referralCode", bool)}
                                checked={form.values.referralCode}
                                text="Referral Code (Optional)"
                            />
                            <Checkbox
                                className={css.reg_form_checkbox}
                                id="agreeTerms"
                                value="agreeTerms"
                                onChange={(bool) => form.setFieldValue("agreeTerms", bool)}
                                checked={form.values.agreeTerms}
                                text="I am at least 18 years of age and have read and accept the <a target='_blank' href='/terms'>Terms of Use</a>"
                            />
                            <div className={css.reg_form_controls}>
                                <Button className={css.reg_form_controls_btn} onClick={toMain}>
                                    <ArrowRightMediumIcon />
                                    Back
                                </Button>
                                <Button
                                    className={css.reg_form_controls_btn}
                                    onClick={toOnboarding}
                                    variant="green"
                                    circle
                                >
                                    Get Started
                                </Button>
                            </div>
                            {Alternative}
                            {Privacy}
                        </div>
                    </AuthSlider.Slide>
                    <AuthSlider.Slide>
                        <Onboarding interactive={step === 2} />
                    </AuthSlider.Slide>
                </AuthSlider>
            </div>
        </AuthLayout>
    );
};
