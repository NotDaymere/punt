import React from "react";
import { Title } from "shared/components/Title";
import { useInput } from "shared/hooks/use-input";
import { Input } from "shared/ui/Input";
import Image from "shared/ui/Image";
import { Button } from "shared/components/@Buttons/Button";
import testimontialCSS from "../10-testimontials/testimontials.module.scss";
import css from "./sale.module.scss";

export const Sale: React.FC = () => {
    const { typingValue, value, handleValue } = useInput();

    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
    }

    return (
        <section className={css.sale} id="sale">
            <div className={testimontialCSS.testimontials_container}>
                <div className={css.sale_wrapper}>
                    {/* <Starfield className={css.sale_starfield} /> */}
                    <Image.Default 
                        className={css.sale_starfield}
                        src="/img/temp/sale-bg.webp"
                        alt=""
                    />
                    <Image.Default 
                        className={css.sale_wheel}
                        src="/img/home/sale-wheel.webp"
                        alt=""
                    />
                    <div className={css.sale_content}>
                        <Title className={css.sale_title} text="100% Sale" />
                        <Title className={css.sale_title} text="on 1st Purchase" />
                        <p className={css.sale_text}>
                            <span>250K</span> for free for registrations
                        </p>
                        <form className={css.sale_form} onSubmit={handleSubmit}>
                            <Input 
                                className={css.sale_form_input}
                                value={typingValue}
                                onChange={handleValue}
                                placeholder="Enter your email"
                            />
                            <Button 
                                className={css.sale_form_submitBtn} 
                                variant="green"
                                type="submit"
                            >
                                Join Now
                            </Button>
                        </form>
                        <p className={css.sale_or_login}>
                            or login with these social
                        </p>
                        <div className={css.socials}>
                            <Button 
                                className={css.socials_item}
                                component="a"
                                variant="black"
                            >
                                <Image.Default src="/img/icons/social-google.svg" alt="google" />
                                Google
                            </Button>
                            <Button 
                                className={css.socials_item}
                                component="a"
                                variant="black"
                            >
                                <Image.Default src="/img/icons/social-facebook.svg" alt="google" />
                                Facebook
                            </Button>
                            <Button 
                                className={css.socials_item}
                                component="a"
                                variant="black"
                            >
                                <Image.Default src="/img/icons/social-twitch.svg" alt="google" />
                                Twitch
                            </Button>
                            <Button 
                                className={css.socials_item}
                                component="a"
                                variant="black"
                            >
                                <Image.Default src="/img/icons/social-instagram.svg" alt="google" />
                                Instagram
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};