import React from "react";
import { useRouter } from "next/router";
import { gamesNavigation } from "../games-navigation";
import { NavItem } from "shared/components/Navigation";
import qs from "qs";

export function useGamesNav() {
    const navigation = React.useMemo(() => gamesNavigation, []);
    const router = useRouter();

    const navActive = React.useMemo(() => {
        const tab = router.query.tab?.toString();
        if (!tab) {
            return navigation[0];
        }
        return (
            navigation.find((item) => item.id.toLowerCase() === tab.toLowerCase()) || navigation[0]
        );
    }, [router.query, navigation]);

    const changeActiveNav = (item: NavItem) => {
        router.push(
            {
                query: qs.stringify({
                    ...router.query,
                    tab: item.id === navigation[0]?.id ? undefined : item.id
                }),
            },
            "",
            { shallow: true }
        );
    };

    return { navigation, navActive, changeActiveNav };
}
