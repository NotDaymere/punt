export const formatNumberWithZero = (n: string | number, length = 2) => {
    return n.toString().padStart(length, '0');
};

export const formatNumberWithSeparator = (n: number | string, replacer = ',') => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, replacer);
};