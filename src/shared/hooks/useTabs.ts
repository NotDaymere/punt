import React from "react";
import { useRouter } from "next/router";
import qs from "qs";

interface TabItem {
    id: string;
    name: string;
}


export function useTabs(data: TabItem[], defaultTab?: string) {
    const router = useRouter();

    const nav = React.useMemo(
        () => data,
        [data]
    );

    const currentTab = React.useMemo(
        () => {
            const tab = router.query.tab?.toString();
            if(!tab) {
                return nav[0].id;
            }
            return nav.find((item) => item.id.toString() === tab.toString())?.id || nav[0].id
        },
        [router.query]
    );

    const changeTab = (tab: string) => {
        const query = qs.stringify({
            ...router.query,
            tab: tab === defaultTab ? undefined : tab
        });

        router.push({ query }, undefined, { shallow: true });
    }

    return {
        nav,
        currentTab,
        changeTab
    };
}