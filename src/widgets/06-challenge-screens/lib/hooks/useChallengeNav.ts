import qs from 'qs';
import React from "react";
import { ChallengeTab } from "../types";
import { useRouter } from "next/router";

export function useChallengeNav() {
    const router = useRouter();

    const nav = React.useMemo(
        () => [
            {
                id: ChallengeTab.ALL,
                name: "All Challenges",
            },
            {
                id: ChallengeTab.COMPLETED,
                name: "Completed",
            },
            {
                id: ChallengeTab.MINE,
                name: "Mine",
            },
        ],
        []
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

    const changeTab = (tab: ChallengeTab) => {
        const query = qs.stringify({
            ...router.query,
            tab: tab === ChallengeTab.ALL ? undefined : tab
        });

        router.push({ query }, undefined, { shallow: true });
    }

    return {
        nav,
        currentTab,
        changeTab
    };
}
