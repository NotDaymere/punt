export function updateSearchUrl(search: string) {
    const { pathname, hash } = window.location;
    let url = pathname;
    if (search.trim() !== "") {
        url += `?${search}`;
    }
    if (hash) {
        url += `#${hash}`;
    }
    return url;
}
