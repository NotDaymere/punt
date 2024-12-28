export const SettingTabs = {
    GENERAL: undefined,
    OFFERS: "offers",
    RESPONSIBLE_SOCIAL_GAMEPLAY: "responsible-social-gameplay",
    RECOGNIZE_THE_SIGNS: "recognize-the-signs",
    SELF_ASSESSMENT: "self-assessment"
} as const;

export const settingsNav = [
    {
        name: "General",
        id: SettingTabs.GENERAL
    }, {
        name: "Offers",
        id: SettingTabs.OFFERS
    }, {
        name: "Responsible Social Gameplay",
        id: SettingTabs.RESPONSIBLE_SOCIAL_GAMEPLAY
    }, {
        name: "Recognize the Signs",
        id: SettingTabs.RECOGNIZE_THE_SIGNS
    }, {
        name: "Self Assessment",
        id: SettingTabs.SELF_ASSESSMENT
    }
];