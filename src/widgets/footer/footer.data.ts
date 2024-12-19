interface FooterNav {
    title: string;
    nav: {
        suptitle?: string;
        name: string;
        href: string;
    }[];
}

export const footerData: FooterNav[] = [
    {
        title: "Hyperlinks",
        nav: [
            {
                name: "Privacy Policy",
                href: "#privacy"
            }, 
            {
                name: "Terms and Conditions",
                href: "#terms"
            },
            {
                name: "Sweeps Rules",
                href: "#rules"
            },
            {
                name: "Customer Acceptance Policy",
                href: "#customer"
            },
            {
                name: "Responsible Social Policy",
                href: "#policy"
            }
        ]
    },
    {
        title: "Contact",
        nav: [
            {
                suptitle: "Partners:",
                name: "partners@chanced.com",
                href: "mailto:partners@chanced.com"
            }, 
            {
                suptitle: "Support:",
                name: "help@chanced.com",
                href: "mailto:help@chanced.com"
            },
            {
                suptitle: "Payment Related Queries (24/7):",
                name: "+1 (855) 587-2839",
                href: "tel:18555872839"
            }
        ]
    },
    {
        title: "Follow us",
        nav: [
            {
                name: "Facebook",
                href: "#facebook"
            }, 
            {
                name: "Telegram",
                href: "#telegram"
            },
            {
                name: "Discord",
                href: "#discord"
            },
            {
                name: "instagram",
                href: "#instagram"
            }
        ]
    }
]