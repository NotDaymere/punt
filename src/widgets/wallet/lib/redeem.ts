export enum RedemptionMethodEnum {
    STANDARD,
    BANK_TRANSFER,
}

export const redeemMethods = [
    {
        id: RedemptionMethodEnum.STANDARD,
        img: "/img/icons/standard-ach.svg",
        name: "Standard ACH",
        text: "Transfer directly to your bank account (1-3 business days)"
    }, {
        id: RedemptionMethodEnum.BANK_TRANSFER,
        img: "/img/icons/bank-transfer.svg",
        name: "Instant Bank Transfer",
        text: "Get funds instantly via your debit card"
    }
]