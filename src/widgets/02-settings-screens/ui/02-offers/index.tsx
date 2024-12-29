import React from "react";
import { Button } from "shared/components/@Buttons/Button";
import { useForms } from "shared/hooks/use-form";
import Image from "shared/ui/Image";
import { Input } from "shared/ui/Input";
import { useToast } from "shared/components/Toast";
import css from "./offers.module.scss";

const Offers: React.FC = () => {
    const toast = useToast();
    const [step, setStep] = React.useState(1);
    const form = useForms<{ code: string }>({
        initialValues: {
            code: "",
        },
        submit: (values) => {
            console.log('sds')
            if(values.code === "1") {
                toast.push({
                    type: "error",
                    duration: 5000,
                    title: "Oh snap!",
                    content: "Invalid code. Please check the code and try again."
                });
            } else {
                toast.push({
                    type: "success",
                    duration: 5000,
                    content: "Your bonus code claim was successful, you will receive 20.00 <img src='/img/icons/gc.svg' alt='' /> hortly！",
                    title: "Bonus"
                })
            }
            form.resetForm()
        },
    });

    const toSecondStep = () => setStep(2);

    return (
        <div className={css.offers}>
            {step === 1 && (
                <>
                    <h3 className={css.offers_title}>One final step before you can continue!</h3>
                    <p className={css.offers_text}>
                        Please complete our quick and easy verification process. Your submission
                        will be automatically reviewed for approval.
                    </p>
                    <div className={css.offers_req}>
                        <p className={css.offers_text}>
                            Please double check you meet the following requirements:
                        </p>
                        <ol className={css.offers_req_list}>
                            <li>You are at least 21 years old.</li>
                            <li>
                                You need to use the physical documents when trying to verify. Do NOT
                                use screenshots or previously taken photos.
                            </li>
                            <li>
                                You have not already verified an existing account. You cannot create
                                multiple accounts.
                            </li>
                            <li>
                                Unfortunately we cannot currently serve people from the following US
                                states: Washington, Idaho, Kentucky, Nevada and Michigan.
                            </li>
                        </ol>
                        <div className={css.offers_req_btn_container}>
                            <Image.Default
                                className={css.offers_req_btn_stars}
                                src="/img/header-stars.png"
                                alt=""
                            />
                            <Button
                                className={css.offers_req_verifyBtn}
                                onClick={toSecondStep}
                                variant="green"
                                circle
                            >
                                Continue with Verification
                            </Button>
                        </div>
                    </div>
                </>
            )}

            {step === 2 && (
                <div className={css.bonus}>
                    <div className={css.bonus_left}>
                        <h3 className={css.bonus_title}>Redeem Bonus Drop</h3>
                        <p className={css.bonus_text}>
                            Find bonus drop codes on our social media's such as Twitter & Telegram.
                        </p>
                        <Image.Default
                            className={css.bonus_illustration}
                            src="/img/settings/bonus-illustration.svg"
                            alt=""
                        />
                    </div>
                    <form onSubmit={form.handleSubmit} className={css.bonus_form}>
                        <Image.Default
                            className={css.bonus_form_stars}
                            src="/img/header-stars.png"
                            alt=""
                        />
                        <Input
                            value={form.values.code}
                            onChange={form.handleChange}
                            name="code"
                            placeholder="Code"
                            title="Code"
                            required
                        />
                        <Button
                            className={css.bonus_form_submitBtn}
                            type="submit"
                            variant="green"
                            circle
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Offers;
