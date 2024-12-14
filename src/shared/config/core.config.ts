interface CoreConfig {
    siteName: string;
    apiURL: string;
}

export function getCoreConfig() {
    const env = {
        apiURL: process.env.NEXT_PUBLIC_API_URL,
        siteName: process.env.NEXT_PUBLIC_SITENAME
    };

    if(!env.apiURL || !env.siteName) {
        throw Error ("Config error");
    }

    return env as CoreConfig;
}