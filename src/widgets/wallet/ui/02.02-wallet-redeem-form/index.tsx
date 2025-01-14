import React from "react";
import { RedemptionMethodEnum } from "widgets/wallet/lib";
import { AccountNumber, Card } from "entities/payment";
import { Button } from "shared/components/@Buttons/Button";
import ArrowRightMediumIcon from "shared/icons/ArrowRightMedium.icon";
import PlusCircleIcon from "shared/icons/PlusCircle.icon";
import Image from "shared/ui/Image";
import { Input } from "shared/ui/Input";
import css from "../02-wallet-redeem/wallet-redeem.module.scss";

interface Props {
    methodActive: RedemptionMethodEnum;
    handleBack: () => void;
}

interface PaymentCard {
    placeholder: string;
    cardNumber: string;
    expireDate: string;
    cvc: string;
}

export const WalletRedeemForm: React.FC<Props> = ({ handleBack, methodActive }) => {
    const [amount, setAmount] = React.useState("");
    const [selected, setSelected] = React.useState<PaymentCard | null>(null);
    const [cards, setCards] = React.useState<PaymentCard[]>([
        { placeholder: "", cvc: "804", cardNumber: "4274 2221 9213 4124", expireDate: "2028/06" },
        { placeholder: "", cvc: "312", cardNumber: "4192 1874 2120 8242", expireDate: "2025/03" },
    ]);

    const handleRemoveCard = (card: PaymentCard) => {
        setCards(cards.filter((item) => item.cardNumber !== card.cardNumber))
    }

    return (
        <div className={css.redeem}>
            <Button className={css.redeem_backBtn} onClick={handleBack}>
                <ArrowRightMediumIcon /> Back
            </Button>
            <h3 className={`${css.redeem_title} ${css._min}`}>Redeem Sweep Coins</h3>
            <div className={css.redeem_form}>
                <form className={css.redeem_form_form} onSubmit={(ev) => ev.preventDefault()}>
                    <Input
                        className={css.redeem_form_input}
                        value={amount}
                        icon={<Image.Default src="/img/icons/gc.svg" alt="" />}
                        onChange={(ev) => setAmount(ev.target.value)}
                        placeholder="0.00"
                        title="Amount"
                    />
                </form>
                <div className={css.redeem_payment}>
                    <p className={css.redeem_payment_title}>Select Payment Method:</p>
                    <div className={css.redeem_payment_cards}>
                        {methodActive === RedemptionMethodEnum.STANDARD &&
                            cards.map((item) => (
                                <AccountNumber
                                    active={selected?.cardNumber === item.cardNumber}
                                    onSelect={() => setSelected(item)}
                                    onDelete={() => handleRemoveCard(item)}
                                    number={item.cardNumber}
                                    key={item.cardNumber}
                                />
                            ))}
                        {methodActive === RedemptionMethodEnum.BANK_TRANSFER &&
                            cards.map((item) => (
                                <Card
                                    active={selected?.cardNumber === item.cardNumber}
                                    onSelect={() => setSelected(item)}
                                    onDelete={() => handleRemoveCard(item)}
                                    number={item.cardNumber}
                                    key={item.cardNumber}
                                />
                            ))}
                    </div>
                    <button className={css.redeem_payment_add}>
                        <PlusCircleIcon />
                        Add New Account
                    </button>
                </div>
                <div className={css.redeem_btn_container}>
                    <div className={css.redeem_btn_outlines} />
                    <Button className={css.redeem_btn} type="submit" variant="big-green">
                        Redeem
                    </Button>
                </div>
            </div>
        </div>
    );
};
