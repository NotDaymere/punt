import React from "react";
import { Button } from "shared/components/@Buttons/Button";
import { Title } from "shared/components/Title";
import Image from "shared/ui/Image";
import { useModalContext } from "shared/ui/Modal";
import css from "./Onboarding.module.scss";

export const Onboarding: React.FC = () => {
    const [step, setStep] = React.useState(0);
    const { close } = useModalContext();

    const itemTranform = React.useMemo(() => `translateX(${-step * 100}%)`, [step]);

    const Controls = React.useCallback(
        () => (
            <div className={css.onboarding_controls}>
                <Button
                    className={css.onboarding_controls_btn}
                    variant="white"
                    onClick={close}
                    circle
                >
                    Skip
                </Button>
                <Button
                    className={css.onboarding_controls_btn}
                    onClick={() => (step === 3 ? close() : setStep(step + 1))}
                    variant="green"
                    circle
                >
                    {step === 3 && "Play Now"}
                    {step !== 3 && `Next ${step + 1}/4`}
                </Button>
            </div>
        ),
        [step]
    );

    return (
        <div className={css.onboarding}>
            <div className={css.onboarding_steps}>
                <div className={css.onboarding_steps_wrapper}>
                    {/* Step 1 */}
                    <div className={css.onboarding_item} style={{ transform: itemTranform }}>
                        <p className={css.onboarding_steptitle}>Step {step + 1}</p>
                        <Title.V2 className={css.onboarding_title}>Welcome Bonus</Title.V2>
                        <div className={css.onboarding_wheel}>
                            <Image.Default
                                onDragStart={(ev) => ev.preventDefault()}
                                src="/img/auth/wheel.webp"
                                alt=""
                            />
                        </div>
                        <p className={css.onboarding_text}>
                            You get a FREE 10000 Gold Coins on registration, for an additional 2 SC
                            you can complete the steps at https://punt.com/bonus
                        </p>
                        <Controls />
                    </div>
                    {/* Step 2 */}
                    <div className={css.onboarding_item} style={{ transform: itemTranform }}>
                        <p className={css.onboarding_steptitle}>Step {step + 1}</p>
                        <Title.V2 className={css.onboarding_title}>What are SC and GC?</Title.V2>
                        <div className={css.onboarding_scgc}>
                            <Image.Default
                                onDragStart={(ev) => ev.preventDefault()}
                                src="/img/auth/scgc.webp"
                                alt=""
                            />
                        </div>
                        <p className={css.onboarding_text}>
                            Instead of using real money, you play games on Punt.com with virtual
                            currencies known as <Image.Default src="/img/icons/gc.svg" alt="" /> Gold Coins and <Image.Default src="/img/icons/sc.svg" alt="" /> Sweep Coins.
                        </p>
                        <Controls />
                    </div>
                    {/* Step 3 */}
                    <div className={css.onboarding_item} style={{ transform: itemTranform }}>
                        <p className={css.onboarding_steptitle}>Step {step + 1}</p>
                        <Title.V2 className={css.onboarding_title}>Daily bonus</Title.V2>
                        <div className={css.onboarding_bonus}>
                            <Image.Default
                                onDragStart={(ev) => ev.preventDefault()}
                                src="/img/auth/bonus.webp"
                                alt=""
                            />
                        </div>
                        <p className={css.onboarding_text}>
                            Daily bonus is a recurring feature, available daily. This means you have
                            the chance to test your luck and enjoy the platform&apos;s offerings on
                            a daily basis, all without any charge.
                        </p>
                        <Controls />
                    </div>
                    {/* Step 4 */}
                    <div className={css.onboarding_item} style={{ transform: itemTranform }}>
                        <p className={css.onboarding_steptitle}>Step {step + 1}</p>
                        <Title.V2 className={css.onboarding_title}>Casino games for free</Title.V2>
                        <div className={css.onboarding_categories}>
                            <Image.Default
                                onDragStart={(ev) => ev.preventDefault()}
                                src="/img/auth/categories.webp"
                                alt=""
                            />
                        </div>
                        <p className={css.onboarding_text}>
                            With Punt you can play a range of online slots, scratch cards, and table
                            games, Punt originals, and live dealer games for free with no purchase
                            necessary.
                        </p>
                        <Controls />
                    </div>
                </div>
            </div>
        </div>
    );
};
