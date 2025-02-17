import React from "react";
import { useForms } from "@axseee/react-form";
import clsx from "clsx";
import { GIVEAWAYS_CREATE_CONST } from "widgets/11-giweaway-screens/lib";
import { Button } from "shared/components/@Buttons/Button";
import { CloseButton } from "shared/components/@Buttons/CloseButton";
import { FormSelect } from "shared/components/FormSelect";
import { Title } from "shared/components/Title";
import Image from "shared/ui/Image";
import { Modal } from "shared/ui/Modal";
import { formatNumberWithSeparator } from "shared/utils/format";
import css from "./CreateNew.module.scss";

interface PrizeItem {
    gc: number;
    sc: number;
}

interface Inputs {
    numberWinners: number | null;
    prize: PrizeItem | null;
}

const prizes: PrizeItem[] = [
    { sc: 1, gc: 10000 },
    { sc: 2, gc: 20000 },
    { sc: 3, gc: 30000 },
    { sc: 4, gc: 40000 },
    { sc: 5, gc: 50000 },
    { sc: 6, gc: 60000 },
    { sc: 7, gc: 70000 },
    { sc: 8, gc: 80000 },
    { sc: 9, gc: 90000 },
    { sc: 10, gc: 100000 },
    { sc: 11, gc: 110000 },
    { sc: 12, gc: 120000 },
];

const getOption = (gc: number, sc: number, active = false) => (
    <>
        <span className={clsx(css._blue, active && css._active)}>{sc.toFixed(2)}</span>{" "}
        <Image.Default src="/img/icons/sc.svg" alt="" /> <strong>+</strong>{" "}
        <span className={clsx(css._yellow, active && css._active)}>
            {formatNumberWithSeparator(gc.toFixed(0), ",")}
        </span>{" "}
        <Image.Default src="/img/icons/gc.svg" alt="" />{" "}
    </>
);

export const CreateNew: React.FC = () => {
    const form = useForms<Inputs>({
        initialValues: {
            numberWinners: null,
            prize: null,
        },
        submit(_, ev) {
            ev.preventDefault();
        },
    });

    return (
        <Modal
            name={GIVEAWAYS_CREATE_CONST}
            className={css.modal_window}
            hideOnClickOutside
            overflow
        >
            {({ close }) => (
                <div className={css.modal}>
                    <Title.V2 className={css.modal_title}>Create New Giveaway</Title.V2>
                    <form className={css.modal_form} onSubmit={form.handleSubmit}>
                        <FormSelect
                            options={prizes}
                            value={form.values.prize}
                            onChange={(value) => form.setFieldValue("prize", value)}
                            getKey={(item) => item.gc}
                            renderButton={(value) => (
                                <span className={css.modal_select_option}>
                                    {getOption(value.gc, value.sc, true)}
                                </span>
                            )}
                            renderValue={(value) => (
                                <p className={css.modal_select_option}>
                                    {getOption(value.gc, value.sc, value.gc === form.values.prize?.gc)}
                                </p>
                            )}
                            placeholder="Select"
                            title="Choose Prize"
                        />
                        <FormSelect
                            options={[1, 5, 15, 25, 50, 100]}
                            value={form.values.numberWinners}
                            onChange={(value) => form.setFieldValue("numberWinners", value)}
                            getKey={(item) => item}
                            renderButton={(item) => item}
                            renderValue={(value) => <>{value} Winners</>}
                            placeholder="Select"
                            title="Number of Winners"
                        />
                        <Button className={css.modal_btn} variant="green" type="submit" circle>
                            Submit
                        </Button>
                    </form>

                    <CloseButton className={css.modal_closeBtn} onClick={close} />
                </div>
            )}
        </Modal>
    );
};
