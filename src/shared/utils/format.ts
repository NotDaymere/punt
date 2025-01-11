import dayjs from "dayjs";

export const formatNumberWithZero = (n: string | number, length = 2) => {
    return n.toString().padStart(length, "0");
};

export const formatNumberWithSeparator = (n: number | string, replacer = ",") => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, replacer);
};

export const formatDate = (date: string) => {
    if (dayjs(date).isToday()) {
        console.log(dayjs(date).diff())
        if (dayjs(date).diff() < -3600000) {
            return {
                date: dayjs(date).format("H:mm A"),
                today: false
            }
        }
        return {
            date: dayjs(date).fromNow(),
            today: true,
        };
    }

    return {
        date: dayjs(date).format("YYYY-MM-DD"),
        today: false,
    };
};
