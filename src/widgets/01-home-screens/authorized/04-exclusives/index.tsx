import React from "react";
import { Title } from "shared/components/Title";
import { getCoreConfig } from "shared/config/core.config";
import { Exclusive } from "entities/games";
import Image from "shared/ui/Image";
import css from "./exclusives.module.scss";

export const Exclusives: React.FC = () => {
    return (
        <section className={css.exclusives} id="exclusives">
            <div className="container">
                <Title 
                    className={css.exclusives_title}
                    text={getCoreConfig().siteName + " Exclusives"} 
                />
                <div className={css.exclusives_content}>
                    <ul className={css.exclusives_list}>
                        <li className={css.exclusives_list_item}>
                            <Exclusive 
                                img="/img/temp/exclusive-1.jpg"
                                name="Clover Cross"
                            />
                        </li>
                        <li className={css.exclusives_list_item}>
                            <Exclusive 
                                img="/img/temp/exclusive-2.jpg"
                                name="Later Gator"
                                color="yellow"
                            />
                        </li>
                        <li className={css.exclusives_list_item}>
                            <Exclusive 
                                img="/img/temp/exclusive-3.jpg"
                                name="Chosen One"
                                color="blue"
                            />
                        </li>
                    </ul>
                    <Image.Default 
                        className={css.exclusives_join}
                        src="/img/home/exclusive-join.png"
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
};