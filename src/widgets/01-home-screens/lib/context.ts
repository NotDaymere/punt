import { createProvider } from "shared/utils/create-provider";

interface HomeContext {
    spinAnimated: boolean;
}

const {
    WrapProvider: HomeProvider,
    useProvider: useHomeContext,
    useProviderSetter,
} = createProvider<HomeContext>({
    spinAnimated: false,
});

export const useHomeActions = () => {
    const actions = useProviderSetter();

    return {
        toggleSpinAnimation: (bool: boolean) => actions.setFieldState("spinAnimated", bool),
    };
};

export { HomeProvider, useHomeContext };
