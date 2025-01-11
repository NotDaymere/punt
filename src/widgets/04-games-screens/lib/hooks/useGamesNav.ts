import React from "react";
import { useRouter } from "next/router";
import { CATEGORIES_ENUM, gamesNavigation } from "../games-navigation";
import qs from "qs";
import { NavItem } from "shared/components/Navigation";

export function useGamesNav() {
    const navigation = React.useMemo(() => gamesNavigation, []);
    const router = useRouter();

    const navActive = React.useMemo(() => {
        const category = router.query.category?.toString();
        if (!category) {
            return navigation[0];
        }
        return (
            navigation.find((item) => item.id.toLowerCase() === category.toLowerCase()) ||
            navigation[0]
        );
    }, [router, navigation]);

    const changeActiveNav = (item: NavItem) => {
        router.push({
            pathname: item.id === CATEGORIES_ENUM.ALL_GAMES ? "/games" : "/games/" + item.id,
        });
    };

    return { navigation, navActive, changeActiveNav };
}
