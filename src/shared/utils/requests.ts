import qs from 'qs';

export type SearchQuery = Record<string, any> | string | undefined;

export const withSearch = (
    endpoint: string,
    search?: SearchQuery,
    locale: string | boolean = 'en'
) => {
    const withLocale = (
        locale === false ? endpoint : `/${locale}${endpoint}`
    ).replace(/\/\//gi, '/');

    if (!search) {
        return withLocale;
    }

    return (
        withLocale +
        '?' +
        (typeof search === 'object' ? qs.stringify(search) : search)
    );
};
