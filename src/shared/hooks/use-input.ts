import { useRef, useState } from 'react';

interface useInputProps {
    defaultValue?: string;
    timeout?: number;
    onSetValue?: (value: string) => void;
}

export const useInput = (props?: useInputProps) => {
    const [state, setState] = useState({
        value: props?.defaultValue ?? '',
        typingValue: props?.defaultValue ?? '',
        isTyping: false,
    });
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const setValue = (value: string) =>
        setState((prev) => ({ ...prev, value, typingValue: value }));

    const handleValue = (
        ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setState((state) => ({ ...state, typingValue: ev.target.value }));

        if (props?.timeout) {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            setState((state) => ({ ...state, isTyping: true }));
            timeoutRef.current = setTimeout(() => {
                setState((state) => ({
                    ...state,
                    isTyping: false,
                    value: ev.target.value,
                }));
                props.onSetValue?.(ev.target.value);
                clearTimeout(timeoutRef.current!);
            }, props.timeout);
        }
    };

    return { ...state, handleValue, setValue };
};
