export const inputDigits = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = (ev.target as HTMLInputElement).value;
    if(value === "") {
        return 0;
    }
    return parseFloat(value.replace(/[^\d\.]+/gi, "") || "0");
}

export function formatInputCVC(value: string) {
    return value
        .replace(/[^0-9]/gi, '')
        .slice(0,3);
}

export function formatInputExpireDate(value: string) {
    return value
        .replace(
            /[^0-9]/g,
            '' // To allow only numbers
        )
        .replace(
            /^([2-9])$/g,
            '0$1' // To handle 3 > 03
        )
        .replace(
            /^(1{1})([3-9]{1})$/g,
            '0$1/$2' // 13 > 01/3
        )
        .replace(
            /^0{1,}/g,
            '0' // To handle 00 > 0
        )
        .replace(
            /^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g,
            '$1/$2' // To handle 113 > 11/3
        );
}

export function formatInputCardNumber(value: string) {
    return value
        .replace(/(\d{4})(?!\s)/g, '$1 ')
        .replace(/([^0-9\s])/gi, '')
        .slice(0, 19)
        .trim();
}