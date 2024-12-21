import React from "react";
import { Title } from "shared/components/Title";
import css from "./winners.module.scss";
import { Button } from "shared/components/@Buttons/Button";
import { WinnersList } from "widgets/01-home-screens/_components/WinnersList";
import Image from "shared/ui/Image";

export const Winners: React.FC = () => {
    return (
        <section className={css.winners} id="winners">
            <div className="container">
                <div className={css.winners_box}>
                    <div className={css.winners_content}>
                        <Image.Default 
                            className={css.winners_content_anim}
                            src="/img/home/winners-anim.png"
                            alt=""
                        />
                        <Title
                            className={css.winners_title} 
                            text="Live Winners Feed" 
                        />
                        <Button className={css.winners_liveBtn} circle>
                            Live
                        </Button>
                        <div className={css.winners_marquee}>
                            <WinnersList className={css.winners_marquee_list} />
                            <WinnersList className={css.winners_marquee_list} />
                            <WinnersList className={css.winners_marquee_list} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};