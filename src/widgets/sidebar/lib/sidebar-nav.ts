import { NavItemProps } from "shared/components/NavItem";

export function getSidebarNav(logged = false): NavItemProps[][] {
    const nav: NavItemProps[][] = [
        [
            {
                name: "Social Casino",
                icon: "/img/icons/sidebar-social-casino.svg",
                children: [
                    {
                        name: "Option 1",
                        href: "#",
                        icon: "/img/icons/sidebar-social-casino.svg",
                    },
                    {
                        name: "Option 2",
                        href: "#",
                        icon: "/img/icons/sidebar-social-casino.svg",
                    },
                    {
                        name: "Option 3",
                        href: "#",
                        icon: "/img/icons/sidebar-social-casino.svg",
                    },
                ],
            },
            {
                name: "Sports",
                href: "#sports",
                icon: "/img/icons/sidebar-sports.svg",
            },
        ]
    ];

    if(logged) {
        nav.push([
            {
                name: "Favorites",
                icon: "/img/icons/sidebar-favorites.svg",
            },
            {
                name: "Recent",
                icon: "/img/icons/sidebar-recent.svg",
            },
            {
                name: "Challenges",
                icon: "/img/icons/sidebar-challenges.svg",
            },
            {
                name: "Giveaways",
                icon: "/img/icons/sidebar-giveaways.svg",
            },
            {
                name: "Refer a Friend",
                icon: "/img/icons/sidebar-refer.svg",
            },
            {
                name: "My Game Play",
                icon: "/img/icons/sidebar-my-games.svg",
            },
            {
                name: "Vip Club",
                icon: "/img/icons/sidebar-vip-club.svg",
            },
            {
                name: "Promotions",
                icon: "/img/icons/sidebar-promotions.svg",
            },
        ])
    } else {
        nav.push([
            {
                name: "Challenges",
                icon: "/img/icons/sidebar-challenges.svg",
            },
            {
                name: "Giveaways",
                icon: "/img/icons/sidebar-giveaways.svg",
            }
        ])
    }

    nav.push(
        [
            {
                name: "Games",
                children: [
                    {
                        name: "Featured",
                        href: "#",
                        icon: "/img/icons/sidebar-games-featured.svg",
                    },
                    {
                        name: "New Releases",
                        href: "#",
                        icon: "/img/icons/sidebar-games-new-releases.svg",
                    },
                    {
                        name: "Slot Games",
                        href: "#",
                        icon: "/img/icons/sidebar-games-slot.svg",
                    },
                    {
                        name: "Live Dealers",
                        href: "#",
                        icon: "/img/icons/sidebar-games-live-dealers.svg",
                    },
                    {
                        name: "Table Games",
                        href: "#",
                        icon: "/img/icons/sidebar-games-table.svg",
                    },
                    {
                        name: "Blackjack",
                        href: "#",
                        icon: "/img/icons/sidebar-games-blackjack.svg",
                    },
                    {
                        name: "Baccarat",
                        href: "#",
                        icon: "/img/icons/sidebar-games-baccarat.svg",
                    },
                    {
                        name: "Roulette",
                        href: "#",
                        icon: "/img/icons/sidebar-games-roulette.svg",
                    },
                    {
                        name: "Scratch Cards",
                        href: "#",
                        icon: "/img/icons/sidebar-games-scratch.svg",
                    },
                    {
                        name: "All Games",
                        href: "#",
                        icon: "/img/icons/sidebar-games-all.svg",
                    },
                ],
            },
        ],
        [
            {
                name: "Live Support",
                icon: "/img/icons/sidebar-lives-support.svg",
            },    
        ]
    );

    return nav;
}