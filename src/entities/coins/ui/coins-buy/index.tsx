import React from "react";
import { Button } from "shared/components/@Buttons/Button";
import Image from "shared/ui/Image";
import { formatNumberWithSeparator } from "shared/utils/format";
import css from "./coins-buy.module.scss";
import { Discount } from "shared/components/Discount";

interface Props {
    discount: string | number;
    amount: string | number;
    price: string | number;
    img: string;
}

export const CoinsBuy: React.FC<Props> = ({ amount, discount, price, img }) => {
    return (
        <div className={css.coinBuy}>
            <div className={css.coinBuy_img}>
                <Image.Default className={css.coinBuy_img_coins} src={img} alt="" />
                <Discount className={css.coinBuy_img_discount}>
                    <span className={css.coinBuy_img_discount_text}>
                        {discount}
                        <Image.Default src="/img/icons/sc.svg" alt="" />
                    </span>
                    <span>Free</span>
                </Discount>
            </div>
            <div className={css.coinBuy_amount}>
                <p className={css.coinBuy_amount_value}>{formatNumberWithSeparator(amount, " ")}</p>
                <p className={css.coinBuy_amount_name}>Gold Coins</p>
            </div>
            <div className={css.coinBuy_footer}>
                <p className={css.coinBuy_price}>
                    <span>{price}</span>
                </p>
                <Button className={css.coinBuy_buyBtn} circle>
                    Buy
                </Button>
            </div>
        </div>
    );
};
