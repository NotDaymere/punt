export function copy(value: string) {
    const input = document.createElement("input");
    input.value = value;
    input.focus();
    input.select()
    navigator.clipboard.writeText(value);
}