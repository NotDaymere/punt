export function parseValue(value: any, defaultValue?: any) {
    try {
        return JSON.parse(value) || defaultValue;
    } catch (_) {
        return (typeof defaultValue !== "undefined" && defaultValue !== null) ? defaultValue : value;
    }
}