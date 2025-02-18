import React from "react";
import { SortByItem } from "shared/components/SortBy";

export interface NotifyFilterState {
    sort: SortByItem | null;
    category: string[];
    status: string | null;
}

export function useNotifyFilter() {
    const [state, setState] = React.useState<NotifyFilterState>({
        sort: { value: "newest", name: "Newest" },
        category: [],
        status: null
    });

    const reset = () => setState({
        sort: { value: "newest", name: "Newest" },
        category: [],
        status: null
    });

    const setSortBy = (sort: NotifyFilterState['sort']) => setState((prev) => ({ ...prev, sort })); 

    const setCategory = (category: NotifyFilterState['category']) => setState((prev) => ({ ...prev, category })); 

    const toggleCategory = (value: string) => setState((prev) => ({
        ...prev,
        category: state.category.includes(value)
            ? state.category.filter((item) => item !== value)
            : [...state.category, value]
    }))

    const setStatus = (status: NotifyFilterState['status']) => setState((prev) => ({ ...prev, status })); 

    return {
        setCategory,
        setSortBy,
        setStatus,
        toggleCategory,
        reset,
        state
    };
}