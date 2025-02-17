import React from "react";
import { useRouter } from "next/router";
import { GIVEAWAYS_DETAILS_CONST } from "widgets/11-giweaway-screens/lib";
import { GiveawayItem } from "entities/giveaways";
import { Button } from "shared/components/@Buttons/Button";
import { useModals } from "shared/ui/Modal";
import css from "./Giveaways.module.scss";

const data = [
    {
        winners: 50,
        totalPrice: 7000,
        sc: 1,
        gc: 10000,
        title: "SlotQueen",
        image: "/img/temp/giveaway-1.jpg",
    },
    {
        winners: 50,
        totalPrice: 7000,
        sc: 1,
        gc: 10000,
        title: "SlotQueen",
        image: "/img/temp/giveaway-2.jpg",
    },
    {
        winners: 50,
        totalPrice: 7000,
        sc: 1,
        gc: 10000,
        title: "SlotQueen",
        image: "/img/temp/giveaway-3.jpg",
    },
    {
        winners: 50,
        totalPrice: 7000,
        sc: 1,
        gc: 10000,
        title: "SlotQueen",
        image: "/img/temp/giveaway-4.jpg",
    },
    {
        winners: 50,
        totalPrice: 7000,
        sc: 1,
        gc: 10000,
        title: "SlotQueen",
        image: "/img/temp/giveaway-3.jpg",
    },
    {
        winners: 50,
        totalPrice: 7000,
        sc: 1,
        gc: 10000,
        title: "SlotQueen",
        image: "/img/temp/giveaway-4.jpg",
    },
    {
        winners: 50,
        totalPrice: 7000,
        sc: 1,
        gc: 10000,
        title: "SlotQueen",
        image: "/img/temp/giveaway-2.jpg",
    },
    {
        winners: 50,
        totalPrice: 7000,
        sc: 1,
        gc: 10000,
        title: "SlotQueen",
        image: "/img/temp/giveaway-1.jpg",
    },
];

export const Giveaways: React.FC = () => {
    const router = useRouter();
    const modals = useModals();

    return (
        <div className={css.giveaways}>
            <div className="container">
                <div className={css.giveaways_wrapper}>
                    <div className={css.giveaways_list}>
                        {data.map((item, index) => (
                            <GiveawayItem
                                image={item.image}
                                title={item.title}
                                totalPrice={item.totalPrice}
                                gc={item.gc}
                                sc={item.sc}
                                winners={item.winners}
                                finished={router.query.tab === "Finished"}
                                onJoin={() => modals.open(GIVEAWAYS_DETAILS_CONST)}
                                key={index}
                            />
                        ))}
                    </div>
                    <p className={css.giveaways_display}>Displaying 8 of 32 Giveaways</p>
                    <Button className={css.giveaways_btn} circle>
                        Load More
                    </Button>
                </div>
            </div>
        </div>
    );
};
