export const formatNumberWithZero = (n: string | number, length = 2) => {
    return n.toString().padStart(length, '0');
};

export const numberWithCommas = (n: number | string) => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};