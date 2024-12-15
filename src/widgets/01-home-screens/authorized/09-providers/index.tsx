import React from "react";
import { Title } from "shared/components/Title";
import css from "./providers.module.scss";
import Image from "shared/ui/Image";

const providers = [
    "/img/providers/provider-1.svg",
    "/img/providers/provider-1.svg",
    "/img/providers/provider-2.svg",
    "/img/providers/provider-3.svg",
    "/img/providers/provider-4.png",
    "/img/providers/provider-3.svg",
]

export const Providers: React.FC = () => {
    return (
        <section className={css.providers} id="providers">
            <div className="container">
                <div className={css.providers_title_container}>
                    <Image.Default 
                        className={css.providers_pocker_chip_1}
                        src="/img/home/poker-chip.svg"
                        alt=""
                    />
                    <Image.Default 
                        className={css.providers_pocker_chip_2}
                        src="/img/home/poker-chip.svg"
                        alt=""
                    />
                    <Image.Default 
                        className={css.providers_pocker_chip_3}
                        src="/img/home/poker-chip.svg"
                        alt=""
                    />
                    <Title text="Providers" />
                </div>
                <ul className={css.providers_list}>
                    {providers.map((provider, id) => (
                        <li 
                            className={css.providers_item}
                            key={provider + id}
                        >
                            <div className={css.providers_item_content}>
                                <Image.Default
                                    className={css.providers_item_img}
                                    src={provider}
                                    alt=""
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};