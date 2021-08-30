export function truncate(str: string) {
    if (str.length > 10) {
        return (str.substring(0, 200) + "...");
    }
    else {
        return str;
    }
}
