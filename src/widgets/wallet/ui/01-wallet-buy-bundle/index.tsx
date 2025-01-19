import React from "react";
import { walletCoins } from "widgets/wallet/mock-data";
import { CoinsBuy } from "entities/coins";
import { Button } from "shared/components/@Buttons/Button";
import { Discount } from "shared/components/Discount";
import ArrowRightMediumIcon from "shared/icons/ArrowRightMedium.icon";
import Image from "shared/ui/Image";
import css from "./wallet-buy-bundle.module.scss";
import { formatNumberWithSeparator } from "shared/utils/format";

export const WalletBuyBundle: React.FC = () => {
    const [selected, setSelected] = React.useState<(typeof walletCoins)[number] | null>(null);

    if (selected) {
        return (
            <div className={css.payment}>
                <div className={css.payment_left}>
                    <h3 className={css.payment_title}>Select Payment Method:</h3>
                    <p className={css.payment_method}>
                        <div className={css.payment_method_header}>
                            <p className={css.payment_method_title}>Credit/Debit Card</p>
                        </div>
                        <div className={css.payment_method_list}>
                            <button className={css.payment_method_btn}>
                                <Image.Default src="/img/components/visa-white.svg" alt="visa" />
                            </button>
                            <button className={css.payment_method_btn}>
                                <Image.Default
                                    src="/img/components/mastercard-white.svg"
                                    alt="visa"
                                />
                            </button>
                            <button className={css.payment_method_btn}>
                                <Image.Default
                                    src="/img/components/american-express-white.svg"
                                    alt="visa"
                                />
                            </button>
                        </div>
                    </p>
                    <Button className={css.payment_backBtn} onClick={() => setSelected(null)}>
                        <ArrowRightMediumIcon /> Back to items
                    </Button>
                </div>
                <div className={css.payment_divider} />
                <div className={css.payment_detail}>
                    <p className={css.payment_detail_title}>Payment Detail</p>
                    <div className={css.payment_detail_img}>
                        <Image.Default src={selected.img} alt="" />
                        <Discount className={css.payment_detail_discount}>
                            <span className={css.payment_detail_discount_text}>
                                {selected.discount}
                                <Image.Default src="/img/icons/sc.svg" alt="" />
                            </span>
                            <span>Free</span>
                        </Discount>
                    </div>
                    <ul className={css.payment_detail_info}>
                        <li className={css.payment_detail_info_item} data-title="Gold Coins:">
                            {formatNumberWithSeparator(selected.amount, " ")}
                        </li>
                        <li className={css.payment_detail_info_item} data-title="Sweep Coin:">
                            {formatNumberWithSeparator(+selected.discount, " ")}
                        </li>
                        <li className={css.payment_detail_info_item} data-title="Price:">
                            {selected.price}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

    return (
        <div className={css.bundle}>
            <h2 className={css.bundle_title}>Bundles</h2>
            <p className={css.bundle_text}>No purchase necessary. Claim your free coins today!</p>
            <ul className={css.bundle_coins}>
                {walletCoins.map((coin) => (
                    <li className={css.bundle_coins_item} key={coin.amount}>
                        <CoinsBuy
                            className={css.bundle_coins_coin}
                            amount={coin.amount}
                            discount={coin.discount}
                            img={coin.img}
                            price={coin.price}
                            onBuy={() => setSelected(coin)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};
