export const inputDigits = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = (ev.target as HTMLInputElement).value;
    if(value === "") {
        return 0;
    }
    return parseFloat(value.replace(/[^\d\.]+/gi, "") || "0");
}