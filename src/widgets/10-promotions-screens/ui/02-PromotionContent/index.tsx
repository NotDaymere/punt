import React from "react";
import css from "./PromotionContent.module.scss";
import { PromotionItem } from "entities/promotions";

const data = [
    {
        img: "/img/temp/promotion-1.jpg",
        deadline: "Ends at 2:59 PM 12/31/2024",
        title: "Stake's Weekly Raffle"
    }, {
        img: "/img/temp/promotion-2.jpg",
        deadline: "Ends at 2:59 PM 12/31/2024",
        title: "Sports Betting"
    }, {
        img: "/img/temp/promotion-3.jpg",
        deadline: "Ends at 2:59 PM 12/31/2024",
        title: "Stake's Weekly Raffle"
    }, {
        img: "/img/temp/promotion-3.jpg",
        deadline: "Ends at 2:59 PM 12/31/2024",
        title: "Stake's Weekly Raffle"
    }, {
        img: "/img/temp/promotion-1.jpg",
        deadline: "Ends at 2:59 PM 12/31/2024",
        title: "Stake's Weekly Raffle"
    }, {
        img: "/img/temp/promotion-1.jpg",
        deadline: "Ends at 2:59 PM 12/31/2024",
        title: "Stake's Weekly Raffle"
    }, {
        img: "/img/temp/promotion-1.jpg",
        deadline: "Ends at 2:59 PM 12/31/2024",
        title: "Stake's Weekly Raffle"
    }, {
        img: "/img/temp/promotion-3.jpg",
        deadline: "Ends at 2:59 PM 12/31/2024",
        title: "Stake's Weekly Raffle"
    }, {
        img: "/img/temp/promotion-2.jpg",
        deadline: "Ends at 2:59 PM 12/31/2024",
        title: "Stake's Weekly Raffle"
    }
]

export const PromotionContent: React.FC = () => {
    return (
        <div className={css.content}>
            <div className="container">
                <div className={css.content_list}>
                    {data.map((promo, id) => (
                        <PromotionItem 
                            image={promo.img}
                            title={promo.title}
                            deadline={promo.deadline}
                            url="/promotions/stakes-weekly-raffle"
                            key={id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};