import React from "react";
import * as yup from "yup";
import { useForms } from "@axseee/react-form";
import { WalletInnerModal } from "widgets/wallet/components";
import { Title } from "shared/components/Title";
import Image from "shared/ui/Image";
import { Input } from "shared/ui/Input";
import { Button } from "shared/components/@Buttons/Button";
import { 
    formatInputCVC, 
    formatInputCardNumber, 
    formatInputExpireDate 
} from "shared/utils/input.controller";
import css from "./wallet-add-card.module.scss";

interface Props {
    active: boolean;
    onComplete: (value: Inputs) => void;
    onClose: () => void;
}

interface Inputs {
    number: string;
    expireDate: string;
    cvc: string;
    placeholderName: string;
}

export const WalletAddCard: React.FC<Props> = ({
    active,
    onClose,
    onComplete
}) => {
    const {
        values,
        getError,
        handleSubmit,
        setFieldValue
    } = useForms<Inputs>({
        initialValues: {
            placeholderName: "",
            expireDate: "",
            number: "",
            cvc: ""
        },
        validation: {
            on: { 
                submit: true 
            },
            schema: yup.object({
                placeholderName: yup
                    .string()
                    .required("Required field"),
                
                expireDate: yup
                    .string()
                    .required("Required field")
                    .matches(/\d\d\/\d\d/, "Incorrect date"),

                number: yup
                    .string()
                    .required("Required field")
                    .matches(/(\d{4}\s){3}(\d{4})/, "Incorrect card number"),

                cvc: yup
                    .string()
                    .required("Required field")
                    .matches(/\d{3}/, "Incorrect field")
            })
        },
        submit: (values, event) => {
            event.preventDefault();
            onComplete(values);
            onClose();
        }
    });

    return (
        <WalletInnerModal 
            active={active}
            classNameModal={css.modal}
            onClose={onClose}
        >
            <Image.Default
                className={css.modal_mark}
                src="/img/icons/confirm-mark@3x.png"
                alt=""
            />
            <Title.V2 className={css.modal_title}>
                Add New Card
            </Title.V2>
            <form onSubmit={handleSubmit} className={css.modal_form}>
                <Input 
                    value={values.number}
                    onChange={(ev) => 
                        setFieldValue("number", formatInputCardNumber(ev.target.value))
                    }
                    title="Card number"
                    placeholder="Card number"
                    error={getError("number")}
                />
                <div className={css.modal_form_cols2}>
                    <Input 
                        value={values.expireDate}
                        onChange={(ev) => 
                            setFieldValue("expireDate", formatInputExpireDate(ev.target.value))
                        }
                        error={getError("expireDate")}
                        title="Expire date"
                        placeholder="Expire date"
                    />
                    <Input 
                        value={values.cvc}
                        onChange={(ev) => 
                            setFieldValue("cvc", formatInputCVC(ev.target.value))
                        }
                        error={getError("cvc")}
                        title="CVC/CVV"
                        placeholder="CVC/CVV"
                    />
                </div>
                <Input 
                    value={values.placeholderName}
                    onChange={(ev) => 
                        setFieldValue("placeholderName", ev.target.value)
                    }
                    error={getError("placeholderName")}
                    title="Cardholder name"
                    placeholder="Enter cardholder's full name"
                />

                <Button 
                    className={css.modal_form_submitBtn} 
                    variant="green" 
                    type="submit"
                    circle
                >
                    Add Card
                </Button>
            </form>
        </WalletInnerModal>
    );
};