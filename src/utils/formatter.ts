export function formatNumber(value: string) {
    const formatter = new Intl.NumberFormat();

    return formatter.format(Number(value));
}
